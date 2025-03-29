import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/home.css'

export default function AdminHome() {

   const navigate = useNavigate();

  return (
    <div>
    <div className="admin-home-container">
      <h1 className="admin-home-title">Admin Dashboard</h1>
      <div className="admin-card-container">
        <div className="card user" onClick={() => navigate('/viewUserList')}>
          <h2>Manage Users</h2>
          <p>Add, edit, and delete students & teachers</p>
        </div>
        <div className="card course" onClick={() => navigate('/courseList')}>
          <h2>Manage Courses</h2>
          <p>Add, update, or delete courses</p>
        </div>
        <div className="card report" onClick={() => navigate('/signin')}>
          <h2>View Reports</h2>
          <p>Student performance, attendance, and payments</p>
        </div>
        <div className="card notification" onClick={() => navigate('/signin')}>
          <h2>Send Notifications</h2>
          <p>Announcements for students & teachers</p>
        </div>
      </div>
    </div>
    </div>
  )
}
