package com.school.lms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "student_progress")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private User student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_class_id", nullable = false)
    private DayClass dayClass;

    @Column(name = "video_completed", nullable = false)
    private Boolean videoCompleted;

    @Column(name = "game_completed", nullable = false)
    private Boolean gameCompleted;

    @Column(name = "quiz_completed", nullable = false)
    private Boolean quizCompleted;

    @Column(name = "quiz_score")
    private Integer quizScore;

    @Column(name = "task_completed", nullable = false)
    private Boolean taskCompleted;

    @Column(name = "class_completed", nullable = false)
    private Boolean classCompleted;

    @Column(name = "completed_at")
    private LocalDateTime completedAt;
}
