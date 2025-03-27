import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/admin/addUser.css';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

  const [form,setForm] = useState({
    name: '',
    userId: '',
    email: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
      e.preventDefault();

      try {
        const response = await axios.post(`http://localhost:5000/api/auth/signup`,form);
        console.log("Response:", response.data);
        alert("Registration Successful");
        setForm({name: '', userId:'', email:'', password: '', role: ''});
        navigate('/addUser');
      } catch (error) {
        console.log(error);
        alert("Error, Try again!");
      }
  }

  const handleChange = (e)=>{
      setForm({...form, [e.target.name]: e.target.value});
  }

  return (
    <div className='container'>
     
      <form className='form' onSubmit={handleSubmit}>
      <h1 className='h1-text'>NEW USER</h1>
        <label className='label-form'>Name :</label>
        <input type='text' name="name" placeholder='Enter user name' value={form.name} onChange={handleChange} required />


        <label className='label-form'>User ID :</label>
        <input type='text' name="userId" placeholder='Enter user ID' value={form.userId} onChange={handleChange} required/>

        
        <label className='label-form'>Email :</label>
        <input type='email' name="email" placeholder='Enter user email' value={form.email} onChange={handleChange} required/>

        <label className='label-form'>Password :</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required/>

        <label className='label-form'>Role :</label>
        <select name="role" value={form.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                </select>

                <br></br>
                <br></br>

        <button type="submit">Add User</button>

      </form>
    </div>
  )
}

