import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const MyDropdown = ({ title, items }) => {
  // State to hold the currently selected item
  const [selectedItem, setSelectedItem] = useState('');

  // Function to handle item selection
  const handleSelect = (selectedKey) => {
    setSelectedItem(selectedKey);
  };


  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Item
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map((item, index) => (
            <Dropdown.Item key={index} eventKey={item.toLowerCase().replace(' ', '-')}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Displaying the selected item */}
      {selectedItem && (
        <p>You selected: {selectedItem}</p>
      )}
    </div>
  );
};

export default MyDropdown;
