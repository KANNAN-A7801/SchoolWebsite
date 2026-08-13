/* ==========================================================================
   MOCK DATA & LOCALSTORAGE REAL-TIME SYNC ENGINE
   Used as fallback and local sync store for Student-Admin Portal inter-communication.
   ========================================================================== */

const INITIAL_SUBMISSIONS = [];

const INITIAL_STUDENTS = [];

const INITIAL_COURSES = [];

const INITIAL_ADMINS = [
  { id: 1, fullName: 'Super Admin', email: 'superadmin@school.com', role: 'super_admin', status: 'ACTIVE', lastLogin: 'Active Today' },
  { id: 2, fullName: 'System Administrator', email: 'admin@school.com', role: 'admin', status: 'ACTIVE', lastLogin: 'Active Today' },
  { id: 3, fullName: 'Class 5 Teacher', email: 'teacher@school.com', role: 'admin', status: 'ACTIVE', lastLogin: 'Active Today' }
];

// Helper to retrieve or initialize state from localStorage
export const getStoredSubmissions = () => {
  const data = localStorage.getItem('lms_admin_submissions');
  return data ? JSON.parse(data) : INITIAL_SUBMISSIONS;
};

export const saveStoredSubmissions = (submissions) => {
  localStorage.setItem('lms_admin_submissions', JSON.stringify(submissions));
};

export const getStoredStudents = () => {
  const data = localStorage.getItem('lms_admin_students');
  return data ? JSON.parse(data) : INITIAL_STUDENTS;
};

export const getStoredCourses = () => {
  const data = localStorage.getItem('lms_admin_courses');
  return data ? JSON.parse(data) : INITIAL_COURSES;
};

export const getStoredAdmins = () => {
  const data = localStorage.getItem('lms_admin_admins');
  return data ? JSON.parse(data) : INITIAL_ADMINS;
};

export const saveStoredAdmins = (admins) => {
  localStorage.setItem('lms_admin_admins', JSON.stringify(admins));
};
