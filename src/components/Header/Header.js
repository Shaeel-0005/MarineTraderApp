import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isNotificationsOn, setNotificationsOn] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOn((prev) => !prev);
  };

  return (
    <div className="header-container">
      {/* Logo */}
      <img
        src={require('../../assets/logo.png')}
        style={{ objectFit: 'contain', width: 125, height: 125 }}
        alt="Logo"
      />

      {/* Right Section */}
      <div className="right-section">
        {/* Notification Button */}
       

        {/* Profile Section */}
        <div className="profile-section">
          {/* Add your profile content here */}
          <img
            src={require('../../assets/ship.png')}
            alt="Profile"
            style={{ width: 30, height: 30, borderRadius: '50%' }}
          />
          <div className="profile-info">
            <p className="profile-name">John Doe</p>
            <p className="profile-role">Trade Seller</p>
            {/* Profile Dropdown */}
            <div className="profile-dropdown">
              {/* Add your profile dropdown content here */}
              <select>
                <option value="settings">Settings</option>
                <option value="logout">Logout</option>
                {/* Add more dropdown options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
