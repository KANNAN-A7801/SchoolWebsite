package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChapterDto {
    private Long id;
    private Integer chapterNumber;
    private String title;
    private String description;
    private Boolean isLocked;
    private List<DayClassDto> dayClasses;
}
