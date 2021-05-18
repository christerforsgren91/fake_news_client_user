import React from 'react';
import { Button, Grid, Segment, Divider, Form } from 'semantic-ui-react';

const Register = () => {
  return (
    <Segment placeholder style={{backgroundColor: '#202325'}}>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical style={{color: '#FCE42D'}}>And</Divider>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Form size='small' data-cy='registration-form'>
              <Form.Field>
                <Form.Input
                  name='email'
                  type='email'
                  data-cy='registration-email'
                  fluid
                  placeholder='Email'
                  required
                />
                <Form.Input
                  name='password'
                  type='password'
                  data-cy='registration-password'
                  fluid
                  placeholder='Password'
                  required
                />
                  <Form.Input
                  name='password-confirmation'
                  type='password'
                  data-cy='registration-confirmation-password'
                  fluid
                  placeholder='Confirm Password'
                  required
                />
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <Button data-cy='registration-submit' primary>Register</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Register;
