package com.school.lms.repository;

import com.school.lms.entity.StudentProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentProgressRepository extends JpaRepository<StudentProgress, Long> {

    List<StudentProgress> findByStudentId(Long studentId);

    Optional<StudentProgress> findByStudentIdAndDayClassId(Long studentId, Long dayClassId);
}
