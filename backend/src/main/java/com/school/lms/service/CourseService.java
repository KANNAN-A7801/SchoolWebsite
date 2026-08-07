package com.school.lms.service;

import com.school.lms.dto.*;
import com.school.lms.entity.*;
import com.school.lms.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CourseService {

    private final GradeRepository gradeRepository;
    private final TermRepository termRepository;
    private final ChapterRepository chapterRepository;
    private final DayClassRepository dayClassRepository;
    private final UserRepository userRepository;

    public List<GradeDto> getAllGrades(String currentUserEmail) {
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Grade> grades = gradeRepository.findAll();

        return grades.stream().map(grade -> {
            boolean isAccessible = user.getRole() == Role.ROLE_ADMIN ||
                    user.getRole() == Role.ROLE_TEACHER ||
                    (user.getGrade() != null && user.getGrade().getId().equals(grade.getId()));

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

        // Enforce Grade Lock for Student
        if (user.getRole() == Role.ROLE_STUDENT &&
            (user.getGrade() == null || !user.getGrade().getId().equals(grade.getId()))) {
            throw new RuntimeException("ACCESS_DENIED: Standard/Grade is locked for your account!");
        }

        List<Term> terms = termRepository.findByGradeId(gradeId);

        List<TermDto> termDtos = terms.stream().map(term -> {
            List<Chapter> chapters = chapterRepository.findByTermIdOrderByChapterNumberAsc(term.getId());
            List<ChapterDto> chapterDtos = chapters.stream().map(ch -> ChapterDto.builder()
                    .id(ch.getId())
                    .chapterNumber(ch.getChapterNumber())
                    .title(ch.getTitle())
                    .description(ch.getDescription())
                    .isLocked(ch.getIsLocked())
                    .build()).toList();

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

        // Verify Grade Lock
        if (user.getRole() == Role.ROLE_STUDENT &&
            (user.getGrade() == null || !user.getGrade().getId().equals(chapter.getTerm().getGrade().getId()))) {
            throw new RuntimeException("ACCESS_DENIED: Standard/Grade is locked for your account!");
        }

        // Verify Chapter Lock
        if (user.getRole() == Role.ROLE_STUDENT && Boolean.TRUE.equals(chapter.getIsLocked())) {
            throw new RuntimeException("ACCESS_DENIED: Chapter is locked by admin!");
        }

        List<DayClass> dayClasses = dayClassRepository.findByChapterIdOrderByDayNumberAsc(chapterId);

        List<DayClassDto> dayClassDtos = dayClasses.stream().map(dc -> DayClassDto.builder()
                .id(dc.getId())
                .dayNumber(dc.getDayNumber())
                .topicTitle(dc.getTopicTitle())
                .topicDescription(dc.getTopicDescription())
                .topicsCoveredPdfUrl(dc.getTopicsCoveredPdfUrl())
                .practicalActivitiesPdfUrl(dc.getPracticalActivitiesPdfUrl())
                .isUnlocked(dc.getIsUnlocked())
                .build()).toList();

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

        // Enforce Grade Lock
        if (user.getRole() == Role.ROLE_STUDENT &&
            (user.getGrade() == null || !user.getGrade().getId().equals(grade.getId()))) {
            throw new RuntimeException("ACCESS_DENIED: Standard/Grade is locked for your account!");
        }

        // Enforce Chapter Lock
        if (user.getRole() == Role.ROLE_STUDENT && Boolean.TRUE.equals(chapter.getIsLocked())) {
            throw new RuntimeException("ACCESS_DENIED: Chapter is locked!");
        }

        // Enforce Day Class Lock
        if (user.getRole() == Role.ROLE_STUDENT && Boolean.FALSE.equals(dayClass.getIsUnlocked())) {
            throw new RuntimeException("ACCESS_DENIED: Day class period is locked by teacher!");
        }

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

        return DayClassDto.builder()
                .id(dayClass.getId())
                .dayNumber(dayClass.getDayNumber())
                .topicTitle(dayClass.getTopicTitle())
                .topicDescription(dayClass.getTopicDescription())
                .youtubeVideoUrl(dayClass.getYoutubeVideoUrl())
                .externalGameUrl(dayClass.getExternalGameUrl())
                .taskInstructions(dayClass.getTaskInstructions())
                .topicsCoveredPdfUrl(dayClass.getTopicsCoveredPdfUrl())
                .practicalActivitiesPdfUrl(dayClass.getPracticalActivitiesPdfUrl())
                .isUnlocked(dayClass.getIsUnlocked())
                .quiz(quizDto)
                .build();
    }
}
