package com.school.lms.dto;

import com.school.lms.entity.SubmissionStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminSubmissionDto {
    private Long id;
    private Long studentId;
    private String studentName;
    private String studentEmail;
    private Integer gradeNumber;
    private String courseTitle;
    private Integer chapterNumber;
    private String chapterTitle;
    private Long dayClassId;
    private String topicTitle;
    private String fileUrl;
    private String fileName;
    private SubmissionStatus status;
    private Integer score;
    private String teacherFeedback;
    private LocalDateTime submittedAt;
}
