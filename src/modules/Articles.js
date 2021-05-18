import axios from 'axios';
import store from '../state/store/configureStore';

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

  async ratings(rating, id) {
    let params = {
      rating: rating,
      article_id: id,
    };
    try {
      await axios.put('/ratings', params);
      store.dispatch({
        type: 'SUCCESS_MESSAGE',
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
  } else if (error.response.status === 404) {
    store.dispatch({
      type: 'ERROR_MESSAGE',
      payload: error.response.data.error_message,
    });
  } else {
    store.dispatch({
      type: 'ERROR_MESSAGE',
      payload: error.message,
    });
  }
};
