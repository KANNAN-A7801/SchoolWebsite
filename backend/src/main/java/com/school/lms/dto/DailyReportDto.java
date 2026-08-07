package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DailyReportDto {
    private Long id;
    private Long studentId;
    private String studentName;
    private Long dayClassId;
    private LocalDate date;
    private String reportNotes;
    private Integer engagementRating;
}
