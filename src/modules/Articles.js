import axios from 'axios';
import store from '../state/store/configureStore';

const Articles = {
  async index(setArticles) {
    try {
      const response = await axios.get('/articles/');
      setArticles(response.data.articles);
    } catch (error) {
      if (error.response.status === 500) {
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload:
            'Servers are currently not responding, Pleas try again later',
        });
      } else {
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: error.message,
        });
      }
    }
  },

  async show(setArticles, id) {
    try {
      const response = await axios.get(`/articles/${id}`);
      setArticles(response.data.articles);
    } catch (error) {
      if (error.response.status === 500) {
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload:
            'Servers are currently not responding, Pleas try again later',
        });
      } else {
        store.dispatch({
          type: 'ERROR_MESSAGE',
          payload: error.message,
        });
      }
    }
  },
};

export default Articles;
