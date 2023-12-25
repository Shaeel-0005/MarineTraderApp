import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import VerticalMenu from '../../components/verticalMenu/VerticalMenu';
import DashHeader from '../../components/dashHeader/DashHeader';
import CategoryLists from '../../components/categoryList/CategoryList';


export default function Dashboard() {

  const location = useLocation();
  const userName = new URLSearchParams(location.search).get('name');


  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#F6F6F6', padding: 10 }}>
      <VerticalMenu onTabClick={handleTabClick} />
      <h1>Hello {userName} </h1>
      <div>
        {activeTab === 1 /* ID for "buying" tab */ ? (
          <>
            <h1 style={{ color: '#0D1A8B', paddingLeft: 10 }}>Start A New Listing</h1>
            <CategoryLists />
          </>
        ) : activeTab === 2 /* ID for the second tab */ ? (
          /* Content for the second tab */
          <p>Content for the second tab</p>
        ) : activeTab === 3 /* ID for the third tab */ ? (
          /* Content for the third tab */
          <p>Content for the third tab</p>
        ) : activeTab === 4 /* ID for the fourth tab */ ? (
          /* Content for the fourth tab */
          <p>Content for the fourth tab</p>
        ) : activeTab === 5 /* ID for the fifth tab */ ? (
          /* Content for the fifth tab */
          <p>Content for the fifth tab</p>
        ) : activeTab === 6 /* ID for the sixth tab */ ? (
          /* Content for the sixth tab */
          <p>Content for the sixth tab</p>
        ) : activeTab === 7 /* ID for the seventh tab */ ? (
          /* Content for the seventh tab */
          <p>Content for the seventh tab</p>
        ) : (
          /* Render something else when no tab is active */
          <p>Some other content...</p>
        )}
      </div>
    </div>
  );
}
