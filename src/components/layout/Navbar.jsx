import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Tab } from 'semantic-ui-react';
import store from '../../state/store/configureStore';

const Navbar = () => {
  const panes = [
    {
      menuItem: 'Home',
    },
  ];
  return (
    <>
      <Segment data-cy='navbar' id='navbar' inverted size='tiny'>
        <Tab
          data-cy='home-tab'
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          as={Link}
          to='/'
          onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
        />
      </Segment>
      <Link data-cy='header' to='/'>
        <div id='fakenews'>
          FAKE<span id='question'> ? </span>NEWS
        </div>
      </Link>
    </>
  );
};

export default Navbar;
