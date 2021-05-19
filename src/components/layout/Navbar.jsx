import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Menu } from 'semantic-ui-react';
import Authentication from '../../modules/Authentication';
import store from '../../state/store/configureStore';

const Navbar = () => {
  const { subscriber } = useSelector((state) => state);

  return (
    <>
      <Segment data-cy='navbar' id='navbar' inverted size='tiny'>
        <Menu
          pointing
          secondary
          stackable
          size='small'
          style={{ margin: '0 20%' }}>
          <Menu.Item
            name='home'
            data-cy='home-tab'
            active
            as={Link}
            to='/'
            onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
          />
          <Menu.Menu position='right'>
            {subscriber ? (
              <Menu.Item
                name='Logout'
                data-cy='logout-button'
                active
                as={Link}
                to='/'
                onClick={() => Authentication.logout()}
              />
            ) : (
              <Menu.Item
                name='Login'
                data-cy='login-button'
                active
                as={Link}
                to='/login'
              />
            )}
          </Menu.Menu>
        </Menu>
      </Segment>
      <div>

      </div>
      <Link data-cy='header' to='/'>
        <div id='fakenews'>
          FAKE<span id='question'> ? </span>NEWS
        </div>
      </Link>
    </>
  );
};

export default Navbar;
