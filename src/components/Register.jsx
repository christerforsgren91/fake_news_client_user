import React from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';
import Authentication from '../modules/Authentication';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const Register = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    debugger;
    Authentication.subscribe(event, stripe);
  };

  return (
    <Segment
      placeholder
      textAlign='center'
      style={{ backgroundColor: '#202325', height: 350 }}>
      <Form
        data-cy='registration-form'
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
            placeholder='Email'
            required
            data-cy='registration-email'
          />
        </div>
        <div className='box-shadow' style={styles.input}>
          <input
            name='password'
            type='password'
            data-cy='registration-password'
            placeholder='Password'
            required
          />
        </div>
        <div className='box-shadow' style={styles.input}>
          <input
            name='password-confirmation'
            type='password'
            data-cy='registration-confirmation-password'
            placeholder='Confirm Password'
            required
          />
        </div>
        <div
          data-cy='card-details'
          className='box-shadow'
          style={{
            padding: 15,
            color: 'white',
            width: 300,
            borderRadius: 5,
            margin: '10px 0',
          }}>
          <CardElement options={{ style: { base: { color: 'white' } } }} />
        </div>
        <div style={{ display: 'flex' }}>
          <Link to='/login'>
            <Button data-cy='registration-submit' style={styles.button}>
              Back!
            </Button>
          </Link>
          <Button data-cy='registration-submit' style={styles.button}>
            Register!
          </Button>
        </div>
      </Form>
    </Segment>
  );
};

export default Register;

const styles = {
  input: {
    width: 300,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    margin: '15px 10px 0 10px',
    backgroundColor: '#fce42d',
  },
};
