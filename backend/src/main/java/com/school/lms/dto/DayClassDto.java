package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DayClassDto {
    private Long id;
    private Integer dayNumber;
    private String topicTitle;
    private String topicDescription;
    private Boolean isUnlockedByAdmin; // Condition 1: Admin/Teacher unlocked this class
    private Boolean isPrerequisiteCompleted; // Condition 2: Student completed previous class
    private Boolean isAccessibleForStudent; // Condition 1 && Condition 2
    private Boolean isClassFullyCompleted; // True when all 5 steps of this class are done

    // 5 Ordered Steps
    private Step1VideoDto step1Video;
    private Step2TopicPdfDto step2TopicPdf;
    private Step3WebsiteDto step3Website;
    private Step4QuizDto step4Quiz;
    private Step5TaskDto step5Task;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Step1VideoDto {
        private Integer stepNumber;
        private String title;
        private String videoUrl;
        private Boolean isCompleted;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Step2TopicPdfDto {
        private Integer stepNumber;
        private String title;
        private String pdfUrl;
        private Boolean isCompleted;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Step3WebsiteDto {
        private Integer stepNumber;
        private String title;
        private String websiteUrl;
        private Boolean isCompleted;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Step4QuizDto {
        private Integer stepNumber;
        private String title;
        private QuizDto quiz;
        private Integer passingScore;
        private Boolean isCompleted;
        private Integer lastScore;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Step5TaskDto {
        private Integer stepNumber;
        private String title;
        private String taskInstructions;
        private String practicalActivitiesPdfUrl;
        private Boolean isCompleted;
        private SubmissionDto lastSubmission;
    }
}
