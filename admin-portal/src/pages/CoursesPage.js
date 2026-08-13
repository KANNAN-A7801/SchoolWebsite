import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await apiService.getCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Courses & Curriculum Module</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
            Grade 3 to Grade 10 course overview, enrolled student counts, and curriculum analytics.
          </p>
        </div>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {courses.map((course) => (
          <div key={course.id} className="panel-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="badge badge-unlocked">Class {course.gradeNumber}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{course.enrolledStudents} Students Enrolled</span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{course.gradeName}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                Comprehensive curriculum spanning {course.totalChapters} structured chapters with interactive quizzes and practical tasks.
              </p>

              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                  <span>Overall Curriculum Completion</span>
                  <strong>{course.completionPercentage}%</strong>
                </div>
                <div style={{ background: 'var(--border-color)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.completionPercentage}%`, background: 'linear-gradient(90deg, #3b82f6, #10b981)', height: '100%' }}></div>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{course.totalChapters} Chapters Active</span>
              <button className="btn btn-outline btn-sm" onClick={() => setSelectedCourse(course)}>
                <i className="fa-solid fa-eye"></i> View Curriculum
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Curriculum Detail Modal */}
      {selectedCourse && (
        <div className="modal-backdrop" onClick={() => setSelectedCourse(null)}>
          <div className="modal-container" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Curriculum Details: {selectedCourse.gradeName}</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Enrolled Students: {selectedCourse.enrolledStudents} • Total Active Chapters: {selectedCourse.totalChapters}
                </span>
              </div>
              <button className="icon-btn" onClick={() => setSelectedCourse(null)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-body">
              {!selectedCourse.chapters || selectedCourse.chapters.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
                  <i className="fa-solid fa-folder-open" style={{ fontSize: '40px', marginBottom: '12px', display: 'block', color: 'var(--primary)' }}></i>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '4px' }}>No Active Chapters Uploaded</h4>
                  <p style={{ fontSize: '13px' }}>
                    Curriculum for {selectedCourse.gradeName} has not been seeded or created yet in the database.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {selectedCourse.chapters.map((ch) => (
                    <div key={ch.id} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="badge badge-unlocked">Chapter {ch.chapterNumber}</span>
                        {ch.isLocked ? (
                          <span className="badge badge-rejected"><i className="fa-solid fa-lock"></i> Locked</span>
                        ) : (
                          <span className="badge badge-approved"><i className="fa-solid fa-lock-open"></i> Unlocked</span>
                        )}
                      </div>

                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>{ch.title}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>{ch.description}</p>

                      {ch.dayClasses && ch.dayClasses.length > 0 && (
                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                          <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--dark-navy)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                            Day Classes & Covered Topics ({ch.dayClasses.length} Classes)
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {ch.dayClasses.map((dc) => (
                              <div key={dc.id} style={{ background: 'var(--bg-card)', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '12px' }}>
                                <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{dc.topicTitle}</div>
                                {dc.topicDescription && (
                                  <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginTop: '2px' }}>{dc.topicDescription}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => setSelectedCourse(null)}>
                Close Curriculum View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
