package com.school.lms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "grades")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "grade_number", nullable = false, unique = true)
    private Integer gradeNumber; // e.g. 3, 4, 5, 6, 7, 8, 9, 10

    @Column(nullable = false)
    private String name; // e.g. "Class 3"

    @OneToMany(mappedBy = "grade", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Term> terms = new ArrayList<>();
}
