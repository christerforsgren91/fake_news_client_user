import axios from 'axios';
import store from '../state/store/configureStore';

const Articles = {
  async index() {
    try {
      const response = await axios.get('/articles/');
      store.dispatch({ type: 'SET_ARTICLES', payload: response.data.articles });
    } catch (error) {
      errorHandler(error);
    }
  },

  async show(id) {
    try {
      const response = await axios.get(`/articles/${id}`);
      store.dispatch({
        type: 'SHOW_ARTICLE',
        payload: response.data.article,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

export default Articles;

const errorHandler = (error) => {
  if (error.response.status === 500) {
    store.dispatch({
      type: 'ERROR_MESSAGE',
      payload: 'Servers are currently not responding, Please try again later',
    });
  } else {
    store.dispatch({
      type: 'ERROR_MESSAGE',
      payload: error.message,
    });
  }
};
