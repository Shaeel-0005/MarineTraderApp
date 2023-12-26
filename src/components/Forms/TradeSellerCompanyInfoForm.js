import React, { useState } from 'react';

export default function TradeSellerCompanyInfoForm() {
  const [aboutCompany, setAboutCompany] = useState('');

  const handleAboutCompanyChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 250) {
      setAboutCompany(inputValue);
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', textAlign: 'center' }}>
      {/* Left side (Form) */}
      <div style={{ width: '100%', padding: '20px' }}>
        

        {/* Form rows */}
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <input
            type='text'
            placeholder='Company Name'
            style={{ width: '48%', marginRight: '4%', padding: '10px' }}
          />
          <input
            type='text'
            placeholder='Website Address'
            style={{ width: '48%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <textarea
            style={{ width: '100%', minHeight: '100px', padding: '10px' }}
            placeholder='About Company'
            value={aboutCompany}
            onChange={handleAboutCompanyChange}
          />
          <p style={{ fontSize: '12px', color: aboutCompany.length > 250 ? 'red' : 'inherit', marginTop: '5px' }}>
            {aboutCompany.length}/250
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <input
            type='text'
            placeholder='Building Number'
            style={{ width: '48%', marginRight: '4%', padding: '10px' }}
          />
          <input
            type='text'
            placeholder='Street Name'
            style={{ width: '48%', padding: '10px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <input
            type='text'
            placeholder='Town/City'
            style={{ width: '48%', marginRight: '4%', padding: '10px' }}
          />
          <input
            type='text'
            placeholder='Postcode'
            style={{ width: '48%', padding: '10px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <select style={{ width: '48%', marginRight: '4%', padding: '10px' }}>
            {/* Add options for countries in Europe */}
            <option>Country 1</option>
            <option>Country 2</option>
            {/* ... */}
          </select>
          <input
            type='text'
            placeholder='Phone Number'
            style={{ width: '48%', padding: '10px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <input
            type='text'
            placeholder='Timezone'
            style={{ width: '48%', marginRight: '4%', padding: '10px' }}
          />
          <input
            type='email'
            placeholder='Email Address'
            style={{ width: '48%', padding: '10px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
          <div style={{ position: 'relative', width: '48%', marginRight: '4%' }}>
            <input
              type='password'
              placeholder='Password'
              style={{ width: '100%', padding: '10px' }}
            />
            <i
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
            >
              👁️
            </i>
          </div>
          <input
            type='password'
            placeholder='Confirm Password'
            style={{ width: '48%', padding: '10px' }}
          />
          <i
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            👁️
          </i>
        </div>

        {/* Password strength requirements */}
        <p style={{ fontSize: '12px', color: 'grey', marginTop: '5px' }}>
          Password must contain a special character, capital letter, and number
        </p>

        
      </div>

      
    </div>
  );
}
