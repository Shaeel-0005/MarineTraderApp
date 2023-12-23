import React, { useState } from 'react';
import './DashHeader.css'; // You can style this component in a separate CSS file
import VerticalMenu from '../../components/verticalMenu/VerticalMenu';

const DashHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', photo: 'photo1.jpg', isTradeSeller: true },
    { id: 2, name: 'Jane Smith', photo: 'photo2.jpg', isTradeSeller: false },
    { id: 3, name: 'Bob Johnson', photo: 'photo3.jpg', isTradeSeller: true },
    // Add more data as needed
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='dash-header'>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Additional elements for the right side of the header */}
        {/* You can add more components, buttons, or any other content here */}
      </div>
    </div>
  );
};

export default DashHeader;
