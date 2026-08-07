package com.school.lms.dto;

import com.school.lms.entity.SubmissionStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubmissionDto {
    private Long id;
    private Long studentId;
    private String studentName;
    private Long dayClassId;
    private String fileUrl;
    private String fileName;
    private SubmissionStatus status;
    private Integer score;
    private String teacherFeedback;
    private LocalDateTime submittedAt;
}
