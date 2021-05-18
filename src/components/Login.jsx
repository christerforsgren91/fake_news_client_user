import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, GridRow, Modal, Segment } from 'semantic-ui-react';

const Login = () => {
  return (
    <>
      <Segment placeholder inverted>
        <Grid columns={2} textAlign='center'>
          <Grid.Row verticalAlign='middle' />
          <Grid.Column>
            <Form size='small' data-cy='login-form'>
              <Form.Field>
                <Form.Input
                  name='email'
                  type='email'
                  data-cy='login-email'
                  fluid
                  placeholder='Email'
                  required
                />
                <Form.Input
                  name='password'
                  type='password'
                  data-cy='login-password'
                  fluid
                  placeholder='Password'
                  required
                />
                <Button.Group>
                  <Button 
                  positive
                  type='submit'
                  data-cy='login-submit'>
                    Login
                  </Button>
                  <Button.Or />
                  <Button
                    color='blue'
                    size='medium'
                    data-cy='registration-button'
                    as={Link}
                    to='/registration'
                    >
                    Register
                  </Button>
                </Button.Group>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default Login;
