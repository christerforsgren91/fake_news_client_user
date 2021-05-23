import axios from 'axios';
import store from '../state/store/configureStore';
import errorHandler from './ErrorHandler';

const Authentication = {
  async login(event) {
    let params = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios
      .post('auth/sign_in', params)
      .then((response) => {
        let name = response.data.data.first_name;
        setUserAuthToken(response.headers);
        store.dispatch({
          type: 'AUTHENTICATE',
          payload: `Welcome back, ${name}!`,
        });
      })
      .catch((error) => {
        errorHandler(error);
      });
  },

  async logout() {
    axios
      .delete('auth/sign_out', { headers: getUserAuthToken() })
      .then(() => {
        store.dispatch({
          type: 'LOG_OUT',
          payload: 'See you again soon!',
        });
        localStorage.clear();
      })
      .catch((error) => {
        errorHandler(error);
      });
  },

  async subscribe(event, stripeDetails, setLoading, subscriptionPlan) {
    if (stripeDetails) {
      try {
        const response = await axios.post(
          '/auth/',
          createParams(event, subscriptionPlan, stripeDetails)
        );
        setUserAuthToken(response.headers);
        store.dispatch({
          type: 'AUTHENTICATE',
          payload: `Thank you for subscribing, ${response.data.data.first_name}!`,
        });
      } catch (error) {
        errorHandler(error);
      }
    }

    setLoading(false);
  },

  async validateToken() {
    axios
      .get('/auth/validate_token', { headers: getUserAuthToken() })
      .then((response) => {
        setUserAuthToken(response.headers);
        store.dispatch({ type: 'AUTHENTICATE' });
      })
      .catch(() => {});
  },
};

export default Authentication;

const createParams = (event, subscriptionPlan, stripeDetails) => {
  return {
    first_name: event.target.firstName.value,
    last_name: event.target.lastName.value,
    email: event.target.email.value,
    password: event.target.password.value,
    password_confirmation: event.target.passwordConfirmation.value,
    role: 'subscriber',
    plan: subscriptionPlan,
    stripe_details: stripeDetails,
  };
};
const getUserAuthToken = () => {
  return JSON.parse(localStorage.getItem('user_headers'));
};

const setUserAuthToken = (headers) => {
  localStorage.setItem('user_headers', JSON.stringify(headers));
};
