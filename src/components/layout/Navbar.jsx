import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Tab, Header } from 'semantic-ui-react';

const Navbar = () => {
  const panes = [
    {
      menuItem: 'Home',
    },
  ];
  return (
    <>
      <Segment data-cy='navbar' id='navbar' fluid inverted size='huge'>
        <Tab
          data-cy='home-tab'
          menu={{ secondary: true, pointing: true, fluid: true }}
          panes={panes}
          as={Link}
          to='/'
        />
      </Segment>
      <Header id='fakenews' data-cy='header' as='h1' textAlign='center'>
        FAKE<span id='question'>?</span>NEWS
      </Header>
    </>
  );
};

export default Navbar;
