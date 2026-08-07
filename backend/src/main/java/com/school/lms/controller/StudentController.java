package com.school.lms.controller;

import com.school.lms.dto.*;
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

    @PostMapping("/quiz/submit")
    public ResponseEntity<QuizResultDto> submitQuiz(@RequestBody QuizSubmissionDto submissionDto, Principal principal) {
        return ResponseEntity.ok(studentService.submitQuiz(submissionDto, principal.getName()));
    }

    @PostMapping("/task/upload")
    public ResponseEntity<SubmissionDto> uploadTask(
            @RequestParam("dayClassId") Long dayClassId,
            @RequestParam("file") MultipartFile file,
            Principal principal) {
        return ResponseEntity.ok(studentService.uploadTask(dayClassId, file, principal.getName()));
    }

    @GetMapping("/overview")
    public ResponseEntity<StudentOverviewDto> getStudentOverview(Principal principal) {
        return ResponseEntity.ok(studentService.getStudentOverview(principal.getName()));
    }
}
