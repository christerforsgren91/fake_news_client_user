import React from 'react';
import { Button, Grid, Segment, Form } from 'semantic-ui-react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import Authentication from '../modules/Authentication';

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    Authentication.subscribe(event)
  };

  return (
    <Segment placeholder style={{ backgroundColor: '#202325' }}>
      <Grid columns={3} stackable textAlign='center'>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column centered>
            <Form
              size='small'
              data-cy='registration-form'
              onSubmit={handleSubmit}>
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
                  className='box-shadow'
                />
                <Form.Input
                  name='password-confirmation'
                  type='password'
                  data-cy='registration-confirmation-password'
                  fluid
                  placeholder='Confirm Password'
                  required
                  className='box-shadow'
                />
                <div
                  data-cy='card-details'
                  className='box-shadow'
                  style={{
                    padding: 10,
                    color: 'white',
                    backgroundColor: 'white',
                    width: 210,
                    borderRadius: 3,
                  }}>
                  <CardElement />
                </div>
              </Form.Field>
              <Button
                data-cy='registration-submit'
                style={{ marginTop: 15, backgroundColor: '#fce42d' }}>
                Register!
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default injectStripe(Register);
