package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuizResultDto {
    private Integer totalQuestions;
    private Integer correctAnswers;
    private Integer scorePercentage;
    private Boolean passed;
    private Integer passingScore;
}
