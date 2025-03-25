import React from 'react'

export default function AddUser() {
  return (
    <div>
      <h1>Add User</h1>
      <div className='form'>

        <label>Name</label>
        <input type='text' name="name" placeholder='Enter user name' required />

        
        <label>Email</label>
        <input type='email' name="email" placeholder='Enter user email' required />

      </div>
    </div>
  )
}

