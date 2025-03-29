import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/admin/addCourse.css";

export default function AddCourse() {
  const [form, setForm] = useState({
    courseId: "",
    title: "",
    description: "",
    instructorId: "",
    schedule: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/api/course/addCourse`,
        form
      );
      console.log("Response:", response.data);
      alert("Course added successfully");
      setForm({
        courseId: "",
        title: "",
        description: "",
        instructorId: "",
        schedule: "",
      });

      navigate("/courseList");
    } catch (error) {
      alert("Error, Try again!");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="h1-text">CREATE COURSE</h1>

        <label className="label-form">Course ID :</label>
        <input
          type="text"
          name="courseId"
          placeholder="Enter course ID"
          value={form.courseId}
          onChange={handleChange}
          required
        />

        <label className="label-form">Title :</label>
        <input
          type="text"
          name="title"
          placeholder="Enter course name"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label className="label-form">Description :</label>
        <input
          type="text"
          name="description"
          placeholder="Enter course description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <label className="label-form">Instructor ID :</label>
        <input
          type="text"
          name="instructorId"
          placeholder="Enter ID of the teacher"
          value={form.instructorId}
          onChange={handleChange}
          required
        />

        <label className="label-form">Schedule :</label>
        <input
          type="text"
          name="schedule"
          placeholder='e.g., "Mon & Wed, 10:00 AM - 12:00 PM"'
          value={form.schedule}
          onChange={handleChange}
          required
        />

        <br></br>
        <br></br>

        <button type="submit"> Add Course</button>
      </form>
    </div>
  );
}
