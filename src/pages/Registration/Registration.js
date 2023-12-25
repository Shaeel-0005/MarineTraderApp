import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Registration.css';

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    if (selectedOption === 'private') {
      return (
        <div>
          <div>This is the Private Seller content</div>
          {/* Add a Next button for Private Seller */}
          <Link to="/private-signup">
            <button className="next-button">Next</button>
          </Link>
        </div>
      );
    } else if (selectedOption === 'trade') {
      return (
        <div>
          <div>This is the Trade Seller content</div>
          {/* Add a Next button for Trade Seller */}
          <Link to="/trade-signup">
            <button className="next-button">Next</button>
          </Link>
        </div>
      );
    } else {
      return <div>Please select an option above</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side (Registration options) */}
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Registration Page</h2>

        <div className="options-container">
          <div
            className={`option ${selectedOption === 'private' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('private')}
          >
            Private Seller
          </div>
          <div
            className={`option ${selectedOption === 'trade' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('trade')}
          >
            Trade Seller
          </div>
        </div>

        {renderContent()}
      </div>

      {/* Right side (Image) */}
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

export default Registration;
