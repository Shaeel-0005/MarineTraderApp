import React, { useState } from 'react';
import './CategoryList.css'; // You can style this component in a separate CSS file
import PackageCard from '../Card/packageCard/PackageCard';

const CategoryList = ({ categories, onCategoryClick }) => {
    const getCategoryIcon = (category) => {
        // Add logic to return appropriate icons based on category
        // For simplicity, I'm using a placeholder icon here
        if(category === 'Jet Skis'){
          return <img 
          src={require('../../assets/jetski.png')}
          />
        } else if (category === 'Boat Home'){
          return <img 
          src={require('../../assets/boatHome.png')}
          />
        } else if (category === 'Commercial'){
          return <img 
          src={require('../../assets/commercial.png')}
          />
        } else if (category === 'Motor/Yacht'){
          return <img 
          src={require('../../assets/motor-yatch.png')}
          />
        } else if (category === 'Sailboat'){
          return <img 
          src={require('../../assets/sailboat.png')}
          />
        } else if (category === 'Smallcraft'){
          return <img 
          src={require('../../assets/smallcraft.png')}
          />
        } else if (category === 'Fishing'){
          return <img 
          src={require('../../assets/fishing.png')}
          />
        } else if (category === 'Rib'){
          return <img 
          src={require('../../assets/rib.png')}
          />
        } else if (category === 'Non-Motor'){
          return <img 
          src={require('../../assets/non-motor.png')}
          />
        }
        return '🚤';
      }; 
    
    
   
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category} onClick={() => onCategoryClick(category)} className="category-item">
          <span className="category-icon">{getCategoryIcon(category)}</span>
       
        </div>
      ))}
    </div>
  );
};

const DisplayedName = ({ selectedCategory }) => {
  return (
    <div className="displayed-name">
      {selectedCategory ? ''
       : (
        <h2 style={{padding:10}}>Select A Category</h2>
      )}
    </div>
  );
};

const CategoryLists = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'Jet Skis',
    'Boat Home',
    'Commercial',
    'Motor/Yacht',
    'Sailboat',
    'Smallcraft',
    'Fishing',
    'Rib',
    'Non-Motor',
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div>
        <DisplayedName selectedCategory={selectedCategory} />
      <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
     <h2 style={{paddingLeft:25}}>{selectedCategory? `Packages for: ${selectedCategory}`:''}</h2> 

      <div style={{padding:20}}>
      <PackageCard/>
      </div>

    </div>
  );
};

export default CategoryLists;
