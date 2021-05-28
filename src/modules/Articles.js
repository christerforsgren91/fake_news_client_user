import axios from 'axios';
import store from '../state/store/configureStore';
import errorHandler from './ErrorHandler';

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
      await axios.post('/ratings', params, { headers: getUserAuthToken() });
      store.dispatch({
        type: 'SUCCESSFUL_RATING',
      });
    } catch (error) {
      errorHandler(error);
    }
  },

  async createComment(comments, id) {
    try {
      const params = comments
      await axios.post(`/articles/${id}/comments/`, params, {
        headers: getUserAuthToken(),
      });
      store.dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: 'Your comment has been published',
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

export default Articles;

const getUserAuthToken = () => {
  return JSON.parse(localStorage.getItem('user_headers'));
};

export const setRating = (rating) => {
  return Math.round(rating)
};
