package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminCourseDto {
    private Long id;
    private Integer gradeNumber;
    private String gradeName;
    private Integer totalChapters;
    private Integer enrolledStudents;
    private Double completionPercentage;
    private List<ChapterDto> chapters;
}
