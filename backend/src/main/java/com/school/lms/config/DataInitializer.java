package com.school.lms.config;

import com.school.lms.entity.*;
import com.school.lms.repository.*;
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
        log.info("Checking database initialization and integrity status...");

        // 1. Ensure Grades 3 to 10 exist and names match gradeNumbers
        Grade class3 = null;
        Grade class5 = null;

        for (int i = 3; i <= 10; i++) {
            Optional<Grade> gradeOpt = gradeRepository.findByGradeNumber(i);
            Grade grade;
            if (gradeOpt.isEmpty()) {
                grade = Grade.builder()
                        .gradeNumber(i)
                        .name("Class " + i)
                        .build();
                grade = gradeRepository.save(grade);
            } else {
                grade = gradeOpt.get();
                grade.setName("Class " + i);
                grade = gradeRepository.save(grade);
            }
            if (i == 3) class3 = grade;
            if (i == 5) class5 = grade;
        }

        // 2. Fix student user grade links if mismatched
        List<User> students = userRepository.findAll();
        for (User u : students) {
            if (u.getRole() == Role.ROLE_STUDENT && u.getGrade() != null) {
                // Verify user grade's gradeNumber matches
                Integer gn = u.getGrade().getGradeNumber();
                Optional<Grade> correctGrade = gradeRepository.findByGradeNumber(gn);
                if (correctGrade.isPresent() && !u.getGrade().getId().equals(correctGrade.get().getId())) {
                    u.setGrade(correctGrade.get());
                    userRepository.save(u);
                }
            }
        }

        // 3. Ensure Class 5 has Terms & Chapter 1
        if (termRepository.findByGradeId(class5.getId()).isEmpty()) {
            log.info("Seeding Class 5 Term 1, Chapter 1 (Computer Skills) & 4 Day Classes...");

            Term term1Class5 = Term.builder().termNumber(1).title("Term 1").grade(class5).build();
            term1Class5 = termRepository.save(term1Class5);
            Term term2Class5 = Term.builder().termNumber(2).title("Term 2").grade(class5).build();
            termRepository.save(term2Class5);
            Term term3Class5 = Term.builder().termNumber(3).title("Term 3").grade(class5).build();
            termRepository.save(term3Class5);

            // Create Chapter 1 for Class 5 Term 1
            Chapter chapter1Class5 = Chapter.builder()
                    .chapterNumber(1)
                    .title("Chapter 1: Computer Skills (Classes 1–4)")
                    .description("Computer Fundamentals, Hardware Devices, Input/Output/Storage Devices, Computer Care & Ethics.")
                    .isLocked(false) // Unlocked by Admin
                    .term(term1Class5)
                    .build();
            chapter1Class5 = chapterRepository.save(chapter1Class5);

            Chapter chapter2Class5 = Chapter.builder()
                    .chapterNumber(2)
                    .title("Chapter 2: Advanced Software & Applications")
                    .description("Word processing, presentations, and digital media.")
                    .isLocked(true) // Locked until Admin unlocks
                    .term(term1Class5)
                    .build();
            chapterRepository.save(chapter2Class5);

            // 4 Day Classes for Grade 5 Chapter 1 (from asset folder)
            String[] c5Topics = {
                    "Class 1: Computer Fundamentals, Hardware Devices & Computer System",
                    "Class 2: Input, Output & Storage Devices in Daily Life",
                    "Class 3: Computer Care, Digital Ethics & Responsible Technology Use",
                    "Class 4: Revision, Discussion & Assessment"
            };

            String[] c5Descriptions = {
                    "Topics Covered: Introduction to Computers, Computer Fundamentals, Computer System, Hardware Devices, Internal Hardware, External Hardware, Functions of Hardware Devices, Input, Output and Storage Overview, Uses of Computers in Daily Life, Advantages of Computers, Basic Computer Terminology, Revision.",
                    "Topics Covered: Input Devices, Output Devices, Storage Devices, Keyboard, Mouse, Scanner, Microphone, Webcam, Monitor, Printer, Speakers, Hard Disk, Pen Drive, Memory Card, CD/DVD, Device Classification, Uses of Devices in Daily Life, Revision.",
                    "Topics Covered: Computer Care and Maintenance, Safe Handling of Computer Equipment, Computer Lab Rules, Digital Ethics, Responsible Use of Technology, Internet Safety Basics, Creating Strong Passwords, Protecting Personal Information, Cyber Safety Rules, Respecting Others Online, Screen Time Awareness, Good Digital Habits, Digital Footprint, Revision.",
                    "Topics Covered: Revision of Computer Fundamentals, Hardware Devices, Input/Output/Storage Devices, Computer Care, Digital Ethics, Responsible Technology Use, Computer Safety Review, Device Identification Practice, Question & Answer Session, Chapter Assessment, Oral Discussion, Feedback & Improvement Tips."
            };

            String[] c5Activities = {
                    "Class 1: Hardware Device Identification, Computer System Labeling Activity & Picture Matching Worksheet.",
                    "Class 2: Input, Output & Storage Device Sorting Game, Device Classification Worksheet & Team Activity.",
                    "Class 3: Computer Care Checklist, Digital Ethics Role Play, Responsible Technology Discussion & Safety Poster Activity.",
                    "Class 4: Computer Quiz, Picture Identification, Team Challenge, Oral Assessment & Practical Revision."
            };

            String[] c5Videos = {
                    "https://www.youtube.com/embed/Iv8X7aLikLE",
                    "https://www.youtube.com/embed/Jt6mnMnRXzc",
                    "https://www.youtube.com/embed/Xzwvr2dHxgw",
                    "https://www.youtube.com/embed/Iv8X7aLikLE"
            };

            String[] c5Websites = {
                    "https://www.geeksforgeeks.org/computer-science-fundamentals/computer-hardware/",
                    "https://www.computerhope.com/jargon/k/keyboard.htm",
                    "https://www.scribd.com/document/517654952/Do-s-and-Don-Ts-of-Computer-Lab",
                    "https://www.geeksforgeeks.org/computer-science-fundamentals/computer-hardware/"
            };

            for (int i = 1; i <= 4; i++) {
                String topicPdfUrl = "/asset/5th class/chapter 1/class " + i + "/TOPIC COVERED.pdf";
                String activityPdfUrl = "/asset/5th class/chapter 1/class " + i + "/practical activities.pdf";

                DayClass dayClass = DayClass.builder()
                        .dayNumber(i)
                        .topicTitle(c5Topics[i - 1])
                        .topicDescription(c5Descriptions[i - 1])
                        .youtubeVideoUrl(c5Videos[i - 1])
                        .externalGameUrl(c5Websites[i - 1])
                        .taskInstructions("Practical Activity: " + c5Activities[i - 1] + " (Refer to attached PDFs for details)")
                        .topicsCoveredPdfUrl(topicPdfUrl)
                        .practicalActivitiesPdfUrl(activityPdfUrl)
                        .isUnlocked(true) // Admin unlocked
                        .chapter(chapter1Class5)
                        .build();

                dayClass = dayClassRepository.save(dayClass);

                // Create Quiz for Day Class
                Quiz quiz = Quiz.builder()
                        .title("Class " + i + " Computer Skills Quiz")
                        .passingScore(80)
                        .dayClass(dayClass)
                        .build();

                QuizQuestion q1 = QuizQuestion.builder()
                        .questionText("Which component is considered internal hardware?")
                        .quiz(quiz)
                        .build();

                QuizOption o1 = QuizOption.builder().optionText("CPU / Motherboard").isCorrect(true).question(q1).build();
                QuizOption o2 = QuizOption.builder().optionText("Printer").isCorrect(false).question(q1).build();
                QuizOption o3 = QuizOption.builder().optionText("External USB Flash Drive").isCorrect(false).question(q1).build();
                q1.setOptions(List.of(o1, o2, o3));

                quiz.setQuestions(List.of(q1));
                quizRepository.save(quiz);
            }
        }

        // 4. Ensure test users exist
        if (!userRepository.existsByEmail("student5@school.com")) {
            User student5 = User.builder()
                    .email("student5@school.com")
                    .password(passwordEncoder.encode("student123"))
                    .fullName("Emma Watson (Class 5 Student & Parent)")
                    .role(Role.ROLE_STUDENT)
                    .grade(class5)
                    .build();
            userRepository.save(student5);
        } else {
            User student5 = userRepository.findByEmail("student5@school.com").get();
            student5.setGrade(class5);
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

        if (!userRepository.existsByEmail("superadmin@school.com")) {
            User superAdmin = User.builder()
                    .email("superadmin@school.com")
                    .password(passwordEncoder.encode("admin123"))
                    .fullName("Super Admin User")
                    .role(Role.ROLE_ADMIN)
                    .build();
            userRepository.save(superAdmin);
        }

        if (!userRepository.existsByEmail("teacher@school.com")) {
            User teacher = User.builder()
                    .email("teacher@school.com")
                    .password(passwordEncoder.encode("teacher123"))
                    .fullName("Class 5 Teacher - Mr. Davis")
                    .role(Role.ROLE_TEACHER)
                    .build();
            userRepository.save(teacher);
        }

        log.info("Database check & auto-repair complete!");
    }
}
