import React from 'react';
import i18n from '../../i18n';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Menu, Button } from 'semantic-ui-react';
import Authentication from '../../modules/Authentication';
import store from '../../state/store/configureStore';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { subscriber } = useSelector((state) => state);
  const { t } = useTranslation();
  return (
    <>
      <Segment data-cy='navbar' id='navbar' inverted size='tiny'>
        <Menu
          pointing
          secondary
          stackable
          size='massive'
          style={{ margin: '0 15%' }}>
          <Menu.Item
            style={styles.item}
            name={t('homeTab')}
            data-cy='home-tab'
            active
            as={Link}
            to='/'
            onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
          />
          <Menu.Item
            style={styles.item}
            name={t('backyardTab')}
            data-cy='backyard-tab'
            active
            as={Link}
            to='/backyard'
            onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
          />
          <Button
            style={styles.item}
            name='Language'
            active
            to='/backyard'
            onClick={() => {
              i18n.changeLanguage('se');
            }}
          />
          <Menu.Menu position='right'>
            {subscriber ? (
              <Menu.Item
                style={styles.item}
                name='Logout'
                data-cy='logout-button'
                active
                as={Link}
                to='/'
                onClick={() => Authentication.logout()}
              />
            ) : (
              <Menu.Item
                style={styles.item}
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
      <Link data-cy='header' to='/'>
        <div id='fakenews'>
          FAKE<span id='question'> ? </span>NEWS
        </div>
      </Link>
    </>
  );
};

export default Navbar;

const styles = {
  item: {
    color: 'white',
  },
};
