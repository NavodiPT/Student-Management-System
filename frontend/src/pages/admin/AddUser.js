import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/admin/addUser.css';

export default function AddUser() {

  const [form,setForm] = useState({
    name: '',
    userId: '',
    email: '',
    password: '',
    role: ''
  })

  const handleSubmit = async(e)=>{
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:5000/api/auth/signup',form);
        console.log("Response:", response.data);
        alert("Registration Successful");
        setForm({name: '', userId:'', email:'', password: '', role: ''});
      } catch (error) {
        alert("Error, Try again!");
      }
  }

  const handleChange = (e)=>{
      setForm({...form, [e.target.name]: e.target.value});
  }

  return (
    <div>
     
      <div className='form' onSubmit={handleSubmit}>
      <h1>NEW USER</h1>
        <label>Name :</label>
        <input type='text' name="name" placeholder='Enter user name' required value={form.name} onChange={handleChange}/>


        <label>User ID :</label>
        <input type='text' name="userId" placeholder='Enter user ID' required value={form.userId} onChange={handleChange}/>

        
        <label>Email :</label>
        <input type='email' name="email" placeholder='Enter user email' required value={form.email} onChange={handleChange}/>

        <label>Password :</label>
        <input type="password" name="password" required value={form.password} onChange={handleChange}/>

        <label>Role :</label>
        <select name="role" value={form.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                </select>

                <br></br>
                <br></br>

        <button type="submit">Add User</button>

      </div>
    </div>
  )
}

