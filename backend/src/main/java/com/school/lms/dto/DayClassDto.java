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
    private String youtubeVideoUrl;
    private String externalGameUrl;
    private String taskInstructions;
    private String topicsCoveredPdfUrl;
    private String practicalActivitiesPdfUrl;
    private Boolean isUnlocked;
    private QuizDto quiz;
}
