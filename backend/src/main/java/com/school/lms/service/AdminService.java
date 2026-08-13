package com.school.lms.service;

import com.school.lms.dto.*;
import com.school.lms.entity.*;
import com.school.lms.repository.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class AdminService {

    private final ChapterRepository chapterRepository;
    private final SubmissionRepository submissionRepository;
    private final UserRepository userRepository;
    private final GradeRepository gradeRepository;
    private final DayClassRepository dayClassRepository;
    private final StudentProgressRepository studentProgressRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminService(
            ChapterRepository chapterRepository,
            SubmissionRepository submissionRepository,
            UserRepository userRepository,
            GradeRepository gradeRepository,
            DayClassRepository dayClassRepository,
            StudentProgressRepository studentProgressRepository,
            PasswordEncoder passwordEncoder) {
        this.chapterRepository = chapterRepository;
        this.submissionRepository = submissionRepository;
        this.userRepository = userRepository;
        this.gradeRepository = gradeRepository;
        this.dayClassRepository = dayClassRepository;
        this.studentProgressRepository = studentProgressRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public ChapterDto toggleChapterLock(Long chapterId, boolean isLocked) {
        Chapter chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found"));

        chapter.setIsLocked(isLocked);
        Chapter updated = chapterRepository.save(chapter);

        return ChapterDto.builder()
                .id(updated.getId())
                .chapterNumber(updated.getChapterNumber())
                .title(updated.getTitle())
                .description(updated.getDescription())
                .isLocked(updated.getIsLocked())
                .build();
    }

    public AdminDashboardStatsDto getDashboardStats() {
        long totalStudents = userRepository.findByRole(Role.ROLE_STUDENT).size();
        long activeStudents = totalStudents;
        long pendingSubmissions = submissionRepository.findAll().stream()
                .filter(s -> s.getStatus() == SubmissionStatus.SUBMITTED)
                .count();
        long approvedToday = submissionRepository.findAll().stream()
                .filter(s -> s.getStatus() == SubmissionStatus.REVIEWED || s.getStatus() == SubmissionStatus.GRADED)
                .count();
        long rejectedToday = submissionRepository.findAll().stream()
                .filter(s -> s.getStatus() == SubmissionStatus.REJECTED)
                .count();
        long chaptersUnlocked = chapterRepository.findAll().stream()
                .filter(c -> Boolean.FALSE.equals(c.getIsLocked()))
                .count();
        long coursesCount = gradeRepository.count();
        double attendancePercentage = totalStudents > 0 ? 100.0 : 0.0;

        return AdminDashboardStatsDto.builder()
                .totalStudents(totalStudents)
                .activeStudents(activeStudents)
                .pendingSubmissions(pendingSubmissions)
                .approvedToday(approvedToday)
                .rejectedToday(rejectedToday)
                .chaptersUnlocked(chaptersUnlocked)
                .coursesCount(coursesCount)
                .attendancePercentage(attendancePercentage)
                .build();
    }

    public List<AdminSubmissionDto> getAllSubmissions() {
        return submissionRepository.findAll().stream()
                .map(this::mapToAdminSubmissionDto)
                .collect(Collectors.toList());
    }

    public AdminSubmissionDto getSubmissionById(Long id) {
        Submission submission = submissionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Submission not found with ID: " + id));
        return mapToAdminSubmissionDto(submission);
    }

    public AdminSubmissionDto approveSubmission(Long id, Integer score, String feedback) {
        Submission submission = submissionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Submission not found with ID: " + id));

        submission.setStatus(SubmissionStatus.GRADED);
        submission.setScore(score != null ? score : 100);
        submission.setTeacherFeedback(feedback != null ? feedback : "Great job! Chapter completed and next chapter unlocked.");

        Submission saved = submissionRepository.save(submission);

        // Chapter unlock workflow integration: unlock next class for this student
        unlockNextClassForStudent(saved.getStudent(), saved.getDayClass());

        return mapToAdminSubmissionDto(saved);
    }

    public AdminSubmissionDto rejectSubmission(Long id, String feedback) {
        Submission submission = submissionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Submission not found with ID: " + id));

        submission.setStatus(SubmissionStatus.REJECTED);
        submission.setTeacherFeedback(feedback != null ? feedback : "Needs improvement. Please review and resubmit.");

        Submission saved = submissionRepository.save(submission);
        return mapToAdminSubmissionDto(saved);
    }

    private void unlockNextClassForStudent(User student, DayClass currentDayClass) {
        Long nextDayClassId = currentDayClass.getId() + 1;
        Optional<DayClass> nextDayClassOpt = dayClassRepository.findById(nextDayClassId);
        if (nextDayClassOpt.isPresent()) {
            DayClass nextDayClass = nextDayClassOpt.get();
            nextDayClass.setIsUnlocked(true);
            dayClassRepository.save(nextDayClass);

            StudentProgress progress = studentProgressRepository.findByStudentIdAndDayClassId(student.getId(), nextDayClass.getId())
                    .orElse(StudentProgress.builder()
                            .student(student)
                            .dayClass(nextDayClass)
                            .videoCompleted(false)
                            .topicPdfCompleted(false)
                            .gameCompleted(false)
                            .quizCompleted(false)
                            .taskCompleted(false)
                            .classCompleted(false)
                            .build());
            studentProgressRepository.save(progress);
        }
    }

    public List<AdminStudentDto> getAllStudents() {
        List<User> students = userRepository.findByRole(Role.ROLE_STUDENT);
        return students.stream().map(s -> {
            int subsCount = submissionRepository.findByStudentId(s.getId()).size();
            long completedCount = studentProgressRepository.findByStudentId(s.getId()).stream()
                    .filter(p -> Boolean.TRUE.equals(p.getClassCompleted()))
                    .count();
            int progress = subsCount > 0 ? Math.min(100, subsCount * 25) : (completedCount > 0 ? (int)(completedCount * 25) : 0);
            return AdminStudentDto.builder()
                    .id(s.getId())
                    .fullName(s.getFullName())
                    .email(s.getEmail())
                    .role("STUDENT")
                    .gradeNumber(s.getGrade() != null ? s.getGrade().getGradeNumber() : 5)
                    .parentName("Parent / Guardian of " + s.getFullName())
                    .progressPercentage(progress)
                    .lastActive("Active Today")
                    .submissionsCount(subsCount)
                    .build();
        }).collect(Collectors.toList());
    }

    public List<AdminCourseDto> getAllCourses() {
        List<Grade> grades = gradeRepository.findAll();
        return grades.stream().map(g -> {
            List<ChapterDto> chapterDtos = new ArrayList<>();
            if (g.getTerms() != null) {
                for (Term t : g.getTerms()) {
                    if (t.getChapters() != null) {
                        for (Chapter c : t.getChapters()) {
                            List<DayClassDto> dayClassDtos = new ArrayList<>();
                            if (c.getDayClasses() != null) {
                                for (DayClass dc : c.getDayClasses()) {
                                    dayClassDtos.add(DayClassDto.builder()
                                            .id(dc.getId())
                                            .dayNumber(dc.getDayNumber())
                                            .topicTitle(dc.getTopicTitle())
                                            .topicDescription(dc.getTopicDescription())
                                            .isUnlockedByAdmin(Boolean.TRUE.equals(dc.getIsUnlocked()))
                                            .build());
                                }
                            }
                            chapterDtos.add(ChapterDto.builder()
                                    .id(c.getId())
                                    .chapterNumber(c.getChapterNumber())
                                    .title(c.getTitle())
                                    .description(c.getDescription())
                                    .isLocked(Boolean.TRUE.equals(c.getIsLocked()))
                                    .dayClasses(dayClassDtos)
                                    .build());
                        }
                    }
                }
            }

            long enrolled = userRepository.findByRole(Role.ROLE_STUDENT).stream()
                    .filter(s -> s.getGrade() != null && s.getGrade().getId().equals(g.getId()))
                    .count();

            return AdminCourseDto.builder()
                .id(g.getId())
                .gradeNumber(g.getGradeNumber())
                .gradeName(g.getName())
                .totalChapters(chapterDtos.size())
                .enrolledStudents((int) enrolled)
                .completionPercentage(enrolled > 0 ? 100.0 : 0.0)
                .chapters(chapterDtos)
                .build();
        }).collect(Collectors.toList());
    }

    public List<User> getAllAdmins() {
        List<User> admins = new ArrayList<>();
        admins.addAll(userRepository.findByRole(Role.ROLE_ADMIN));
        admins.addAll(userRepository.findByRole(Role.ROLE_TEACHER));
        return admins;
    }

    public User createAdminUser(SignupRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered: " + request.getEmail());
        }
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .fullName(request.getFullName())
                .role(request.getRole() != null ? request.getRole() : Role.ROLE_ADMIN)
                .build();
        return userRepository.save(user);
    }

    private AdminSubmissionDto mapToAdminSubmissionDto(Submission s) {
        DayClass dayClass = s.getDayClass();
        Chapter chapter = dayClass != null ? dayClass.getChapter() : null;
        Term term = chapter != null ? chapter.getTerm() : null;
        Grade grade = term != null ? term.getGrade() : (s.getStudent() != null ? s.getStudent().getGrade() : null);

        return AdminSubmissionDto.builder()
                .id(s.getId())
                .studentId(s.getStudent() != null ? s.getStudent().getId() : null)
                .studentName(s.getStudent() != null ? s.getStudent().getFullName() : "Unknown Student")
                .studentEmail(s.getStudent() != null ? s.getStudent().getEmail() : "")
                .gradeNumber(grade != null ? grade.getGradeNumber() : 5)
                .courseTitle(grade != null ? grade.getName() : "Class 5 Curriculum")
                .chapterNumber(chapter != null ? chapter.getChapterNumber() : 1)
                .chapterTitle(chapter != null ? chapter.getTitle() : "Chapter 1")
                .dayClassId(dayClass != null ? dayClass.getId() : null)
                .topicTitle(dayClass != null ? dayClass.getTopicTitle() : "Class Assignment")
                .fileUrl(s.getFileUrl())
                .fileName(s.getFileName())
                .status(s.getStatus())
                .score(s.getScore())
                .teacherFeedback(s.getTeacherFeedback())
                .submittedAt(s.getSubmittedAt())
                .build();
    }
}
