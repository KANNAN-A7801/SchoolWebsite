package com.school.lms.service;

import com.school.lms.dto.*;
import com.school.lms.entity.*;
import com.school.lms.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CourseService {

    private final GradeRepository gradeRepository;
    private final TermRepository termRepository;
    private final ChapterRepository chapterRepository;
    private final DayClassRepository dayClassRepository;
    private final UserRepository userRepository;
    private final StudentProgressRepository studentProgressRepository;
    private final SubmissionRepository submissionRepository;

    public List<GradeDto> getAllGrades(String currentUserEmail) {
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Grade> grades = gradeRepository.findAll();

        return grades.stream().map(grade -> {
            boolean isAccessible = user.getRole() == Role.ROLE_ADMIN ||
                    user.getRole() == Role.ROLE_TEACHER ||
                    (user.getGrade() != null && user.getGrade().getGradeNumber().equals(grade.getGradeNumber()));

            return GradeDto.builder()
                    .id(grade.getId())
                    .gradeNumber(grade.getGradeNumber())
                    .name(grade.getName())
                    .isAccessibleForUser(isAccessible)
                    .build();
        }).toList();
    }

    public GradeDto getMyGradeDetails(String currentUserEmail) {
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getGrade() == null) {
            throw new RuntimeException("User has no enrolled grade assigned!");
        }

        return getGradeDetails(user.getGrade().getId(), currentUserEmail);
    }

    public GradeDto getGradeDetails(Long gradeId, String currentUserEmail) {
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Grade grade = gradeRepository.findById(gradeId)
                .orElseThrow(() -> new RuntimeException("Grade not found"));

        // Enforce Grade Lock for Student by Grade Number
        if (user.getRole() == Role.ROLE_STUDENT &&
            (user.getGrade() == null || !user.getGrade().getGradeNumber().equals(grade.getGradeNumber()))) {
            throw new RuntimeException("ACCESS_DENIED: Standard/Grade is locked for your account!");
        }

        List<Term> terms = termRepository.findByGradeId(gradeId);

        List<TermDto> termDtos = terms.stream().map(term -> {
            List<Chapter> chapters = chapterRepository.findByTermIdOrderByChapterNumberAsc(term.getId());
            List<ChapterDto> chapterDtos = chapters.stream().map(ch -> {
                List<DayClass> dayClasses = dayClassRepository.findByChapterIdOrderByDayNumberAsc(ch.getId());
                List<DayClassDto> dayClassDtos = dayClasses.stream().map(dc -> buildDayClassSummaryDto(dc, user)).toList();

                return ChapterDto.builder()
                        .id(ch.getId())
                        .chapterNumber(ch.getChapterNumber())
                        .title(ch.getTitle())
                        .description(ch.getDescription())
                        .isLocked(ch.getIsLocked())
                        .dayClasses(dayClassDtos)
                        .build();
            }).toList();

            return TermDto.builder()
                    .id(term.getId())
                    .termNumber(term.getTermNumber())
                    .title(term.getTitle())
                    .chapters(chapterDtos)
                    .build();
        }).toList();

        return GradeDto.builder()
                .id(grade.getId())
                .gradeNumber(grade.getGradeNumber())
                .name(grade.getName())
                .isAccessibleForUser(true)
                .terms(termDtos)
                .build();
    }

    public ChapterDto getChapterDetails(Long chapterId, String currentUserEmail) {
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Chapter chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found"));

        // Verify Grade Lock by Grade Number
        if (user.getRole() == Role.ROLE_STUDENT &&
            (user.getGrade() == null || !user.getGrade().getGradeNumber().equals(chapter.getTerm().getGrade().getGradeNumber()))) {
            throw new RuntimeException("ACCESS_DENIED: Standard/Grade is locked for your account!");
        }

        // Verify Chapter Lock
        if (user.getRole() == Role.ROLE_STUDENT && Boolean.TRUE.equals(chapter.getIsLocked())) {
            throw new RuntimeException("ACCESS_DENIED: Chapter is locked by admin!");
        }

        List<DayClass> dayClasses = dayClassRepository.findByChapterIdOrderByDayNumberAsc(chapterId);
        List<DayClassDto> dayClassDtos = dayClasses.stream().map(dc -> buildDayClassSummaryDto(dc, user)).toList();

        return ChapterDto.builder()
                .id(chapter.getId())
                .chapterNumber(chapter.getChapterNumber())
                .title(chapter.getTitle())
                .description(chapter.getDescription())
                .isLocked(chapter.getIsLocked())
                .dayClasses(dayClassDtos)
                .build();
    }

    public DayClassDto getDayClassDetails(Long classId, String currentUserEmail) {
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        DayClass dayClass = dayClassRepository.findById(classId)
                .orElseThrow(() -> new RuntimeException("Day class period not found"));

        Chapter chapter = dayClass.getChapter();
        Grade grade = chapter.getTerm().getGrade();

        // Enforce Grade Lock by Grade Number
        if (user.getRole() == Role.ROLE_STUDENT &&
            (user.getGrade() == null || !user.getGrade().getGradeNumber().equals(grade.getGradeNumber()))) {
            throw new RuntimeException("ACCESS_DENIED: Standard/Grade is locked for your account!");
        }

        // Enforce Chapter Lock
        if (user.getRole() == Role.ROLE_STUDENT && Boolean.TRUE.equals(chapter.getIsLocked())) {
            throw new RuntimeException("ACCESS_DENIED: Chapter is locked!");
        }

        // Dual-Condition Progression Check
        boolean isUnlockedByAdmin = Boolean.TRUE.equals(dayClass.getIsUnlocked());
        boolean isPrerequisiteCompleted = true;

        if (dayClass.getDayNumber() > 1) {
            Optional<DayClass> prevClassOpt = dayClassRepository.findByChapterIdAndDayNumber(chapter.getId(), dayClass.getDayNumber() - 1);
            if (prevClassOpt.isPresent()) {
                Optional<StudentProgress> prevProgressOpt = studentProgressRepository.findByStudentIdAndDayClassId(user.getId(), prevClassOpt.get().getId());
                isPrerequisiteCompleted = prevProgressOpt.isPresent() && Boolean.TRUE.equals(prevProgressOpt.get().getClassCompleted());
            }
        }

        boolean isAccessible = isUnlockedByAdmin && isPrerequisiteCompleted;

        if (user.getRole() == Role.ROLE_STUDENT) {
            if (!isUnlockedByAdmin) {
                throw new RuntimeException("ACCESS_DENIED: Class " + dayClass.getDayNumber() + " is locked by Admin/Teacher!");
            }
            if (!isPrerequisiteCompleted) {
                throw new RuntimeException("ACCESS_DENIED: Please complete all 5 steps of Class " + (dayClass.getDayNumber() - 1) + " before accessing Class " + dayClass.getDayNumber() + "!");
            }
        }

        // Fetch Student Progress & Submissions
        Optional<StudentProgress> progressOpt = studentProgressRepository.findByStudentIdAndDayClassId(user.getId(), dayClass.getId());
        Optional<Submission> submissionOpt = submissionRepository.findByStudentIdAndDayClassId(user.getId(), dayClass.getId());

        StudentProgress progress = progressOpt.orElse(null);
        Submission submission = submissionOpt.orElse(null);

        // Build Quiz DTO
        QuizDto quizDto = null;
        if (dayClass.getQuiz() != null) {
            Quiz quiz = dayClass.getQuiz();
            List<QuizDto.QuizQuestionDto> questions = quiz.getQuestions().stream().map(q ->
                    QuizDto.QuizQuestionDto.builder()
                            .id(q.getId())
                            .questionText(q.getQuestionText())
                            .options(q.getOptions().stream().map(o ->
                                    QuizDto.QuizOptionDto.builder()
                                            .id(o.getId())
                                            .optionText(o.getOptionText())
                                            .build()).toList())
                            .build()
            ).toList();

            quizDto = QuizDto.builder()
                    .id(quiz.getId())
                    .title(quiz.getTitle())
                    .passingScore(quiz.getPassingScore())
                    .questions(questions)
                    .build();
        }

        // Build Submission DTO
        SubmissionDto submissionDto = null;
        if (submission != null) {
            submissionDto = SubmissionDto.builder()
                    .id(submission.getId())
                    .studentId(user.getId())
                    .studentName(user.getFullName())
                    .dayClassId(dayClass.getId())
                    .fileUrl(submission.getFileUrl())
                    .fileName(submission.getFileName())
                    .status(submission.getStatus())
                    .score(submission.getScore())
                    .teacherFeedback(submission.getTeacherFeedback())
                    .submittedAt(submission.getSubmittedAt())
                    .build();
        }

        // Build 5 Ordered Steps
        DayClassDto.Step1VideoDto step1 = DayClassDto.Step1VideoDto.builder()
                .stepNumber(1)
                .title("Step a: Watch Class Video")
                .videoUrl(dayClass.getYoutubeVideoUrl())
                .isCompleted(progress != null && Boolean.TRUE.equals(progress.getVideoCompleted()))
                .build();

        DayClassDto.Step2TopicPdfDto step2 = DayClassDto.Step2TopicPdfDto.builder()
                .stepNumber(2)
                .title("Step b: Topics Covered Document")
                .pdfUrl(dayClass.getTopicsCoveredPdfUrl())
                .isCompleted(progress != null && Boolean.TRUE.equals(progress.getTopicPdfCompleted()))
                .build();

        DayClassDto.Step3WebsiteDto step3 = DayClassDto.Step3WebsiteDto.builder()
                .stepNumber(3)
                .title("Step c: Interactive Educational Website Activity")
                .websiteUrl(dayClass.getExternalGameUrl())
                .isCompleted(progress != null && Boolean.TRUE.equals(progress.getGameCompleted()))
                .build();

        DayClassDto.Step4QuizDto step4 = DayClassDto.Step4QuizDto.builder()
                .stepNumber(4)
                .title("Step d: Concept Quiz")
                .quiz(quizDto)
                .passingScore(quizDto != null ? quizDto.getPassingScore() : 80)
                .isCompleted(progress != null && Boolean.TRUE.equals(progress.getQuizCompleted()))
                .lastScore(progress != null ? progress.getQuizScore() : null)
                .build();

        DayClassDto.Step5TaskDto step5 = DayClassDto.Step5TaskDto.builder()
                .stepNumber(5)
                .title("Step e: Practical Activity & Task Upload")
                .taskInstructions(dayClass.getTaskInstructions())
                .practicalActivitiesPdfUrl(dayClass.getPracticalActivitiesPdfUrl())
                .isCompleted(progress != null && Boolean.TRUE.equals(progress.getTaskCompleted()))
                .lastSubmission(submissionDto)
                .build();

        return DayClassDto.builder()
                .id(dayClass.getId())
                .dayNumber(dayClass.getDayNumber())
                .topicTitle(dayClass.getTopicTitle())
                .topicDescription(dayClass.getTopicDescription())
                .isUnlockedByAdmin(isUnlockedByAdmin)
                .isPrerequisiteCompleted(isPrerequisiteCompleted)
                .isAccessibleForStudent(isAccessible)
                .isClassFullyCompleted(progress != null && Boolean.TRUE.equals(progress.getClassCompleted()))
                .step1Video(step1)
                .step2TopicPdf(step2)
                .step3Website(step3)
                .step4Quiz(step4)
                .step5Task(step5)
                .build();
    }

    private DayClassDto buildDayClassSummaryDto(DayClass dc, User user) {
        boolean isUnlockedByAdmin = Boolean.TRUE.equals(dc.getIsUnlocked());
        boolean isPrerequisiteCompleted = true;

        if (dc.getDayNumber() > 1) {
            Optional<DayClass> prevClassOpt = dayClassRepository.findByChapterIdAndDayNumber(dc.getChapter().getId(), dc.getDayNumber() - 1);
            if (prevClassOpt.isPresent()) {
                Optional<StudentProgress> prevProgressOpt = studentProgressRepository.findByStudentIdAndDayClassId(user.getId(), prevClassOpt.get().getId());
                isPrerequisiteCompleted = prevProgressOpt.isPresent() && Boolean.TRUE.equals(prevProgressOpt.get().getClassCompleted());
            }
        }

        boolean isAccessible = isUnlockedByAdmin && isPrerequisiteCompleted;
        Optional<StudentProgress> progressOpt = studentProgressRepository.findByStudentIdAndDayClassId(user.getId(), dc.getId());

        return DayClassDto.builder()
                .id(dc.getId())
                .dayNumber(dc.getDayNumber())
                .topicTitle(dc.getTopicTitle())
                .topicDescription(dc.getTopicDescription())
                .isUnlockedByAdmin(isUnlockedByAdmin)
                .isPrerequisiteCompleted(isPrerequisiteCompleted)
                .isAccessibleForStudent(isAccessible)
                .isClassFullyCompleted(progressOpt.isPresent() && Boolean.TRUE.equals(progressOpt.get().getClassCompleted()))
                .build();
    }
}
