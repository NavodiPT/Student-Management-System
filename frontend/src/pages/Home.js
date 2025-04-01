import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Student Management System</h1>
      <div className="card-container">
        <div className="card student" onClick={() => navigate('/signin')}>
          <h2>Student</h2>
          <p>Access your courses, grades, and attendance.</p>
        </div>
        <div className="card teacher" onClick={() => navigate('/signin')}>
          <h2>Teacher</h2>
          <p>Manage students, courses, and exams.</p>
        </div>
        <div className="card admin" onClick={() => navigate('/signin')}>
          <h2>Admin</h2>
          <p>Control users, subjects, and reports.</p>
        </div>
      </div>
    </div>
  );
}
