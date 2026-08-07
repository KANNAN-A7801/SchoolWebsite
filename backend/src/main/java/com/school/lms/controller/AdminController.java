package com.school.lms.controller;

import com.school.lms.dto.ChapterDto;
import com.school.lms.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminService adminService;

    @PutMapping("/chapters/{chapterId}/lock")
    public ResponseEntity<ChapterDto> toggleChapterLock(
            @PathVariable Long chapterId,
            @RequestParam boolean isLocked) {
        return ResponseEntity.ok(adminService.toggleChapterLock(chapterId, isLocked));
    }
}
