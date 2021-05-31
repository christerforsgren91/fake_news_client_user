import i18n from '../i18n';
import store from '../state/store/configureStore';

const errorHandler = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 500:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: i18n.t('error500'),
        });
        break;
      case 400:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: i18n.t('error400'),
        });
        break;
      case 401:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: i18n.t('error401'),
        });
        break;
      case 422:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: i18n.t('error422'),
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
