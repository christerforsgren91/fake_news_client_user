import React, { useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Switch, Route } from 'react-router';

import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer';
import Article from './components/Article';
import Category from './components/Category';
import Login from './components/Login';
import Registration from './components/Register';
import BackyardDashboard from './components/BackyardDashboard';
import Popup from './components/Popup';
import Authentication from './modules/Authentication';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const App = () => {
  useEffect(() => {
    Authentication.validateToken();
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/articles/:id'>
          <Article />
        </Route>
        <Route exact path='/backyard'>
          <BackyardDashboard />
        </Route>
        <Route exact path='/category/:category'>
          <Category />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/registration'>
          <Elements stripe={stripePromise}>
            <Registration />
          </Elements>
        </Route>
      </Switch>
      <Popup />
      <Footer />
    </>
  );
};

export default App;
