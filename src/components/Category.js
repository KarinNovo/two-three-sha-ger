import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const Category = ({ onCategorySelected }) => {
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const categories = [
    "IronLinks",
    "Influencers",
    "Popular",
    "Hostages, Victims & Survivors",
    "Human Rights",
    "Social Activism and Support",
    "Cultural and Religious Insights",
    "Media and Public Perception",
    "Terrorism and Security",
    "International Conflict",
  ];

  const handleSelect = (e) => {
    setSelectedCategory(e);
    onCategorySelected(e);
  };

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories.map((category, index) => (
            <Dropdown.Item key={index} eventKey={category}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Category;
