import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Layout & Components
import { AdminLayout } from './components/layout/AdminLayout';

// Pages
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { SubmissionsPage } from './pages/SubmissionsPage';
import { ChapterApprovalsPage } from './pages/ChapterApprovalsPage';
import { CoursesPage } from './pages/CoursesPage';
import { StudentsPage } from './pages/StudentsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ProfileSettingsPage } from './pages/ProfileSettingsPage';
import { SystemSettingsPage } from './pages/SystemSettingsPage';
import { AdminManagementPage } from './pages/AdminManagementPage';

// Protected Route Guard
const ProtectedRoute = ({ children, requireSuperAdmin = false }) => {
  const { user, isSuperAdmin } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireSuperAdmin && !isSuperAdmin()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <AdminLayout>{children}</AdminLayout>;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/submissions" replace /> : <LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/submissions"
        element={
          <ProtectedRoute>
            <SubmissionsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chapter-approvals"
        element={
          <ProtectedRoute>
            <ChapterApprovalsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <StudentsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileSettingsPage />
          </ProtectedRoute>
        }
      />

      {/* Super Admin Only Routes */}
      <Route
        path="/system-settings"
        element={
          <ProtectedRoute requireSuperAdmin={true}>
            <SystemSettingsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-management"
        element={
          <ProtectedRoute requireSuperAdmin={true}>
            <AdminManagementPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to={user ? "/submissions" : "/login"} replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
