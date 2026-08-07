package com.school.lms.dto;

import com.school.lms.entity.AttendanceStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttendanceDto {
    private Long id;
    private Long studentId;
    private String studentName;
    private Long dayClassId;
    private LocalDate date;
    private AttendanceStatus status;
}
