import React from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import Authentication from '../modules/Authentication';

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    Authentication.subscribe(event);
  };

  return (
    <Segment
      placeholder
      textAlign='center'
      style={{ backgroundColor: '#202325', height: '35vh' }}>
      <Form size='small' data-cy='registration-form' onSubmit={handleSubmit}>
        <Form.Field
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Form.Input
            name='email'
            type='email'
            data-cy='registration-email'
            placeholder='Email'
            required
            style={{ width: 300, marginLeft: -45 }}
          />
          <Form.Input
            name='password'
            type='password'
            data-cy='registration-password'
            placeholder='Password'
            required
            className='box-shadow'
            style={{ width: 300, marginLeft: -45 }}
          />
          <Form.Input
            name='password-confirmation'
            type='password'
            data-cy='registration-confirmation-password'
            placeholder='Confirm Password'
            required
            className='box-shadow'
            style={{ width: 300, marginLeft: -45 }}
          />
          <div
            data-cy='card-details'
            className='box-shadow'
            style={{
              padding: 10,
              color: 'white',
              background: 'white',
              width: 300,
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
    </Segment>
  );
};

export default injectStripe(Register);
