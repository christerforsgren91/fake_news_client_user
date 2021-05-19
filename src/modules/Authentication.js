import axios from 'axios';
import store from '../state/store/configureStore';

const Authentication = {
  async subscribe(event, result, setLoading) {
    if (result.token) {
      try {
        axios.post('/auth', createParams(event)).then((headers) => {
          axios
            .post(
              '/subscriptions/',
              { stripeToken: result.token.id },
              { headers: headers }
            )
            .then((response) => {
              store.dispatch({
                type: 'SET_SUBSCRIBE',
                payload: response.data.message,
              });
            });
        });
      } catch (error) {
        //errorHandler?
      }
    } else {
    }
    setLoading(false)
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
