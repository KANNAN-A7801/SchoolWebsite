package com.school.lms.service;

import com.school.lms.dto.ChapterDto;
import com.school.lms.entity.Chapter;
import com.school.lms.repository.ChapterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class AdminService {

    private final ChapterRepository chapterRepository;

    public ChapterDto toggleChapterLock(Long chapterId, boolean isLocked) {
        Chapter chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found"));

        chapter.setIsLocked(isLocked);
        Chapter updated = chapterRepository.save(chapter);

        return ChapterDto.builder()
                .id(updated.getId())
                .chapterNumber(updated.getChapterNumber())
                .title(updated.getTitle())
                .description(updated.getDescription())
                .isLocked(updated.getIsLocked())
                .build();
    }
}
