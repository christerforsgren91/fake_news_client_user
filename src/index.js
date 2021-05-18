import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import './style.css';
import { Provider } from 'react-redux';
import store from './state/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';

axios.defaults.baseURL = 'https://fakest-newzz.herokuapp.com/api';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <StripeProvider apiKey='pk_test_51IovvJL7WvJmM60Hf2OVas98LZcERwohgrfHfsqEpnjGYIenQB6aNPFBPFmxIYf2enlQYKtWdLae7Jgjv1FwLwsE00r9IeAFuD'>
        <App />
      </StripeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
