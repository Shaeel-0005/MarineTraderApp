import React from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css'; // You can create a separate CSS file for styling

const ResetPassword = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%' }}>
        <h2 style={{ color: '#0D1A8B' }}>Reset Your Password</h2>
        <p style={{ color: '#8891B2' }}>Type in your registered email address</p>

        <input
          type='text'
          placeholder='Enter your email address'
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #CDD4E0', // Lighter border color
            borderRadius: '5px',
            marginBottom: '10px',
            color: '#8891B2',
          }}
        />

        <input
          type='submit'
          value={"Reset Password"}
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
          Remembered your password? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
