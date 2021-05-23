import React, { useState } from 'react';
import { Button, Segment, Form, Card } from 'semantic-ui-react';
import Authentication from '../modules/Authentication';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthenticationMessage from './AuthenticationMessage';

const Register = () => {
  const { subscriber } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState('');
  const location = useLocation();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    stripe
      .createPaymentMethod({ type: 'card', card: cardElement })
      .then((stripeDetails) => {
        Authentication.subscribe(
          event,
          stripeDetails,
          setLoading,
          subscriptionPlan
        );
      });
  };

  const subscriptionPlans = [
    {
      id: 'monthly_subscription',
      title: 'MONTHLY SUBSCRIPTION',
      price: '130 SEK / month',
      info: 'Gain access to premium content and more...',
    },
    {
      id: 'half_year_subscription',
      title: 'HALF YEAR SUBSCRIPTION',
      price: '110 SEK / month',
      info: 'Save 15% by purchasing 6 month subscription',
    },
    {
      id: 'yearly_subscription',
      title: 'YEARLY SUBSCRIPTION',
      price: '100 SEK / month',
      info: 'Save another 10% by purchasing 12 month subscription',
    },
  ];

  const subscriptionPlanCardList = subscriptionPlans.map((plan, index) => {
    return (
      <div
        onClick={() => {
          setSubscriptionPlan(plan.id);
        }}
        className={
          index === 1
            ? 'box-shadow subscription-special'
            : 'box-shadow subscription-plan'
        }
        data-cy='subscription-plan'
        key={index}>
        <div className='subscription-header'>
          <h4>{plan.title}</h4>
        </div>
        <div className='subscription-info'>
          <h2>{plan.price}</h2>
          <p>{plan.info}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      {subscriber && <AuthenticationMessage time={5000} />}
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        {subscriptionPlan ? 'Fill in your details' : 'Choose a subscription:'}
      </h1>
      <Segment
        placeholder
        textAlign='center'
        style={{ backgroundColor: '#111518', height: 500 }}>
        {location.state && (
          <h1
            style={{ marginBottom: 50, color: 'white' }}
            data-cy='subscribe-message'>
            You tried to access a premium article, please subscribe
          </h1>
        )}
        {!subscriptionPlan && (
          <>
            <Card.Group centered>{subscriptionPlanCardList}</Card.Group>
          </>
        )}

        {subscriptionPlan && (
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
                name='firstName'
                type='text'
                placeholder='First Name'
                required
                data-cy='registration-first-name'
              />
            </div>{' '}
            <div className='box-shadow' style={styles.input}>
              <input
                name='lastName'
                type='text'
                placeholder='Last Name'
                required
                data-cy='registration-last-name'
              />
            </div>
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
                name='passwordConfirmation'
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
              <Button
                onClick={() => setSubscriptionPlan('')}
                data-cy='registration-back'
                style={{ margin: '15px 10px 0 10px' }}>
                Back?
              </Button>

              <Button
                type='submit'
                loading={loading ? true : false}
                data-cy='registration-submit'
                style={styles.button}>
                Register
              </Button>
            </div>
          </Form>
        )}
      </Segment>
    </>
  );
};

export default Register;

const styles = {
  input: {
    width: 300,
    textAlign: 'center',
    color: 'white',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    margin: '15px 10px 0 10px',
    backgroundColor: '#fce42d',
  },
};
