import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './PackageCard.css';

const PackageCard = () => {
  const cardData = [
    {
      price: '£0.99',
      title: 'Standard',
      features: [
        'View Display Search For Result',
        '200 character description',
        'upt 5 photos',
        'chat, email, and call',
      ],
      color: 'blue',
    },
    {
      price: '£10.99',
      title: 'Premium',
      features: [
        'upto 50 photos',
        'upt 5 photos',
        'chat, email, and call',
      ],
      color: 'green',
    },
    {
      price: '£19.99',
      title: 'Featured',
      features: [
        'upto 50 photos',
        'upt 5 photos',
        'chat, email, and call',
      ],
      color: 'yellow',
    },
    // Add more objects for additional cards as needed
  ];

  return (
    <div className="package-cards">
      {cardData.map((card, index) => (
        <div key={index} className="package-card">
          <hr style={{ borderColor: card.color, borderTopWidth: '3px' }} />
          <h1 style={{ color: 'black' }}>
            {card.price} <span style={{ color: '#8891B2', fontSize: 14 }}> /month</span>{' '}
          </h1>
          <h2 style={{ color: card.color }}>{card.title}</h2>

          <div  style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#E2E5FD',
                padding: '15px',
                borderRadius: '20px',
                border: 'none', // Remove the border
              }}>
            <button
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#E2E5FD',
                padding: '15px',
                borderRadius: '20px',
                border: 'none', // Remove the border
              }}
            >
              <FontAwesomeIcon icon={faEye} style={{ marginBottom: '5px' }} />
              View Display Search For Result
            </button>
          </div>

          <div>
            {card.features.map((feature, featureIndex) => (
              <p key={featureIndex} style={{ color: '#183B56' }}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    color: 'darkgreen',
                    backgroundColor: 'rgba(0, 128, 0, 0.3)',
                    borderRadius: '10px',
                    padding: '5px', // Add padding for spacing
                    marginRight: '5px',
                  }}
                />
                {feature}
              </p>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                style={{
                  backgroundColor: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '3px solid blue',
                  color: 'blue',
                  cursor: 'pointer',
                  width: '75%',
                  marginBottom: '10px', // Add margin for spacing between buttons
                }}
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCard;
