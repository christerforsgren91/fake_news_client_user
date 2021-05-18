import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Menu } from 'semantic-ui-react';
import store from '../../state/store/configureStore';

const Navbar = () => {
  return (
    <>
      <Segment data-cy='navbar' id='navbar' inverted size='tiny'>
        <Menu
          pointing
          secondary
          stackable
          size='small'
          style={{ margin: '0 10%' }}>
          <Menu.Item
            name='home'
            data-cy='home-tab'
            active
            as={Link}
            to='/'
            onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
          />
          <Menu.Menu position='right'>
            {/* <Menu.Item name='logout' /> */}
          </Menu.Menu>
        </Menu>
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
