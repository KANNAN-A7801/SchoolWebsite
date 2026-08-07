package com.school.lms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "daily_reports")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DailyReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private User student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_class_id", nullable = false)
    private DayClass dayClass;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "report_notes", columnDefinition = "TEXT", nullable = false)
    private String reportNotes;

    @Column(name = "engagement_rating")
    private Integer engagementRating; // 1 to 5 stars
}
