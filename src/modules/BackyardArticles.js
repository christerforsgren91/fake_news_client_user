import axios from 'axios';
import store from '../state/store/configureStore';
import errorHandler from './ErrorHandler';

const BackyardArticles = {
  async index(coords) {
    if (coords) {
      try {
        let { latitude, longitude } = coords;
        let response = await axios.get(
          `/backyard/?lat=${latitude}&lon=${longitude}`
        );
        store.dispatch({
          type: 'SET_BACKYARD_ARTICLES',
          payload: response.data.backyardArticles,
        });
      } catch (error) {
        debugger;
        errorHandler(error);
      }
    } else {
      store.dispatch({
        type: 'ERROR_MESSAGE',
        payload: 'Please allow your location to see the backyard articles.',
      });
    }
  },
  async show(id) {
    try {
      const response = await axios.get(`/backyard/${id}`);
      store.dispatch({
        type: 'SHOW_BACKYARD_ARTICLES',
        payload: response.data.backyardArticles,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

export default BackyardArticles;
