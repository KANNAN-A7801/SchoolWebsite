import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('lms_admin_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const loginUser = (userData, token) => {
    setUser(userData);
    localStorage.setItem('lms_admin_user', JSON.stringify(userData));
    localStorage.setItem('lms_token', token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('lms_admin_user');
    localStorage.removeItem('lms_token');
  };

  const isSuperAdmin = () => user?.role === 'super_admin' || user?.role === 'ROLE_SUPER_ADMIN';

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, isSuperAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
