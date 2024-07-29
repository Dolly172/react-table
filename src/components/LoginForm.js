import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://dummyjson.com/user/login', {
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30
            });
            onLoginSuccess(response.data);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const isFormValid = username && password;

    return (
        <form onSubmit={handleLogin} className="login-form">
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" disabled={!isFormValid}>Login</button>
        </form>
    );
};

export default LoginForm;
