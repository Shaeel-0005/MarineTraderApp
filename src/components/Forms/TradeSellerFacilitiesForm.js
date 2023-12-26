import React, { useState } from 'react';

const initialFacilities = {
  Accommodation: false,
  'Licensed Bar': false,
  Restaurant: false,
  '24/7 Support': false,
  'Service Department': false,
  Reception: false,
  Counter: false,
  Parking: false,
  'Disabled Access': false,
  Finance: false,
  'Equipment Hire': false,
  'On Site Transport': false,
  Delivery: false,
  Showroom: false,
  Shop: false,
  Parts: false,
  Dsds: false,
};

export default function TradeSellerFacilitiesForm() {
  const [facilities, setFacilities] = useState(initialFacilities);
  const [newFacility, setNewFacility] = useState('');

  const handleFacilityChange = (facility) => {
    setFacilities((prevFacilities) => ({ ...prevFacilities, [facility]: !prevFacilities[facility] }));
  };

  const handleNewFacilityChange = (e) => {
    setNewFacility(e.target.value);
  };

  const handleAddFacility = () => {
    if (newFacility.trim() !== '') {
      setFacilities((prevFacilities) => ({ ...prevFacilities, [newFacility]: false }));
      setNewFacility('');
    }
  };

  return (
    <div>
      <h2>Facilities</h2>
      <div>
        {Object.keys(facilities).map((facility) => (
          <div key={facility}>
            <label>
              <input
                type="checkbox"
                checked={facilities[facility]}
                onChange={() => handleFacilityChange(facility)}
              />
              {facility}
            </label>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="New Facility"
          value={newFacility}
          onChange={handleNewFacilityChange}
        />
        <button onClick={handleAddFacility}>Add Facility</button>
      </div>
    </div>
  );
}
