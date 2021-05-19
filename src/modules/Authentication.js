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
      .then((createResponse) => {
        let name = createResponse.data.data.first_name;
        store.dispatch({
          type: 'SET_SUBSCRIBE',
          payload: `Welcome back, ${name}!`,
        });
      })
      .catch((error) => {
        errorHandler(error);
      });
  },

  async subscribe(event, result, setLoading) {
    if (result.token) {
      axios
        .post('/auth', createParams(event))
        .then((createResponse) => {
          let name = createResponse.data.data.first_name;
          let headers = createResponse.headers;
          axios
            .post(
              '/subscriptions/',
              { stripeToken: result.token.id },
              { headers: headers }
            )
            .then((subscriptionResponse) => {
              localStorage.setItem('user_headers', JSON.stringify(headers));
              store.dispatch({
                type: 'SET_SUBSCRIBE',
                payload: `${subscriptionResponse.data.message}, ${name}!`,
              });
            })
            .catch((error) => {
              errorHandler(error);
            });
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
    setLoading(false);
  },
};

export default Authentication;

const createParams = (event) => {
  return {
    first_name: event.target.firstName.value,
    last_name: event.target.lastName.value,
    source: 'public-system',
    email: event.target.email.value,
    password: event.target.password.value,
    password_confirmation: event.target.passwordConfirmation.value,
  };
};
