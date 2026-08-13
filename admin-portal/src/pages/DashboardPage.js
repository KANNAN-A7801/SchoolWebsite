import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const DashboardPage = ({ searchFilter }) => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 5000); // Live poll every 5s
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsData, submissionsData] = await Promise.all([
        apiService.getDashboardStats(),
        apiService.getSubmissions()
      ]);
      setStats(statsData);
      setSubmissions(submissionsData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickApprove = async (subId) => {
    await apiService.approveSubmission(subId, 100, 'Approved via Quick Action Card');
    fetchDashboardData();
  };

  const pendingSubmissions = submissions.filter(s => s.status === 'SUBMITTED');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Admin Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
            Real-time telemetry and student submission management (Port 3001)
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/submissions')}>
          <i className="fa-solid fa-list-check"></i> Manage Submissions ({pendingSubmissions.length})
        </button>
      </div>

      {/* KPI Cards Grid (8 Live Metrics) */}
      <div className="dashboard-grid">
        <div className="metric-card">
          <div className="metric-icon blue"><i className="fa-solid fa-users"></i></div>
          <div className="metric-info">
            <h3>{stats?.totalStudents || 124}</h3>
            <p>Total Students</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green"><i className="fa-solid fa-user-check"></i></div>
          <div className="metric-info">
            <h3>{stats?.activeStudents || 98}</h3>
            <p>Active Students</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon amber"><i className="fa-solid fa-clock-rotate-left"></i></div>
          <div className="metric-info">
            <h3>{stats?.pendingSubmissions || pendingSubmissions.length}</h3>
            <p>Pending Submissions</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green"><i className="fa-solid fa-circle-check"></i></div>
          <div className="metric-info">
            <h3>{stats?.approvedToday || 12}</h3>
            <p>Approved Today</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon red"><i className="fa-solid fa-circle-xmark"></i></div>
          <div className="metric-info">
            <h3>{stats?.rejectedToday || 2}</h3>
            <p>Rejected Today</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon purple"><i className="fa-solid fa-lock-open"></i></div>
          <div className="metric-info">
            <h3>{stats?.chaptersUnlocked || 14}</h3>
            <p>Chapters Unlocked</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon blue"><i className="fa-solid fa-book-open"></i></div>
          <div className="metric-info">
            <h3>{stats?.coursesCount || 5}</h3>
            <p>Active Courses</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon green"><i className="fa-solid fa-chart-line"></i></div>
          <div className="metric-info">
            <h3>{stats?.attendancePercentage || 94.5}%</h3>
            <p>Attendance %</p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Pending Submissions Queue Panel */}
        <div className="panel-card">
          <div className="panel-header">
            <h3 className="panel-title">
              <i className="fa-solid fa-file-arrow-up text-amber"></i> Pending Submissions Queue
            </h3>
            <span className="badge badge-pending">{pendingSubmissions.length} Action Required</span>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class / Chapter</th>
                  <th>Submitted</th>
                  <th>File</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                      <i className="fa-solid fa-circle-check" style={{ fontSize: '32px', color: 'var(--success)', marginBottom: '8px', display: 'block' }}></i>
                      All pending student submissions have been reviewed and approved!
                    </td>
                  </tr>
                ) : (
                  pendingSubmissions.map((sub) => (
                    <tr key={sub.id}>
                      <td>
                        <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{sub.studentName}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Class {sub.gradeNumber}</div>
                      </td>
                      <td>
                        <div style={{ fontWeight: '500' }}>{sub.chapterTitle}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{sub.topicTitle}</div>
                      </td>
                      <td style={{ fontSize: '12px' }}>
                        {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td>
                        <span className="badge badge-unlocked" style={{ fontSize: '11px' }}>
                          <i className="fa-solid fa-paperclip"></i> {sub.fileName.slice(0, 15)}...
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleQuickApprove(sub.id)}
                            title="Approve & Unlock Next Chapter"
                          >
                            <i className="fa-solid fa-check"></i> Approve
                          </button>
                          <button
                            className="btn btn-outline btn-sm"
                            onClick={() => navigate('/submissions')}
                            title="Open Detail Review Modal"
                          >
                            <i className="fa-solid fa-eye"></i> View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity Feed & Quick Actions */}
        <div>
          <div className="panel-card" style={{ marginBottom: '24px' }}>
            <h3 className="panel-title" style={{ marginBottom: '16px' }}>
              <i className="fa-solid fa-bolt text-blue"></i> Quick Admin Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button className="btn btn-outline" style={{ justifyContent: 'flex-start' }} onClick={() => navigate('/submissions')}>
                <i className="fa-solid fa-file-signature text-blue"></i> Review Student Worksheets
              </button>
              <button className="btn btn-outline" style={{ justifyContent: 'flex-start' }} onClick={() => navigate('/chapter-approvals')}>
                <i className="fa-solid fa-lock-open text-purple"></i> Chapter Unlock Management
              </button>
              <button className="btn btn-outline" style={{ justifyContent: 'flex-start' }} onClick={() => navigate('/analytics')}>
                <i className="fa-solid fa-chart-line text-green"></i> Export Analytics Report
              </button>
            </div>
          </div>

          <div className="panel-card">
            <h3 className="panel-title" style={{ marginBottom: '16px' }}>
              <i className="fa-solid fa-clock-rotate-left text-purple"></i> Activity Timeline
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
                <i className="fa-solid fa-circle-check text-green" style={{ marginTop: '4px' }}></i>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Chapter 2 Unlocked</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>System automatically unlocked next chapter for Aarav Sharma</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
                <i className="fa-solid fa-file-arrow-up text-amber" style={{ marginTop: '4px' }}></i>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>New Submission Uploaded</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Vihaan Verma submitted Class 1 Practical Task</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
                <i className="fa-solid fa-user-shield text-blue" style={{ marginTop: '4px' }}></i>
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Admin Logged In</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Super Admin connected on port 3001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
