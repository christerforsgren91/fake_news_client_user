import store from '../state/store/configureStore';

const errorHandler = (error) => {
  if (error.message !== 'Network Error') {
    switch (error.response.status) {
      case 500:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload:
            'Servers are currently not responding, Please try again later',
        });
        break;
      case 400:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: "Payment didn't go through, please try again.",
        });
        break;
      case 401:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload:
            'Please register an account to do this.',
        });
        break;
      case 422:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload:
            'Server is unable to process your request, please try again.',
        });
        break;
      case 404:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: error.response.data.error_message,
        });
        break;
      default:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: error.message,
        });
        break;
    }
  } else {
    store.dispatch({
      type: 'ERROR_MESSAGE',
      payload: error.message,
    });
  }
};
export default errorHandler;
