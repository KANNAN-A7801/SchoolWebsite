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
public class StudentOverviewDto {
    private Long studentId;
    private String studentName;
    private String email;
    private Integer gradeNumber;
    private Integer completedClassesCount;
    private Integer totalClassesCount;
    private List<AttendanceDto> attendanceHistory;
    private List<DailyReportDto> dailyReports;
    private List<SubmissionDto> taskSubmissions;
}
