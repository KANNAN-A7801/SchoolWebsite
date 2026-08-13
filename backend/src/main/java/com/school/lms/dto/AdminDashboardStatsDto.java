package com.school.lms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDashboardStatsDto {
    private long totalStudents;
    private long activeStudents;
    private long pendingSubmissions;
    private long approvedToday;
    private long rejectedToday;
    private long chaptersUnlocked;
    private long coursesCount;
    private double attendancePercentage;
}
