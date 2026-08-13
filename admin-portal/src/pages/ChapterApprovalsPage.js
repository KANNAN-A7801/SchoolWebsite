import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const ChapterApprovalsPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedGradeNumber, setSelectedGradeNumber] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await apiService.getCourses();
      setCourses(data);
      if (data && data.length > 0) {
        // If current selected grade isn't in fetched grades, pick first grade
        const exists = data.some(c => c.gradeNumber === selectedGradeNumber);
        if (!exists) {
          setSelectedGradeNumber(data[0].gradeNumber);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentCourse = courses.find(c => c.gradeNumber === selectedGradeNumber) || null;
  const chapters = currentCourse?.chapters || [];

  const handleToggleLock = async (chapterId, currentLockState) => {
    const newLockState = !currentLockState;
    try {
      await apiService.unlockChapter(chapterId, newLockState);
      // Update local state live
      setCourses(prevCourses => {
        const updated = prevCourses.map(course => {
          if (course.gradeNumber === selectedGradeNumber && course.chapters) {
            return {
              ...course,
              chapters: course.chapters.map(c =>
                c.id === chapterId ? { ...c, isLocked: newLockState } : c
              )
            };
          }
          return course;
        });
        localStorage.setItem('lms_admin_courses', JSON.stringify(updated));
        window.dispatchEvent(new Event('storage'));
        return updated;
      });
    } catch (err) {
      alert('Error updating lock status: ' + err.message);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Chapter Approvals & Lock Workflow</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
            Manage curriculum availability and manual chapter unlock overrides for student progression.
          </p>
        </div>

        {/* Dynamic Grade Selection Buttons for All Grades in DB */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {courses.map((course) => (
            <button
              key={course.id}
              className={`btn btn-sm ${selectedGradeNumber === course.gradeNumber ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setSelectedGradeNumber(course.gradeNumber)}
            >
              Class {course.gradeNumber}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
          <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '24px', marginBottom: '10px' }}></i>
          <div>Loading chapters from database...</div>
        </div>
      ) : chapters.length === 0 ? (
        <div className="panel-card" style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--text-muted)' }}>
          <i className="fa-solid fa-folder-open" style={{ fontSize: '42px', marginBottom: '14px', display: 'block', color: 'var(--primary)' }}></i>
          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '6px' }}>
            No Chapters Found for Class {selectedGradeNumber}
          </h3>
          <p style={{ fontSize: '13px', maxWidth: '480px', margin: '0 auto' }}>
            There are currently no chapters created or initialized in the database for Class {selectedGradeNumber}. Switch to Class 5 to view unlocked active chapters.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {chapters.map((ch) => (
            <div key={ch.id} className="panel-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-unlocked">Class {selectedGradeNumber} • Chapter {ch.chapterNumber}</span>
                  {ch.isLocked ? (
                    <span className="badge badge-rejected"><i className="fa-solid fa-lock"></i> Locked</span>
                  ) : (
                    <span className="badge badge-approved"><i className="fa-solid fa-lock-open"></i> Unlocked & Active</span>
                  )}
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>{ch.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  {ch.description || `Contains ${ch.dayClasses ? ch.dayClasses.length : 4} Day Classes & Step-by-Step Practical Assignments.`}
                </p>

                {ch.dayClasses && ch.dayClasses.length > 0 && (
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Class Topics Covered ({ch.dayClasses.length} Day Classes)</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxHeight: '180px', overflowY: 'auto', paddingRight: '4px' }}>
                      {ch.dayClasses.map((dc) => (
                        <div key={dc.id} style={{ fontSize: '11px', color: 'var(--text-secondary)', background: 'var(--bg-subtle)', padding: '6px 10px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                          <i className="fa-solid fa-book-open" style={{ marginRight: '8px', color: 'var(--primary)', flexShrink: 0 }}></i>
                          <span style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{dc.topicTitle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {ch.isLocked ? 'Students cannot access' : 'Accessible by all Grade ' + selectedGradeNumber + ' students'}
                </span>
                <button
                  className={`btn btn-sm ${ch.isLocked ? 'btn-success' : 'btn-outline'}`}
                  onClick={() => handleToggleLock(ch.id, ch.isLocked)}
                >
                  <i className={`fa-solid ${ch.isLocked ? 'fa-lock-open' : 'fa-lock'}`}></i>
                  {ch.isLocked ? 'Unlock Chapter Now' : 'Lock Chapter'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
