import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item 
        name='Flat Earth' 
        active={activeItem === 'home'} 
        as={Link} 
        />
        <Menu.Item
          name='Illuminati'
          active={activeItem === 'messages'}
          as={Link}
        />
        <Menu.Item 
        name='Aliens' 
        active={activeItem === 'friends'} 
        as={Link} 
        />
        <Menu.Item 
        name='Covid' 
        active={activeItem === 'friends'} 
        as={Link} 
        />
        <Menu.Item 
        name='Politics' 
        active={activeItem === 'friends'} 
        as={Link} 
        />
        <Menu.Item 
        name='Hollywood' 
        active={activeItem === 'friends'} 
        as={Link} 
        />
      </Menu>
    </Segment>
  );
};

export default CategoryMenu;
