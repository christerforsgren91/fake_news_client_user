import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

const Login = () => {
  return (
    <>
      <Segment placeholder style={{ backgroundColor: '#202325', height: 350 }}>
        <Form
          data-cy='login-form'
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
              placeholder='Email'
              required
            />
          </div>
          <div className='box-shadow' style={styles.input}>
            <input
              name='password'
              type='password'
              data-cy='login-password'
              className='box-shadow'
              placeholder='Password'
              required
            />
          </div>
          <Button.Group>
            <Button positive type='submit' data-cy='login-submit'>
              Login
            </Button>
            <Button.Or />
            <Button
              color='blue'
              size='medium'
              data-cy='registration-button'
              as={Link}
              to='/registration'>
              Register
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
