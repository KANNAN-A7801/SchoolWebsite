package com.school.lms.controller;

import com.school.lms.dto.ChapterDto;
import com.school.lms.dto.DayClassDto;
import com.school.lms.dto.GradeDto;
import com.school.lms.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping("/grades")
    public ResponseEntity<List<GradeDto>> getAllGrades(Principal principal) {
        return ResponseEntity.ok(courseService.getAllGrades(principal.getName()));
    }

    @GetMapping("/my-grade")
    public ResponseEntity<GradeDto> getMyGradeDetails(Principal principal) {
        return ResponseEntity.ok(courseService.getMyGradeDetails(principal.getName()));
    }

    @GetMapping("/grades/{gradeId}")
    public ResponseEntity<GradeDto> getGradeDetails(@PathVariable Long gradeId, Principal principal) {
        return ResponseEntity.ok(courseService.getGradeDetails(gradeId, principal.getName()));
    }

    @GetMapping("/chapters/{chapterId}")
    public ResponseEntity<ChapterDto> getChapterDetails(@PathVariable Long chapterId, Principal principal) {
        return ResponseEntity.ok(courseService.getChapterDetails(chapterId, principal.getName()));
    }

    @GetMapping("/classes/{classId}")
    public ResponseEntity<DayClassDto> getDayClassDetails(@PathVariable Long classId, Principal principal) {
        return ResponseEntity.ok(courseService.getDayClassDetails(classId, principal.getName()));
    }
}
