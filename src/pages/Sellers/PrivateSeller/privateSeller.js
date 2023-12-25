import React from 'react';
import './privateSeller.css';

const TradeSeller = () => {
  return (
    <div className="signup-container">
      {/* Left side (Signup form) */}
      <div className="signup-form">
        <h2>Sign up as a private seller</h2>

        <p>No inputs here for simplicity.</p>

        <p>Feel free to add your content or components as needed.</p>

        <button type="submit">Sign Up</button>
      </div>

      {/* Right side (Image) */}
      <div className="signup-image">
        <img
          src={require('../../../assets/ship.png')}
          alt="Ship"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default TradeSeller;
