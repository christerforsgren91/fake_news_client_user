import axios from 'axios';
import store from '../state/store/configureStore';
import errorHandler from './ErrorHandler'

const Articles = {
  async index(category) {
    try {
      let response;
      if (category) {
        response = await axios.get(`/articles/?category=${category}`);
      } else {
        response = await axios.get('/articles/');
      }
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

