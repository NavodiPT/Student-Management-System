import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signin', form);
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('userRole', response.data.role);  // Store role
                
                alert("Login Successful");

                const role = response.data.role.toLowerCase();

                setTimeout(() => {
                    if (role === "admin") {
                        navigate("/admin");
                    } else if (role === "teacher") {
                        navigate("/teacher");
                    } else if (role === "student") {
                        navigate("/student");
                    } else {
                        navigate("/"); // Default fallback route
                    }

                    // **Force full page reload if needed**:
                    // window.location.replace("/admin");  (use respective route)
                }, 500); // Delay navigation slightly

                setForm({ email: '', password: '' });
            
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

                <br></br>
                <br></br>

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


                <br></br>
                <br></br>
                <br></br>
                
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}
