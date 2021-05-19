import axios from 'axios';
import Login from '../components/Login';
import store from '../state/store/configureStore';

const Authentication = {
  async login(event) {

  },

  async subscribe(event, result, setLoading) {
    if (result.token) {
      try {
        axios.post('/auth', createParams(event)).then((createResponse) => {
          let name = createResponse.data.data.first_name;
          axios
            .post(
              '/subscriptions/',
              { stripeToken: result.token.id },
              { headers: createResponse.headers }
            )
            .then((subscriptionResponse) => {
              store.dispatch({
                type: 'SET_SUBSCRIBE',
                payload: `${subscriptionResponse.data.message}, ${name}!`,
              });
            });
        });
      } catch (error) {
        //errorHandler?
      }
    } else {
    }
    setLoading(false);
  },
};

export default Authentication;

let createParams = (event) => {
  return {
    first_name: event.target.firstName.value,
    last_name: event.target.lastName.value,
    source: 'public-system',
    email: event.target.email.value,
    password: event.target.password.value,
    password_confirmation: event.target.passwordConfirmation.value,
  };
};
