import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

import PrivateSVG from '../../assets/private.svg';
import TradeSVG from '../../assets/tradeseller.svg';

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side (Registration options) */}
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Choose a seller type</h1>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Link to="/private-signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              className={`option ${selectedOption === 'private' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('private')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid blue', padding: '15px', borderRadius: '5px' }}
            >
              <img
                src={PrivateSVG}
                alt="Private"
                style={{ width: '50px', height: '50px' }}
              />
              Private
            </div>
          </Link>

          <Link to="/trade-signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              className={`option ${selectedOption === 'trade' ? 'selected' : ''}`}
              onClick={() => handleOptionClick('trade')}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid blue', padding: '15px', borderRadius: '5px' }}
            >
              <img
                src={TradeSVG}
                alt="Trade"
                style={{ width: '50px', height: '50px' }}
              />
              Trade
            </div>
          </Link>
        </div>
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
