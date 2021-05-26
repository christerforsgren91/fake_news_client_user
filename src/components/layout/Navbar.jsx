import React, { useState } from 'react';
import i18n from '../../i18n';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Segment, Menu, Dropdown } from 'semantic-ui-react';
import Authentication from '../../modules/Authentication';
import store from '../../state/store/configureStore';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { subscriber } = useSelector((state) => state);
  const { t } = useTranslation();
  const [appLanguage, setAppLanguage] = useState('en');

  const languges = [
    { key: 1, text: 'en', value: 'en' },
    { key: 2, text: 'se', value: 'se' },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setAppLanguage(language);
  };

  const handleChange = (event) => {
    let language = event.target.textContent;
    ['en', 'se'].includes(language) && changeLanguage(language);
  };

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
            name={t('navBarHomeTab')}
            data-cy='home-tab'
            active
            as={Link}
            to='/'
            onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
          />
          <Menu.Item
            style={styles.item}
            name={t('navBarBackyardTab')}
            content={t('navBarBackyardTab')}
            data-cy='backyard-tab'
            active
            as={Link}
            to='/backyard'
            onClick={() => store.dispatch({ type: 'ERROR_RESET' })}
          />
          <Menu.Menu position='right'>
            <Dropdown
              data-cy='language-dropdown'
              id='language'
              name='language'
              text={appLanguage}
              options={languges}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            {subscriber ? (
              <Menu.Item
                style={styles.item}
                name={t('navBarLogoutTab')}
                data-cy='logout-button'
                active
                as={Link}
                to='/'
                onClick={() => Authentication.logout()}
              />
            ) : (
              <Menu.Item
                style={styles.item}
                name={t('navBarLoginTab')}
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
