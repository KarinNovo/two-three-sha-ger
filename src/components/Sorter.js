import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';



export default function Sorter({ onCategorySelected, sortSelected }) {
  const [selectedItem, setSelectedItem] = useState('Select Category');

  const categories = [
    "Hostages, Victims & Survivors",
    "Popular",
    "Social Activism and Support",
    "Human Rights",
    "Cultural and Religious Insights",
    "Media and Public Perception",
    "Terrorism and Security",
    "International Conflict",
    "Influencers",
    "IronLinks",
  ];

  const handleSelect = (e) => {
    setSelectedItem(e);
    if (categories.includes(e)) {
      onCategorySelected(e);
    }
  };

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedItem}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>Categories</Dropdown.Header>
          {categories.map((category, index) => (
            <Dropdown.Item key={index} eventKey={category}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
