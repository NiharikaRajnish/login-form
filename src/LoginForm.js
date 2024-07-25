import './LoginForm.css';
import React, { useState } from 'react';
import facebookLogo from './assets/facebook-logo.svg';
import googleLogo from './assets/google-logo.png';
import { useNavigate } from 'react-router-dom';

// Valid credentials for login
const validCredentials = {
    username: 'Sincere@april.biz',
    password: 'password123'
};

const LoginForm = () => {
    // State variables for username, password, and error message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    // Hook for navigation
    const navigate = useNavigate(); 

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if entered credentials match the valid ones
        if (username === validCredentials.username && password === validCredentials.password) {
            setErrorMessage('');
            // Redirect to welcome page with the username in state
            navigate('/welcome', { state: { username } });
        } else {
            // Set error message if credentials are incorrect
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="sign-in-with">Sign In With</h2>
            <div className="social-buttons">
                {/* Facebook sign-in button */}
                <button className="facebook-button" onClick={() => window.location.href = 'https://www.facebook.com'} type="button">
                    <img src={facebookLogo} alt="Facebook Logo" className="button-logo" />
                    <span>Facebook</span>
                </button>
                {/* Google sign-in button */}
                <button className="google-button" onClick={() => window.location.href = 'https://mail.google.com'} type="button">
                    <img src={googleLogo} alt="Google Logo" className="button-logo" />
                    <span>Google</span>
                </button>
            </div>
            {/* Display error message if there is one */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            
            <label htmlFor="username">Username</label>
            <input
                type="email"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <div className="forgot-password">
                <label htmlFor="password">Password
                    <a href="#">Forgot?</a>
                </label>
            </div>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Sign In</button>
            <p className="sign-up-prompt">Not a member? <a href="#">Sign up now</a></p>
        </form>
    );
};

export default LoginForm;
