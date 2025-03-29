import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "../../styles/admin/addCourse.css";

export default function UpdateCourse() {
    const [form,setForm] = useState({
        courseId: "",
        title: "",
        description: "",
        instructorId: "",
        schedule: "",
    });

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const fetchCourse = async() =>{
            try {
                const response = await axios.get(`http://localhost:5000/api/course/${id}`);
                console.log("Fetched course data",response.data);
                setForm(response.data);
            } catch (error) {
                console.log("Error fetching the course", error);
            }
        };
        fetchCourse();
    },[id]);

    const handleSubmit = async(e)=>{
            e.preventDefault();
            try {
                await axios.put(`http://localhost:5000/api/course/${id}`,form);
                alert('Course updated successfully');
                navigate('/courseList'); 
            } catch (error) {
                alert('Failed to update user. Try again.');
                console.log("Error, Try again! ", error);
            }
    }

    const handleChange = (e)=>{
        setForm({...form , [e.target.name] : e.target.value});
    }

  return (
    <div className="container">
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="h1-text">UPDATE COURSE</h1>

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

      <button type="submit"> Update Course</button>
    </form>
  </div>
  )
}
