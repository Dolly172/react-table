import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = (data) => {
        setIsLoggedIn(true);
    };

    return (
        <div className="app-container">
            {isLoggedIn ? <Home /> : <LoginForm onLoginSuccess={handleLoginSuccess} />}
        </div>
    );
};

export default App;
