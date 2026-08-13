package com.school.lms.config;

import com.school.lms.entity.Grade;
import com.school.lms.entity.Term;
import com.school.lms.entity.Chapter;
import com.school.lms.entity.DayClass;
import com.school.lms.entity.Quiz;
import com.school.lms.entity.QuizQuestion;
import com.school.lms.entity.QuizOption;
import com.school.lms.entity.User;
import com.school.lms.entity.Role;
import com.school.lms.repository.GradeRepository;
import com.school.lms.repository.TermRepository;
import com.school.lms.repository.ChapterRepository;
import com.school.lms.repository.DayClassRepository;
import com.school.lms.repository.QuizRepository;
import com.school.lms.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final GradeRepository gradeRepository;
    private final TermRepository termRepository;
    private final ChapterRepository chapterRepository;
    private final DayClassRepository dayClassRepository;
    private final QuizRepository quizRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        log.info("Checking database initialization and integrity status for all grades...");

        // 1. Ensure Grades 3 to 10 exist
        for (int i = 3; i <= 10; i++) {
            Optional<Grade> gradeOpt = gradeRepository.findByGradeNumber(i);
            Grade grade;
            if (gradeOpt.isEmpty()) {
                grade = Grade.builder()
                        .gradeNumber(i)
                        .name("Class " + i + " Curriculum")
                        .build();
                grade = gradeRepository.save(grade);
            } else {
                grade = gradeOpt.get();
                grade.setName("Class " + i + " Curriculum");
                grade = gradeRepository.save(grade);
            }

            // Seed Terms & Chapters if grade has no terms
            if (termRepository.findByGradeId(grade.getId()).isEmpty()) {
                log.info("Seeding Term 1 & Chapters for Class " + i + "...");
                Term term1 = Term.builder().termNumber(1).title("Term 1").grade(grade).build();
                term1 = termRepository.save(term1);
                Term term2 = Term.builder().termNumber(2).title("Term 2").grade(grade).build();
                termRepository.save(term2);

                Chapter ch1 = Chapter.builder()
                        .chapterNumber(1)
                        .title("Chapter 1: Class " + i + " Computer Fundamentals & Digital Skills")
                        .description("Comprehensive overview of Class " + i + " core computer concepts and activities.")
                        .isLocked(false)
                        .term(term1)
                        .build();
                ch1 = chapterRepository.save(ch1);

                Chapter ch2 = Chapter.builder()
                        .chapterNumber(2)
                        .title("Chapter 2: Class " + i + " Software & Interactive Projects")
                        .description("Practical exercises, applications, and hands-on projects for Class " + i + ".")
                        .isLocked(true)
                        .term(term1)
                        .build();
                chapterRepository.save(ch2);

                for (int d = 1; d <= 4; d++) {
                    DayClass dc = DayClass.builder()
                            .dayNumber(d)
                            .topicTitle("Class " + d + ": Class " + i + " Lesson Topic " + d)
                            .topicDescription("Detailed concepts and practical instructions for Class " + i + " Lesson " + d + ".")
                            .youtubeVideoUrl("https://www.youtube.com/embed/Iv8X7aLikLE")
                            .externalGameUrl("https://www.geeksforgeeks.org/")
                            .taskInstructions("Practical activity for Class " + i + " Lesson " + d)
                            .topicsCoveredPdfUrl("/asset/" + i + "th class/chapter 1/class " + d + "/TOPIC COVERED.pdf")
                            .practicalActivitiesPdfUrl("/asset/" + i + "th class/chapter 1/class " + d + "/practical activities.pdf")
                            .isUnlocked(true)
                            .chapter(ch1)
                            .build();
                    dc = dayClassRepository.save(dc);

                    Quiz quiz = Quiz.builder()
                            .title("Class " + i + " Lesson " + d + " Quiz")
                            .passingScore(80)
                            .dayClass(dc)
                            .build();

                    QuizQuestion q1 = QuizQuestion.builder()
                            .questionText("Class " + i + " Quiz Question for Lesson " + d + "?")
                            .quiz(quiz)
                            .build();

                    QuizOption o1 = QuizOption.builder().optionText("Correct Option").isCorrect(true).question(q1).build();
                    QuizOption o2 = QuizOption.builder().optionText("Incorrect Option").isCorrect(false).question(q1).build();
                    q1.setOptions(List.of(o1, o2));
                    quiz.setQuestions(List.of(q1));
                    quizRepository.save(quiz);
                }
            }
        }

        // 2. Ensure test users exist
        Grade class5 = gradeRepository.findByGradeNumber(5).orElse(null);

        if (!userRepository.existsByEmail("student5@school.com")) {
            User student5 = User.builder()
                    .email("student5@school.com")
                    .password(passwordEncoder.encode("student123"))
                    .fullName("Emma Watson (Class 5 Student & Parent)")
                    .role(Role.ROLE_STUDENT)
                    .grade(class5)
                    .build();
            userRepository.save(student5);
        }

        if (!userRepository.existsByEmail("admin@school.com")) {
            User admin = User.builder()
                    .email("admin@school.com")
                    .password(passwordEncoder.encode("admin123"))
                    .fullName("System Administrator")
                    .role(Role.ROLE_ADMIN)
                    .build();
            userRepository.save(admin);
        }

        log.info("Database auto-repair & full 8-grade curriculum initialization complete!");
    }
}
