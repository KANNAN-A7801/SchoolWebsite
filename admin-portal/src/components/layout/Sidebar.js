import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = () => {
  const navItems = [
    { label: 'Student Submissions', path: '/submissions', icon: 'fa-file-signature' },
    { label: 'Chapter Approval', path: '/chapter-approvals', icon: 'fa-lock-open' },
    { label: 'Courses', path: '/courses', icon: 'fa-graduation-cap' },
    { label: 'Students', path: '/students', icon: 'fa-users' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Admin LMS Logo" className="sidebar-brand-logo" />
        <div className="brand-info">
          <h2>Admin LMS</h2>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main Menu</div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.badge && (
              <span className="badge badge-pending" style={{ fontSize: '10px', padding: '2px 6px' }}>
                {item.badge}
              </span>
            )}
            {item.superOnly && (
              <span className="user-role-badge super_admin" style={{ fontSize: '9px' }}>
                SUPER
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
        v2.4.0 • Port 3001 Active
      </div>
    </aside>
  );
};
