import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/admin/viewUserList.css';

export default function ViewUserList() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/auth");
                setList(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    // Delete a user
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await axios.delete(`http://localhost:5000/api/auth/${id}`);
            setList(list.filter((user) => user._id !== id));
            alert("User deleted successfully!");
        } catch (error) {
            alert("Failed to delete the user.");
        }
    };

    return (
        <div className="user-list-container">
            <h1>User List</h1>
            <button className='create-button' onClick={() => navigate('/addUser')}>+ Create a New User</button>
            
            {list.length === 0 ? (
                <p className="no-users">No users available. Add a new one!</p>
            ) : (
                <table className='user-table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User ID</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.userId}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="update-btn" onClick={() => navigate(`/updateUser/${user._id}`)}>✏️ Update</button>
                                    <button className="delete-btn" onClick={() => handleDelete(user._id)}>❌ Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
