package com.school.lms.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "day_classes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DayClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "day_number", nullable = false)
    private Integer dayNumber; // e.g. 1, 2, 3, 4, 5

    @Column(name = "topic_title", nullable = false)
    private String topicTitle;

    @Column(name = "topic_description", columnDefinition = "TEXT")
    private String topicDescription;

    @Column(name = "youtube_video_url")
    private String youtubeVideoUrl;

    @Column(name = "external_game_url")
    private String externalGameUrl;

    @Column(name = "task_instructions", columnDefinition = "TEXT")
    private String taskInstructions;

    @Column(name = "topics_covered_pdf_url")
    private String topicsCoveredPdfUrl;

    @Column(name = "practical_activities_pdf_url")
    private String practicalActivitiesPdfUrl;

    @Column(name = "is_unlocked", nullable = false)
    private Boolean isUnlocked;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chapter_id", nullable = false)
    private Chapter chapter;

    @OneToOne(mappedBy = "dayClass", cascade = CascadeType.ALL, orphanRemoval = true)
    private Quiz quiz;
}
