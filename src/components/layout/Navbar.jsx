import React from 'react';
import { Segment, Tab } from 'semantic-ui-react';

const Navbar = () => {
  const panes = [
    {
      menuItem: 'Home',
    },
    {
      menuItem: 'About',
    },
    {
      menuItem: 'Search',
    },
    {
      menuItem: 'Log In',
    },
    {
      menuItem: 'Language',
    },
  ];
  return (
    <>
      <Segment data-cy='navbar' id='navbar' fluid inverted size='massive'>
        <Tab
          menu={{ secondary: true, pointing: true, fluid: true }}
          panes={panes}
        />
      </Segment>
    </>
  );
};

export default Navbar;
