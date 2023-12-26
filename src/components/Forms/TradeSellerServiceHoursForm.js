import React, { useState } from 'react';

export default function TradeSellerServiceHoursForm() {
  const [serviceType, setServiceType] = useState('open12Hours');
  const [contactNumber, setContactNumber] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [dayTimes, setDayTimes] = useState({});

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAreaCodeChange = (event) => {
    setAreaCode(event.target.value);
  };

  const handleDayClick = (day) => {
    const isSelected = selectedDays.includes(day);

    if (isSelected) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
      setDayTimes({ ...dayTimes, [day]: null });
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleTimeChange = (day, event) => {
    setDayTimes({ ...dayTimes, [day]: event.target.value });
  };

  return (
    <div>
      {/* Service Type */}
      <div>
        <label>
          <input
            type="radio"
            value="open12Hours"
            checked={serviceType === 'open12Hours'}
            onChange={handleServiceTypeChange}
          />
          Open 12 hours
        </label>
        <label>
          <input
            type="radio"
            value="outOfHoursService"
            checked={serviceType === 'outOfHoursService'}
            onChange={handleServiceTypeChange}
          />
          Out of hours service
        </label>
      </div>

      {/* Contact Details */}
      <div>
        <label>
          Contact Number:
          <input type="text" value={contactNumber} onChange={handleContactNumberChange} />
        </label>
        <label>
          Area Code:
          <select value={areaCode} onChange={handleAreaCodeChange}>
            <option value="">Select Area Code</option>
            <option value="areaCode1">Area Code 1</option>
            <option value="areaCode2">Area Code 2</option>
            {/* Add more options as needed */}
          </select>
        </label>
      </div>

      {/* Select Days */}
      <div>
        <p>Select Days:</p>
        <div>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
            <div key={day}>
              <button
                style={{
                  backgroundColor: selectedDays.includes(day) ? '#0D1A8B' : 'white',
                  color: selectedDays.includes(day) ? 'white' : '#0D1A8B',
                  border: '1px solid #0D1A8B',
                  padding: '5px',
                  margin: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </button>
              {selectedDays.includes(day) && (
                <div>
                  <label>
                    Opening Time:
                    <input
                      type="time"
                      value={dayTimes[day] || ''}
                      onChange={(event) => handleTimeChange(day, event)}
                    />
                  </label>
                  {/* Add more fields as needed for each day */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
