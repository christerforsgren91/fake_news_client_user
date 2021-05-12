import React from 'react';
import { Segment, Tab, Header } from 'semantic-ui-react';

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
      <Segment data-cy='navbar' id='navbar' fluid inverted size='huge'>
        <Tab
          menu={{ secondary: true, pointing: true, fluid: true }}
          panes={panes}
        />
      </Segment>
      <Header data-cy='header' as='h1' textAlign='center'>
      FAKE<span id='question'>?</span>NEWS
      </Header>
    </>
  );
};

export default Navbar;
