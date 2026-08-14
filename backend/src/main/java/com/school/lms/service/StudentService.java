package com.school.lms.service;

import com.school.lms.dto.*;
import com.school.lms.entity.*;
import com.school.lms.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class StudentService {

    private final UserRepository userRepository;
    private final DayClassRepository dayClassRepository;
    private final QuizRepository quizRepository;
    private final SubmissionRepository submissionRepository;
    private final AttendanceRepository attendanceRepository;
    private final DailyReportRepository dailyReportRepository;
    private final StudentProgressRepository studentProgressRepository;
    private final SupabaseStorageService supabaseStorageService;

    public StudentProgress completeStep(StepProgressDto dto, String userEmail) {
        User student = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        DayClass dayClass = dayClassRepository.findById(dto.getDayClassId())
                .orElseThrow(() -> new RuntimeException("Day Class not found"));

        StudentProgress progress = studentProgressRepository.findByStudentIdAndDayClassId(student.getId(), dayClass.getId())
                .orElse(StudentProgress.builder()
                        .student(student)
                        .dayClass(dayClass)
                        .videoCompleted(false)
                        .topicPdfCompleted(false)
                        .gameCompleted(false)
                        .quizCompleted(false)
                        .taskCompleted(false)
                        .classCompleted(false)
                        .build());

        if ("STEP_1_VIDEO".equalsIgnoreCase(dto.getStep())) {
            progress.setVideoCompleted(true);
        } else if ("STEP_2_TOPIC_PDF".equalsIgnoreCase(dto.getStep())) {
            progress.setTopicPdfCompleted(true);
        } else if ("STEP_3_WEBSITE".equalsIgnoreCase(dto.getStep())) {
            progress.setGameCompleted(true);
        }

        checkAndMarkClassCompletion(progress);
        return studentProgressRepository.save(progress);
    }

    public QuizResultDto submitQuiz(QuizSubmissionDto submissionDto, String userEmail) {
        User student = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Quiz quiz = quizRepository.findById(submissionDto.getQuizId())
                .orElseThrow(() -> new RuntimeException("Quiz not found"));

        int totalQuestions = quiz.getQuestions().size();
        int correctCount = 0;

        for (QuizQuestion question : quiz.getQuestions()) {
            Long selectedOptionId = submissionDto.getAnswers() != null ? submissionDto.getAnswers().get(question.getId()) : null;
            if (selectedOptionId != null) {
                for (QuizOption option : question.getOptions()) {
                    if (option.getId().equals(selectedOptionId) && Boolean.TRUE.equals(option.getIsCorrect())) {
                        correctCount++;
                        break;
                    }
                }
            }
        }

        int scorePercentage = totalQuestions > 0 ? (correctCount * 100) / totalQuestions : 0;
        boolean passed = scorePercentage >= quiz.getPassingScore();

        // Update Student Progress
        DayClass dayClass = dayClassRepository.findById(submissionDto.getDayClassId())
                .orElseThrow(() -> new RuntimeException("Day Class not found"));

        StudentProgress progress = studentProgressRepository.findByStudentIdAndDayClassId(student.getId(), dayClass.getId())
                .orElse(StudentProgress.builder()
                        .student(student)
                        .dayClass(dayClass)
                        .videoCompleted(false)
                        .topicPdfCompleted(false)
                        .gameCompleted(false)
                        .quizCompleted(false)
                        .taskCompleted(false)
                        .classCompleted(false)
                        .build());

        progress.setQuizCompleted(passed);
        progress.setQuizScore(scorePercentage);
        checkAndMarkClassCompletion(progress);
        studentProgressRepository.save(progress);

        return QuizResultDto.builder()
                .totalQuestions(totalQuestions)
                .correctAnswers(correctCount)
                .scorePercentage(scorePercentage)
                .passed(passed)
                .passingScore(quiz.getPassingScore())
                .build();
    }

    public SubmissionDto uploadTask(Long dayClassId, MultipartFile file, String userEmail) {
        User student = userRepository.findByEmail(userEmail)
                .orElseGet(() -> {
                    User newStudent = User.builder()
                            .fullName(userEmail.contains("@") ? userEmail.split("@")[0] : userEmail)
                            .email(userEmail)
                            .password("$2a$10$x8M9Z7eF9N.G2/9H5j/0ee")
                            .role(Role.ROLE_STUDENT)
                            .build();
                    return userRepository.save(newStudent);
                });

        DayClass dayClass = dayClassRepository.findById(dayClassId)
                .orElseGet(() -> dayClassRepository.findAll().stream().findFirst().orElseThrow(() -> new RuntimeException("Day class not found")));

        String fileName = (file != null && file.getOriginalFilename() != null) ? file.getOriginalFilename() : "worksheet.pdf";
        String fileUrl = "/uploads/" + fileName;
        try {
            if (file != null && !file.isEmpty() && supabaseStorageService != null) {
                fileUrl = supabaseStorageService.uploadFile(file);
            }
        } catch (Exception e) {
            // Fallback file URL
        }

                // Check existing submission by student ID + day class ID OR student email + day class ID
        Optional<Submission> existingSub = submissionRepository.findByStudentIdAndDayClassId(student.getId(), dayClass.getId());
        if (existingSub.isEmpty()) {
            List<Submission> allSubs = submissionRepository.findAll();
            for (Submission s : allSubs) {
                if (s.getStudent() != null && s.getStudent().getEmail() != null &&
                    s.getStudent().getEmail().equalsIgnoreCase(student.getEmail()) &&
                    s.getDayClass() != null && s.getDayClass().getId().equals(dayClass.getId())) {
                    existingSub = Optional.of(s);
                    break;
                }
            }
        }

        Submission submission = existingSub.orElse(Submission.builder()
                .student(student)
                .dayClass(dayClass)
                .build());

        submission.setFileUrl(fileUrl);
        submission.setFileName(fileName);
        submission.setStatus(SubmissionStatus.SUBMITTED);
        submission.setSubmittedAt(LocalDateTime.now());

        Submission saved = submissionRepository.save(submission);

        // Update progress
        StudentProgress progress = studentProgressRepository.findByStudentIdAndDayClassId(student.getId(), dayClassId)
                .orElse(StudentProgress.builder()
                        .student(student)
                        .dayClass(dayClass)
                        .videoCompleted(false)
                        .topicPdfCompleted(false)
                        .gameCompleted(false)
                        .quizCompleted(false)
                        .taskCompleted(false)
                        .classCompleted(false)
                        .build());

        progress.setTaskCompleted(true);
        checkAndMarkClassCompletion(progress);
        studentProgressRepository.save(progress);

        return SubmissionDto.builder()
                .id(saved.getId())
                .studentId(student.getId())
                .studentName(student.getFullName())
                .dayClassId(dayClassId)
                .fileUrl(saved.getFileUrl())
                .fileName(saved.getFileName())
                .status(saved.getStatus())
                .submittedAt(saved.getSubmittedAt())
                .build();
    }

    private void checkAndMarkClassCompletion(StudentProgress progress) {
        boolean all5StepsDone = Boolean.TRUE.equals(progress.getVideoCompleted()) &&
                Boolean.TRUE.equals(progress.getTopicPdfCompleted()) &&
                Boolean.TRUE.equals(progress.getGameCompleted()) &&
                Boolean.TRUE.equals(progress.getQuizCompleted()) &&
                Boolean.TRUE.equals(progress.getTaskCompleted());

        if (all5StepsDone) {
            progress.setClassCompleted(true);
            if (progress.getCompletedAt() == null) {
                progress.setCompletedAt(LocalDateTime.now());
            }
        }
    }

    @Transactional(readOnly = true)
    public StudentOverviewDto getStudentOverview(String userEmail) {
        User student = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Attendance> attendances = attendanceRepository.findByStudentId(student.getId());
        List<DailyReport> reports = dailyReportRepository.findByStudentId(student.getId());
        List<Submission> submissions = submissionRepository.findByStudentId(student.getId());
        List<StudentProgress> progressList = studentProgressRepository.findByStudentId(student.getId());

        int completedClasses = (int) progressList.stream().filter(p -> Boolean.TRUE.equals(p.getClassCompleted())).count();

        List<AttendanceDto> attendanceDtos = attendances.stream().map(a -> AttendanceDto.builder()
                .id(a.getId())
                .studentId(student.getId())
                .studentName(student.getFullName())
                .dayClassId(a.getDayClass().getId())
                .date(a.getDate())
                .status(a.getStatus())
                .build()).toList();

        List<DailyReportDto> reportDtos = reports.stream().map(r -> DailyReportDto.builder()
                .id(r.getId())
                .studentId(student.getId())
                .studentName(student.getFullName())
                .dayClassId(r.getDayClass().getId())
                .date(r.getDate())
                .reportNotes(r.getReportNotes())
                .engagementRating(r.getEngagementRating())
                .build()).toList();

        List<SubmissionDto> submissionDtos = submissions.stream().map(s -> SubmissionDto.builder()
                .id(s.getId())
                .studentId(student.getId())
                .studentName(student.getFullName())
                .dayClassId(s.getDayClass().getId())
                .fileUrl(s.getFileUrl())
                .fileName(s.getFileName())
                .status(s.getStatus())
                .score(s.getScore())
                .teacherFeedback(s.getTeacherFeedback())
                .submittedAt(s.getSubmittedAt())
                .build()).toList();

        return StudentOverviewDto.builder()
                .studentId(student.getId())
                .studentName(student.getFullName())
                .email(student.getEmail())
                .gradeNumber(student.getGrade() != null ? student.getGrade().getGradeNumber() : null)
                .completedClassesCount(completedClasses)
                .totalClassesCount(4) // 4 Day Classes for Grade 5 Chapter 1
                .attendanceHistory(attendanceDtos)
                .dailyReports(reportDtos)
                .taskSubmissions(submissionDtos)
                .build();
    }
}
