import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const [studentsData, submissionsData] = await Promise.all([
        apiService.getStudents(),
        apiService.getSubmissions()
      ]);
      setStudents(studentsData);
      setSubmissions(submissionsData);
    } catch (err) {
      console.error('Error fetching students data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper to determine student's submission status from live backend records
  const getStudentSubmissionStatus = (student) => {
    const studentSub = submissions.find(
      (sub) => sub.studentId === student.id || sub.studentEmail === student.email
    );

    if (!studentSub) {
      return <span className="badge badge-pending">Pending</span>;
    }

    const status = studentSub.status;
    if (status === 'SUBMITTED') {
      return <span className="badge badge-pending">Pending</span>;
    }
    if (status === 'GRADED' || status === 'REVIEWED') {
      return <span className="badge badge-approved">Approved</span>;
    }
    if (status === 'REJECTED') {
      return <span className="badge badge-rejected">Rejected</span>;
    }
    return <span className="badge badge-pending">Pending</span>;
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Students</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
          Live student roster and submission status directly from backend.
        </p>
      </div>

      <div className="panel-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Class / Grade</th>
                <th>Submission Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                    Loading live student data...
                  </td>
                </tr>
              ) : students.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                    No student records found.
                  </td>
                </tr>
              ) : (
                students.map((st) => (
                  <tr key={st.id}>
                    <td>
                      <a
                        href={`mailto:${st.email}`}
                        style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}
                      >
                        {st.email}
                      </a>
                    </td>
                    <td>
                      <span className="badge badge-unlocked">
                        Grade {st.gradeNumber || 5}
                      </span>
                    </td>
                    <td>{getStudentSubmissionStatus(st)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
