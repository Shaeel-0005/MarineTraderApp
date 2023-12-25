import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    // Replace this with your actual login logic
    // For example, you can use fetch to send a login request to your backend

    // Dummy login credentials
    const credentials = {
      email: 'sheranmalik08@gmail.com',
      password: 'malik123',
    };

    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.success) {
        // Use React Router to navigate to the dashboard
        console.log(data.user.name)
        navigate('/dashboard?name=' + data.user.name);
      } else {
        // Handle login error
        alert('Login failed:', data.error);
      }
    } catch (error) {
      alert('Error during login:', error);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side */}
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '80%' }}>
          <h2>Log in to your account</h2>

          <input
            type='text'
            placeholder='Username or email address'
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #CDD4E0', // Lighter border color
              borderRadius: '5px',
              marginBottom: '10px',
              color: '#8891B2',
            }}
          />

          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #CDD4E0', // Lighter border color
                borderRadius: '5px',
                marginBottom: '10px',
                color: '#8891B2',
              }}
            />
            <span
              className={`eye-icon ${showPassword ? 'visible' : ''}`}
              onClick={togglePasswordVisibility}
              role="img"
              aria-label="Toggle Password Visibility"
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '15px', // Increased padding
              backgroundColor: '#0D1A8B',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>

          <p style={{ color: '#696E9D', textAlign: 'center' }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right side */}
      <div style={{ width: '50%' }}>
        {/* Replace the image URL with your desired image */}
        <img
          src={require('../../assets/ship.png')}
          alt="Ship"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Login;
