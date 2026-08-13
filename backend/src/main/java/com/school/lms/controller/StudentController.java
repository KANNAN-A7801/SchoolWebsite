package com.school.lms.controller;

import com.school.lms.dto.StepProgressDto;
import com.school.lms.dto.QuizSubmissionDto;
import com.school.lms.dto.QuizResultDto;
import com.school.lms.dto.SubmissionDto;
import com.school.lms.dto.StudentOverviewDto;
import com.school.lms.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @PostMapping("/progress/complete-step")
    public ResponseEntity<Void> completeStep(@RequestBody StepProgressDto stepProgressDto, Principal principal) {
        studentService.completeStep(stepProgressDto, principal.getName());
        return ResponseEntity.ok().build();
    }

    @PostMapping("/quiz/submit")
    public ResponseEntity<QuizResultDto> submitQuiz(@RequestBody QuizSubmissionDto submissionDto, Principal principal) {
        return ResponseEntity.ok(studentService.submitQuiz(submissionDto, principal.getName()));
    }

    @PostMapping("/task/upload")
    public ResponseEntity<SubmissionDto> uploadTask(
            @RequestParam("dayClassId") Long dayClassId,
            @RequestParam(value = "studentEmail", required = false) String studentEmail,
            @RequestParam(value = "file", required = false) MultipartFile file,
            Principal principal) {
        String email = (studentEmail != null && !studentEmail.trim().isEmpty()) ? studentEmail.trim() : (principal != null ? principal.getName() : "student5@school.com");
        return ResponseEntity.ok(studentService.uploadTask(dayClassId, file, email));
    }

    @GetMapping("/overview")
    public ResponseEntity<StudentOverviewDto> getStudentOverview(Principal principal) {
        return ResponseEntity.ok(studentService.getStudentOverview(principal.getName()));
    }
}
