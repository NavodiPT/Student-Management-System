import React from 'react';
import '../../styles/student/studentHome.css';
import studentHero from '../../images/student-hero.jpg';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StudentHome() {

  const navigate = useNavigate();

  return (
    
    <div>
        <Header/>
        <div className="home-container-01">
    
      <div className="hero-section">
        <img src={studentHero} alt="Student Portal" className="hero-image" />
        <div className="hero-overlay">
          <h1>Welcome to Your Student Portal</h1>
          <p>Manage your courses, attendance, grades, and connect with teachers.</p>
          <br></br>
          <br></br>
          <button className="browse-btn" onClick={()=> navigate('/student-viewCourse')}>
            Browse Courses <span className="arrow">➜</span>
          </button>

        </div>
      </div>

    
      <div className="features-container">
        <div className="feature-card"  onClick={() => navigate('/profile')}>
          <h2>📜 View Profile</h2>
          <p>Check your personal details and enrolled courses.</p>
        </div>
        <div className="feature-card"  onClick={() => navigate('/signin')}>
          <h2>📅 View Attendance</h2>
          <p>Track your attendance records in real-time.</p>
        </div>
        <div className="feature-card"  onClick={() => navigate('/signin')}>
          <h2>📊 Check Grades</h2>
          <p>View your exam results and report cards.</p>
        </div>
        <div className="feature-card"  onClick={() => navigate('/signin')}>
          <h2>💬 Communicate with Teachers</h2>
          <p>Ask questions, request feedback, and stay connected.</p>
        </div>
      </div>


      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>MYLearn</strong>, our mission is to empower students with a seamless, technology-driven learning 
          experience. We aim to make education more interactive, accessible, and efficient by providing tools that help students 
          stay on track with their courses, attendance, and grades.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>🌟 Why Choose Us?</h2>
        <ul>
          <li>✔ <strong>Easy to Use</strong> – Simple and intuitive interface for students.</li>
          <li>✔ <strong>All-in-One Platform</strong> – Manage courses, track attendance, and check grades in one place.</li>
          <li>✔ <strong>Secure & Reliable</strong> – Your data is protected with the latest security measures.</li>
          <li>✔ <strong>Instant Communication</strong> – Connect with teachers and get real-time feedback.</li>
        </ul>
      </div>

    </div>
    
    <Footer/>

    </div>
  )
}
