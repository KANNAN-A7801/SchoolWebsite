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
public class TermDto {
    private Long id;
    private Integer termNumber;
    private String title;
    private List<ChapterDto> chapters;
}
