import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/signin", form);
            if (response.data.token) {
                localStorage.setItem("authToken", response.data.token);
                alert("Login Successful");
                setForm({ email: "", password: "", role: "" });
            }
        } catch (error) {
            alert("Invalid credentials, Try again!");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Welcome Back!</h1>
                <p>Please login to continue</p>

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={form.email}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={form.password}
                    onChange={handleChange}
                />
                
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>

                <label>Role</label>
                <select name="role" value={form.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                </select>

                <br></br>
                <br></br>
                <br></br>
                
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}
