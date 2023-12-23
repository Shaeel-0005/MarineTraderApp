import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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

          <input
            type='submit'
            value={"Login"}
            style={{
              width: '100%',
              padding: '15px', // Increased padding
              backgroundColor: '#0D1A8B',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          />

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
}
