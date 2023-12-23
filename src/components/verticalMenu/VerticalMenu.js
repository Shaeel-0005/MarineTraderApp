import React, { useState } from 'react';
import './VerticalMenu.css';

const VerticalMenu = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: 1, icon: require('../../assets/selling.png'), text: 'Selling' },
    { id: 2, icon: require('../../assets/shopping-cart.png'), text: 'Directory' },
    { id: 3, icon: require('../../assets/news.png'), text: 'News' },
    { id: 4, icon: require('../../assets/events.png'), text: 'Events' },
    { id: 5, icon: require('../../assets/subscriptions.png'), text: 'Subscriptions' },
    { id: 6, icon: require('../../assets/contact.png'), text: 'Contact' },
    { id: 7, icon: require('../../assets/signOut.png'), text: 'Sign Out' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabClick(tabId); // Notify the parent component about the tab click
  };

  return (
    <div className="vertical-menu" style={{ backgroundColor: '#fff' }}>

      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
            style={{ padding: 20, borderRadius: 15, color:'#8891B2' }}
            onClick={() => handleTabClick(tab.id)}
          >
            <img src={tab.icon} alt={`Icon ${tab.id}`} className="tab-icon" />
            <span className="tab-text">{tab.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalMenu;
