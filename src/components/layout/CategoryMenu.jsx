import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const CategoryMenu = () => {
  const { category } = useParams();
  const [activeItem, setActiveItem] = useState(category);
  const menuItems = [
    'Science',
    'Aliens',
    'Illuminati',
    'Politics',
    'Covid',
    'Hollywood',
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => {
      return (
        <div>
          <Menu.Item
            key={item}
            onClick={() => {
              setActiveItem(item);
            }}
            style={{ fontSize: 17 }}
            data-cy='category-button'
            name={item}
            active={activeItem === item}
            as={Link}
            to={`/category/${item}`}
          />
        </div>
      );
    });
  };

  return (
    <div
      inverted
      data-cy='category-bar'
      compact
      style={{ width: 'fit-content', margin: 'auto' }}>
      <Menu inverted secondary>
        {renderMenuItems()}
      </Menu>
    </div>
  );
};

export default CategoryMenu;
