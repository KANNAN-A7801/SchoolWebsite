package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuizSubmissionDto {
    private Long quizId;
    private Long dayClassId;
    // Map of questionId -> selectedOptionId
    private Map<Long, Long> answers;
}
