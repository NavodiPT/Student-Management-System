import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../styles/admin/viewCourseList.css';

export default function CourseList() {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  //Fetch all courses
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
  });

  //Delete Course

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Course?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/course/${id}`);
      setList(list.filter((course) => course._id !== id));
      alert("Course deleted successfully!");
    } catch (error) {
      alert("Failed to delete the course.");
    }
  };

  return (
    <div className="course-list-container">
      <h1>COURSES</h1>
      <button className="create-button" onClick={() => navigate("/addCourse")}>
        + Create a New Course
      </button>

      {list.length === 0 ? (
        <p className="no-users">No Courses available. Add a new one!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Instructor ID</th>
              <th>Schedule</th>
              {/* <th>studentsEnrolled</th> */}
            </tr>
          </thead>
          <tbody>
            {list.map((course) => (
              <tr key={course._id}>
                <td>{course.courseId}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.instructorId}</td>
                <td>{course.schedule}</td>
                <td>
                  <button
                    className="update-btn"
                    onClick={() => navigate(`/updateCourse/${course._id}`)}
                  >
                    ✏️ Update
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(course._id)}
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
