import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const SubmissionsPage = ({ searchFilter }) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [classFilter, setClassFilter] = useState('ALL');
  const [sortField, setSortField] = useState('submittedAt');
  const [sortOrder, setSortOrder] = useState('desc');

  // Modal State
  const [reviewerScore, setReviewerScore] = useState(100);
  const [reviewerFeedback, setReviewerFeedback] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchSubmissions();
    const interval = setInterval(fetchSubmissions, 4000); // 4s real-time poll from backend
    return () => clearInterval(interval);
  }, []);

  const fetchSubmissions = async () => {
    try {
      const data = await apiService.getSubmissions();
      setSubmissions(data);
    } catch (err) {
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (sub) => {
    setSelectedSubmission(sub);
    setReviewerScore(sub.score || 100);
    setReviewerFeedback(sub.teacherFeedback || 'Approved! Chapter completed and next chapter unlocked.');
  };

  const handleApprove = async () => {
    if (!selectedSubmission) return;
    setActionLoading(true);
    try {
      await apiService.approveSubmission(selectedSubmission.id, reviewerScore, reviewerFeedback);
      setSelectedSubmission(null);
      fetchSubmissions();
      window.dispatchEvent(new Event('storage'));
    } catch (err) {
      alert('Error approving submission: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    if (!selectedSubmission) return;
    setActionLoading(true);
    try {
      await apiService.rejectSubmission(selectedSubmission.id, reviewerFeedback || 'Rejected. Please review requirements and resubmit.');
      setSelectedSubmission(null);
      fetchSubmissions();
      window.dispatchEvent(new Event('storage'));
    } catch (err) {
      alert('Error rejecting submission: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Filter & Sort Logic
  const filteredSubmissions = submissions.filter((sub) => {
    const query = (searchFilter || '').toLowerCase();
    const matchesSearch =
      sub.studentName.toLowerCase().includes(query) ||
      sub.chapterTitle.toLowerCase().includes(query) ||
      sub.fileName.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'PENDING' && sub.status === 'SUBMITTED') ||
      (statusFilter === 'APPROVED' && (sub.status === 'GRADED' || sub.status === 'REVIEWED')) ||
      (statusFilter === 'REJECTED' && sub.status === 'REJECTED');

    const matchesClass = classFilter === 'ALL' || sub.gradeNumber.toString() === classFilter;

    return matchesSearch && matchesStatus && matchesClass;
  });

  const getStatusBadge = (status) => {
    if (status === 'SUBMITTED') return <span className="badge badge-pending"><i className="fa-solid fa-clock"></i> Pending Review</span>;
    if (status === 'GRADED' || status === 'REVIEWED') return <span className="badge badge-approved"><i className="fa-solid fa-check"></i> Approved</span>;
    if (status === 'REJECTED') return <span className="badge badge-rejected"><i className="fa-solid fa-xmark"></i> Rejected</span>;
    return <span className="badge badge-unlocked">{status}</span>;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Student Submissions Module</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
            Read existing submission records, review student worksheets, and execute Chapter Unlock Workflow.
          </p>
        </div>
        <button className="btn btn-outline" onClick={fetchSubmissions}>
          <i className="fa-solid fa-rotate"></i> Refresh Sync
        </button>
      </div>

      {/* Filters Toolbar */}
      <div className="panel-card" style={{ padding: '16px 24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', marginRight: '8px' }}>STATUS:</span>
            <select
              className="form-control"
              style={{ width: '160px', display: 'inline-block' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Statuses</option>
              <option value="PENDING">Pending Only</option>
              <option value="APPROVED">Approved Only</option>
              <option value="REJECTED">Rejected Only</option>
            </select>
          </div>

          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', marginRight: '8px' }}>CLASS / GRADE:</span>
            <select
              className="form-control"
              style={{ width: '160px', display: 'inline-block' }}
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              <option value="ALL">All Grades</option>
              <option value="3">Grade 3</option>
              <option value="4">Grade 4</option>
              <option value="5">Grade 5</option>
            </select>
          </div>

          <div style={{ marginLeft: 'auto', color: 'var(--text-secondary)', fontSize: '13px' }}>
            Showing <strong>{filteredSubmissions.length}</strong> of <strong>{submissions.length}</strong> records
          </div>
        </div>
      </div>

      {/* Submissions Data Table */}
      <div className="panel-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Student email</th>
                <th>Grade / Class</th>
                <th>Submitted At</th>
                <th>Status</th>
                <th>Reviewer Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                    <i className="fa-solid fa-folder-open" style={{ fontSize: '36px', marginBottom: '10px', display: 'block' }}></i>
                    No student submissions found matching current criteria.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => (
                  <tr key={sub.id}>
                    <td>
                      <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{sub.studentName}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{sub.studentEmail}</div>
                    </td>
                    <td>
                      <span className="badge badge-unlocked">Class {sub.gradeNumber}</span>
                    </td>
                    <td>
                      <div style={{ fontWeight: '500' }}>{sub.chapterTitle}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{sub.topicTitle}</div>
                    </td>
                    <td style={{ fontSize: '12px' }}>
                      {new Date(sub.submittedAt).toLocaleDateString()} • {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td>{getStatusBadge(sub.status)}</td>
                    <td>
                      {sub.score !== null && sub.score !== undefined ? (
                        <strong style={{ color: 'var(--success)' }}>{sub.score}%</strong>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>-</span>
                      )}
                    </td>
                    <td style={{ fontSize: '12px', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {sub.teacherFeedback || <span style={{ color: 'var(--text-muted)' }}>No reviewer notes</span>}
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm" onClick={() => handleOpenModal(sub)}>
                        <i className="fa-solid fa-up-right-from-square"></i> Review Modal
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submission Review & Chapter Unlock Modal */}
      {selectedSubmission && (
        <div className="modal-backdrop" onClick={() => setSelectedSubmission(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Submission Review & Chapter Unlock</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Student: {selectedSubmission.studentName} (Class {selectedSubmission.gradeNumber})
                </span>
              </div>
              <button className="icon-btn" onClick={() => setSelectedSubmission(null)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-body">
              {/* Submission Metadata */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px', background: 'var(--bg-subtle)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Course / Chapter</div>
                  <div style={{ fontWeight: '600', fontSize: '13px', marginTop: '2px' }}>{selectedSubmission.chapterTitle}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Topic Title</div>
                  <div style={{ fontWeight: '600', fontSize: '13px', marginTop: '2px' }}>{selectedSubmission.topicTitle}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Submission File</div>
                  <div style={{ fontWeight: '600', fontSize: '13px', marginTop: '2px', color: 'var(--primary)' }}>
                    <i className="fa-solid fa-file-pdf"></i> {selectedSubmission.fileName}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Current Status</div>
                  <div style={{ marginTop: '2px' }}>{getStatusBadge(selectedSubmission.status)}</div>
                </div>
              </div>

              {/* File Viewer Box */}
              <div style={{ marginBottom: '20px' }}>
                <label className="form-label">Submitted Practical Worksheet File Preview</label>
                <div style={{ background: '#000', border: '1px solid var(--border-color)', borderRadius: '12px', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                  <i className="fa-solid fa-file-pdf" style={{ fontSize: '48px', color: '#ef4444', marginBottom: '12px' }}></i>
                  <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>{selectedSubmission.fileName}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '4px' }}>
                    Uploaded on {new Date(selectedSubmission.submittedAt).toLocaleString()}
                  </span>
                  <a
                    href={selectedSubmission.fileUrl || '/asset/5th class/chapter 1/CLASSES COVERED.pdf'}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: '14px' }}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Open PDF Document in Full Screen
                  </a>
                </div>
              </div>

              {/* Review Controls Form */}
              <div className="form-group">
                <label className="form-label">Score / Grade (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="form-control"
                  value={reviewerScore}
                  onChange={(e) => setReviewerScore(parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Reviewer Comments / Feedback Note</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter feedback for student..."
                  value={reviewerFeedback}
                  onChange={(e) => setReviewerFeedback(e.target.value)}
                />
              </div>

              <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '12px', color: 'var(--success)' }}>
                <i className="fa-solid fa-unlock"></i> <strong>Chapter Unlock Workflow Note:</strong> Approving this submission updates the student backend database and automatically unlocks the next chapter for {selectedSubmission.studentName} in their student portal.
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setSelectedSubmission(null)}>
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={handleReject}
                disabled={actionLoading}
              >
                <i className="fa-solid fa-xmark"></i> Reject Submission
              </button>
              <button
                className="btn btn-success"
                onClick={handleApprove}
                disabled={actionLoading}
              >
                <i className="fa-solid fa-check"></i> Approve & Unlock Next Chapter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
