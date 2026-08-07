package com.school.lms.controller;

import com.school.lms.dto.*;
import com.school.lms.entity.SubmissionStatus;
import com.school.lms.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/teacher")
@RequiredArgsConstructor
@PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
public class TeacherController {

    private final TeacherService teacherService;

    @PutMapping("/classes/{classId}/unlock")
    public ResponseEntity<DayClassDto> unlockDayClass(@PathVariable Long classId) {
        return ResponseEntity.ok(teacherService.unlockDayClass(classId));
    }

    @PostMapping("/attendance")
    public ResponseEntity<AttendanceDto> markAttendance(@RequestBody AttendanceDto dto) {
        return ResponseEntity.ok(teacherService.markAttendance(dto));
    }

    @PostMapping("/daily-report")
    public ResponseEntity<DailyReportDto> createDailyReport(@RequestBody DailyReportDto dto) {
        return ResponseEntity.ok(teacherService.createDailyReport(dto));
    }

    @PutMapping("/submissions/{submissionId}/review")
    public ResponseEntity<SubmissionDto> reviewSubmission(
            @PathVariable Long submissionId,
            @RequestParam Integer score,
            @RequestParam(required = false) String feedback,
            @RequestParam(required = false) SubmissionStatus status) {
        return ResponseEntity.ok(teacherService.reviewSubmission(submissionId, score, feedback, status));
    }
}
