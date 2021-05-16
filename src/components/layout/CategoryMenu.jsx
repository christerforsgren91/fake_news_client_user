import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
  let activeItem = 'home'
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item 
        name='Flat Earth' 
        active={activeItem === 'home'} 
        as={Link} 
        to= '/category/Flat+Earth'
        />
        <Menu.Item
          name='Illuminati'
          active={activeItem === 'messages'}
          as={Link}
          to= '/category/Illuminati'
        />
        <Menu.Item 
        name='Aliens' 
        active={activeItem === 'friends'} 
        as={Link} 
        to= '/category/Aliens'
        />
        <Menu.Item 
        name='Covid' 
        active={activeItem === 'friends'} 
        as={Link} 
        to= '/category/Covid'
        />
        <Menu.Item 
        name='Politics' 
        active={activeItem === 'friends'} 
        as={Link} 
        to= '/category/Politics'
        />
        <Menu.Item 
        name='Hollywood' 
        active={activeItem === 'friends'} 
        as={Link} 
        to= '/category/Hollywood'
        />
      </Menu>
    </Segment>
  );
};

export default CategoryMenu;
