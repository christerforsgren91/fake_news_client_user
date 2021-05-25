import { useTranslation } from 'react-i18next';
import store from '../state/store/configureStore';

const { t } = useTranslation;

const errorHandler = (error) => {
  if (error.message !== 'Network Error') {
    switch (error.response.status) {
      case 500:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: t('error500'),
        });
        break;
      case 400:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: t('error400'),
        });
        break;
      case 401:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: t('error401'),
        });
        break;
      case 422:
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: t('error422'),
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
