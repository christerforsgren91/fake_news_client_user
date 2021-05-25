import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Form, Segment } from 'semantic-ui-react';
import Authentication from '../modules/Authentication';
import AuthenticationMessage from './AuthenticationMessage';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { subscriber } = useSelector((state) => state);
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    Authentication.login(event);
  };
  return (
    <>
      {subscriber && <AuthenticationMessage time={3000} />}
      <Segment placeholder style={{ backgroundColor: '#111518', height: 350 }}>
        <Form
          data-cy='login-form'
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='box-shadow' style={styles.input}>
            <input
              name='email'
              type='email'
              data-cy='login-email'
              className='box-shadow'
              placeholder={t('loginEmailInput')}
              required
            />
          </div>
          <div className='box-shadow' style={styles.input}>
            <input
              name='password'
              type='password'
              data-cy='login-password'
              className='box-shadow'
              placeholder={t('loginPasswordInput')}
              required
            />
          </div>
          <Button.Group>
            <Button type='submit' data-cy='login-submit'>
            {t('loginLoginButton')}
            </Button>
            <Button.Or text={t('loginOrDivider').toLowerCase()} />
            <Button
              style={{ backgroundColor: '#fce42d' }}
              size='medium'
              data-cy='registration-button'
              as={Link}
              to='/registration'>
              {t('loginRegisterButton')}
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </>
  );
};

export default Login;

const styles = {
  input: {
    width: 300,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
};
