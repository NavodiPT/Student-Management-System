import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../styles/student/viewCourse.css';

export default function ViewCourse() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    // Fetch all courses
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/course`);
                setList(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="course-list-container">
            <h1 className="page-title">COURSES</h1>

            <div className="course-card-container">
                {list.length === 0 ? (
                    <p className="no-courses-message">No Courses Available.</p>
                ) : (
                    list.map((course) => (
                        <div className="course-card" key={course._id}>
                            <img
                                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4"
                                alt="course"
                                className="course-card-img"
                            />
                            <div className="course-card-body">
                                <h2 className="course-title">{course.title}</h2>
                                <p className="course-description">{course.description}</p>
                                <p className="course-instructor">
                                <i className="fas fa-chalkboard-teacher"></i>   
                                  Instructor: {course.instructorId}</p>
                                <p className="course-schedule">
                                  Schedule: {course.schedule}</p>
                                <button
                                    className="enroll-btn"
                                    onClick={() => navigate(`/updateCourse/${course._id}`)}
                                >
                                    Enroll
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
