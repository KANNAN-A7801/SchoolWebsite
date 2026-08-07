package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StepProgressDto {
    private Long dayClassId;
    private String step; // "STEP_1_VIDEO", "STEP_2_TOPIC_PDF", "STEP_3_WEBSITE"
}
