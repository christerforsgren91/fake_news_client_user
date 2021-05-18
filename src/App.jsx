import React from 'react';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer';
import Article from './components/Article';
import { Switch, Route } from 'react-router';
import Category from './components/Category';
import Login from './components/Login';
import Registration from './components/Register';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IovvJL7WvJmM60Hf2OVas98LZcERwohgrfHfsqEpnjGYIenQB6aNPFBPFmxIYf2enlQYKtWdLae7Jgjv1FwLwsE00r9IeAFuD');

const App = () => {
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
      <Footer />
    </>
  );
};

export default App;
