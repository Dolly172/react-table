import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUserForm from './AddUserForm';
import '../App.css';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            handleSearch();
        } else {
            fetchUsers();
        }
    }, [searchQuery]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/users');
            console.log("Res::", response.data);
            setUsers(response.data.users);
        } catch (error) {
            console.error('Failed to fetch users', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/users/search?q=${searchQuery}`);
            setUsers(response.data.users);
        } catch (error) {
            console.error('Search failed', error);
        }
    };

    const handleAddUser = async (user) => {
        try {
            const response = await axios.post('https://dummyjson.com/users/add', user);
            setUsers([...users, response.data]);
        } catch (error) {
            console.error('Add user failed', error);
        }
    };

    return (
        <div className="home-container">
            <header className="header">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search users..."
                />
                <button onClick={() => setIsModalOpen(true)}>Add User</button>
                <AddUserForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddUser={handleAddUser} />
            </header>
            <main className="main-content">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Birth Date</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.birthDate}</td>
                                <td>{user.bloodGroup}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Home;
