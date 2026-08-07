package com.school.lms.repository;

import com.school.lms.entity.DailyReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DailyReportRepository extends JpaRepository<DailyReport, Long> {

    List<DailyReport> findByStudentId(Long studentId);

    Optional<DailyReport> findByStudentIdAndDayClassId(Long studentId, Long dayClassId);
}
