import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const AdminManagementPage = () => {
  const [admins, setAdmins] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('admin123');
  const [role, setRole] = useState('admin');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const data = await apiService.getAdmins();
      setAdmins(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await apiService.createAdmin({ fullName, email, password, role });
      setShowCreateModal(false);
      setFullName('');
      setEmail('');
      fetchAdmins();
    } catch (err) {
      alert('Error creating admin user: ' + err.message);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="user-role-badge super_admin">SUPER ADMIN ONLY</span>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', marginTop: '6px' }}>Admin User Management</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
            Provision admin users, assign roles, inspect activity logs, and configure security permissions.
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
          <i className="fa-solid fa-user-plus"></i> Create New Admin User
        </button>
      </div>

      <div className="panel-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Admin Name</th>
                <th>Email Address</th>
                <th>Assigned Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((adm) => (
                <tr key={adm.id}>
                  <td>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{adm.fullName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ID: #ADM-{adm.id}</div>
                  </td>
                  <td>{adm.email}</td>
                  <td>
                    <span className={`user-role-badge ${adm.role || 'admin'}`}>
                      {adm.role === 'super_admin' ? 'SUPER ADMIN' : 'ADMIN'}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-approved">ACTIVE</span>
                  </td>
                  <td style={{ fontSize: '12px' }}>{adm.lastLogin || 'Today'}</td>
                  <td>
                    <button className="btn btn-outline btn-sm">
                      <i className="fa-solid fa-key"></i> Reset Password
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Log Section */}
      <div className="panel-card" style={{ marginTop: '24px' }}>
        <h3 className="panel-title" style={{ marginBottom: '16px' }}>
          <i className="fa-solid fa-clock-rotate-left text-purple"></i> Admin Security & Activity Audit Log
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(15,23,42,0.4)', borderRadius: '8px', fontSize: '13px' }}>
            <div>
              <strong>Super Admin</strong> approved Submission #102 for student <strong>Aarav Sharma</strong>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Today, 17:12</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(15,23,42,0.4)', borderRadius: '8px', fontSize: '13px' }}>
            <div>
              <strong>Senior Admin</strong> unlocked <strong>Chapter 2</strong> for Grade 5 curriculum
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Today, 16:45</span>
          </div>
        </div>
      </div>

      {/* Create Admin Modal */}
      {showCreateModal && (
        <div className="modal-backdrop" onClick={() => setShowCreateModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Provision New Admin User</h3>
              <button className="icon-btn" onClick={() => setShowCreateModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form onSubmit={handleCreateAdmin}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Inspector General"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@school.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Default Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Role Privilege Level</label>
                  <select
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="admin">Standard Admin (Submissions & Approvals)</option>
                    <option value="super_admin">Super Admin (Full System Privileges)</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <i className="fa-solid fa-user-check"></i> Create Admin Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
