package com.school.lms.repository;

import com.school.lms.entity.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Long> {

    List<Submission> findByStudentId(Long studentId);

    List<Submission> findByDayClassId(Long dayClassId);

    Optional<Submission> findByStudentIdAndDayClassId(Long studentId, Long dayClassId);
}
