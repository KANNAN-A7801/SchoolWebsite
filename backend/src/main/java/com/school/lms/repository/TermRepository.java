package com.school.lms.repository;

import com.school.lms.entity.Term;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TermRepository extends JpaRepository<Term, Long> {

    List<Term> findByGradeId(Long gradeId);

    Optional<Term> findByGradeIdAndTermNumber(Long gradeId, Integer termNumber);
}
