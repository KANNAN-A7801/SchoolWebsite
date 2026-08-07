package com.school.lms.repository;

import com.school.lms.entity.DayClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DayClassRepository extends JpaRepository<DayClass, Long> {

    List<DayClass> findByChapterIdOrderByDayNumberAsc(Long chapterId);

    Optional<DayClass> findByChapterIdAndDayNumber(Long chapterId, Integer dayNumber);
}
