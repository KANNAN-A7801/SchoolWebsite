import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export const ProfileSettingsPage = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const [fullName, setFullName] = useState(user?.fullName || 'Super Admin');
  const [email, setEmail] = useState(user?.email || 'superadmin@school.com');
  const [phone, setPhone] = useState('+1 (555) 019-2834');
  const [password, setPassword] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div style={{ maxWidth: '720px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800' }}>Admin Profile Settings</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '2px' }}>
          Update personal details, credentials, theme preferences, and notification options.
        </p>
      </div>

      {savedNotice && (
        <div className="badge badge-approved" style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px' }}>
          <i className="fa-solid fa-circle-check"></i> Profile settings updated successfully!
        </div>
      )}

      <div className="panel-card">
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Change Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Leave blank to keep current password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
            <label className="form-label">Portal Interface Theme</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Current Mode: <strong>{theme.toUpperCase()} MODE</strong>
              </span>
              <button type="button" className="btn btn-outline btn-sm" onClick={toggleTheme}>
                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i> Switch Theme
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
            <button type="submit" className="btn btn-primary">
              <i className="fa-solid fa-floppy-disk"></i> Save Profile Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
