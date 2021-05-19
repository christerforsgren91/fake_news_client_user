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
        <div key={item}>
          <Menu.Item
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
      data-cy='category-bar'
      style={{ width: 'fit-content', margin: 'auto' }}>
      <Menu inverted secondary>
        {renderMenuItems()}
      </Menu>
    </div>
  );
};

export default CategoryMenu;
