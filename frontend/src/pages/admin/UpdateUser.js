import React, { useState, useEffect } from "react";
import "../../styles/admin/addUser.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/auth/${id}`
        );
        console.log("Fetched User Data:", response.data); // Debugging line
        setForm({
          name: response.data.name || "",
          userId: response.data.userId || "",
          email: response.data.email || "",
          password: response.data.password || "",
          role: response.data.role || "",
        });
      } catch (error) {
        console.log("Error fetching the user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/auth/${id}`, form);
      alert("User updated successfully");
      navigate("/viewUserList");
    } catch (error) {
      alert("Failed to update user. Try again.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="h1-text">UPDATE USER</h1>
        <label className="label-form">Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Enter user name"
          required
          value={form.name}
          onChange={handleChange}
        />

        <label className="label-form">User ID :</label>
        <input
          type="text"
          name="userId"
          placeholder="Enter user ID"
          required
          value={form.userId}
          onChange={handleChange}
        />

        <label className="label-form">Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Enter user email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <label className="label-form">Password :</label>
        <input
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
        />

        <label className="label-form">Role :</label>
        <select
          name="role"
          value={form.role ?? ""}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>

        <br></br>
        <br></br>

        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
