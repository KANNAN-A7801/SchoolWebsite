import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/api';

export const LoginPage = () => {
  const { loginUser } = useAuth();
  const [email, setEmail] = useState('superadmin@school.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiService.login(email, password);
      loginUser(
        {
          id: response.id,
          email: response.email,
          fullName: response.fullName,
          role: response.role
        },
        response.token
      );
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handlePreset = (presetEmail, presetRole) => {
    setEmail(presetEmail);
    setPassword('admin123');
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-brand">
          <img src="/logo.png" alt="Admin LMS Logo" style={{ height: '56px', width: 'auto', marginBottom: '12px', borderRadius: '8px' }} />
          <h2 style={{ fontSize: '24px', fontWeight: '800' }}>Admin LMS</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
            System Administrator Management Console
          </p>
        </div>

        {error && (
          <div className="badge badge-rejected" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px' }}>
            <i className="fa-solid fa-circle-exclamation"></i> {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Admin Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="e.g. superadmin@school.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '10px' }}
            disabled={loading}
          >
            {loading ? (
              <span><i className="fa-solid fa-spinner fa-spin"></i> Authenticating...</span>
            ) : (
              <span><i className="fa-solid fa-right-to-bracket"></i> Sign In to Admin Portal</span>
            )}
          </button>
        </form>

        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
            Quick Role Switcher (Demo Presets):
          </span>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              style={{ flex: 1, fontSize: '11px' }}
              onClick={() => handlePreset('superadmin@school.com', 'super_admin')}
            >
              <i className="fa-solid fa-crown text-purple"></i> Super Admin
            </button>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              style={{ flex: 1, fontSize: '11px' }}
              onClick={() => handlePreset('admin@school.com', 'admin')}
            >
              <i className="fa-solid fa-user-gear text-blue"></i> Standard Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
