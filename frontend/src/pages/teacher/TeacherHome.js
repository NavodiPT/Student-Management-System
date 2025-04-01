import React from 'react';
import '../../styles/teacher/teacherHome.css';
import HeaderTeacher from '../../components/HeaderTeacher';
import Footer from '../../components/Footer';

export default function TeacherHome() {
  return (
    <div>
      <div>
        <HeaderTeacher/>
        <div className="features--container">
        <div className="feature--card">
          <h2>👤 Manage Students</h2>
          <p>View student details & academic progress</p>
        </div>
        <div className="feature--card">
          <h2>📅 Manage Attendance</h2>
          <p>Mark attendance for students</p>
        </div>
        <div className="feature--card">
          <h2>📊 Manage Grades</h2>
          <p>Assign and update student marks</p>
        </div>
        <div className="feature--card">
          <h2>💬 Send Messages</h2>
          <p>Notify students about assignments or exams</p>
        </div>
      </div>
      </div>
       <Footer/>
      
    </div>
  )
}
