package com.school.lms.service;

import com.school.lms.dto.*;
import com.school.lms.entity.*;
import com.school.lms.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Transactional
public class TeacherService {

    private final DayClassRepository dayClassRepository;
    private final UserRepository userRepository;
    private final AttendanceRepository attendanceRepository;
    private final DailyReportRepository dailyReportRepository;
    private final SubmissionRepository submissionRepository;

    public DayClassDto unlockDayClass(Long classId) {
        DayClass dayClass = dayClassRepository.findById(classId)
                .orElseThrow(() -> new RuntimeException("Day class not found"));

        dayClass.setIsUnlocked(true);
        DayClass updated = dayClassRepository.save(dayClass);

        return DayClassDto.builder()
                .id(updated.getId())
                .dayNumber(updated.getDayNumber())
                .topicTitle(updated.getTopicTitle())
                .topicDescription(updated.getTopicDescription())
                .isUnlocked(updated.getIsUnlocked())
                .build();
    }

    public AttendanceDto markAttendance(AttendanceDto dto) {
        User student = userRepository.findById(dto.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        DayClass dayClass = dayClassRepository.findById(dto.getDayClassId())
                .orElseThrow(() -> new RuntimeException("Day class not found"));

        Attendance attendance = attendanceRepository.findByStudentIdAndDayClassId(student.getId(), dayClass.getId())
                .orElse(Attendance.builder()
                        .student(student)
                        .dayClass(dayClass)
                        .build());

        attendance.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        attendance.setStatus(dto.getStatus());

        Attendance saved = attendanceRepository.save(attendance);

        return AttendanceDto.builder()
                .id(saved.getId())
                .studentId(student.getId())
                .studentName(student.getFullName())
                .dayClassId(dayClass.getId())
                .date(saved.getDate())
                .status(saved.getStatus())
                .build();
    }

    public DailyReportDto createDailyReport(DailyReportDto dto) {
        User student = userRepository.findById(dto.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        DayClass dayClass = dayClassRepository.findById(dto.getDayClassId())
                .orElseThrow(() -> new RuntimeException("Day class not found"));

        DailyReport report = dailyReportRepository.findByStudentIdAndDayClassId(student.getId(), dayClass.getId())
                .orElse(DailyReport.builder()
                        .student(student)
                        .dayClass(dayClass)
                        .build());

        report.setDate(dto.getDate() != null ? dto.getDate() : LocalDate.now());
        report.setReportNotes(dto.getReportNotes());
        report.setEngagementRating(dto.getEngagementRating());

        DailyReport saved = dailyReportRepository.save(report);

        return DailyReportDto.builder()
                .id(saved.getId())
                .studentId(student.getId())
                .studentName(student.getFullName())
                .dayClassId(dayClass.getId())
                .date(saved.getDate())
                .reportNotes(saved.getReportNotes())
                .engagementRating(saved.getEngagementRating())
                .build();
    }

    public SubmissionDto reviewSubmission(Long submissionId, Integer score, String feedback, SubmissionStatus status) {
        Submission submission = submissionRepository.findById(submissionId)
                .orElseThrow(() -> new RuntimeException("Submission not found"));

        submission.setScore(score);
        submission.setTeacherFeedback(feedback);
        submission.setStatus(status != null ? status : SubmissionStatus.REVIEWED);

        Submission saved = submissionRepository.save(submission);

        return SubmissionDto.builder()
                .id(saved.getId())
                .studentId(saved.getStudent().getId())
                .studentName(saved.getStudent().getFullName())
                .dayClassId(saved.getDayClass().getId())
                .fileUrl(saved.getFileUrl())
                .fileName(saved.getFileName())
                .status(saved.getStatus())
                .score(saved.getScore())
                .teacherFeedback(saved.getTeacherFeedback())
                .submittedAt(saved.getSubmittedAt())
                .build();
    }
}
