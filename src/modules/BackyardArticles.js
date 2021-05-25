import axios from 'axios';
import { useTranslation } from 'react-i18next';
import store from '../state/store/configureStore';
import errorHandler from './ErrorHandler';

const { t } = useTranslation;
const BackyardArticles = {
  async index(coords) {
    if (coords) {
      try {
        let { latitude, longitude } = coords;
        let response = await axios.get(
          `/backyards/?lat=${latitude}&lon=${longitude}`
        );
        if (response.data.backyard_articles[0]) {
          store.dispatch({
            type: 'SET_BACKYARD_ARTICLES',
            payload: {
              articles: response.data.backyard_articles,
              location: response.data.location,
            },
          });
        } else {
          store.dispatch({
            type: 'NO_BACKYARD_ARTICLES',
            payload: {
              message: t('popupMessageNoBackyardArticles'),
              location: response.data.location,
            },
          });
        }
      } catch (error) {
        errorHandler(error);
      }
    } else {
      store.dispatch({
        type: 'ERROR_MESSAGE',
        payload: t('popupMessageAllowYourLocation'),
      });
    }
  },
  async show(id) {
    try {
      const response = await axios.get(`/backyards/${id}`);
      store.dispatch({
        type: 'SHOW_BACKYARD_ARTICLE',
        payload: response.data.backyard_article,
      });
    } catch (error) {
      errorHandler(error);
    }
  },
  async create(backyardArticle) {
    try {
      const params = {
        backyardArticle: {
          ...backyardArticle,
          body: backyardArticle.body.split('\n\n'),
        },
      };
      await axios.post('/backyards', params, {
        headers: getUserAuthToken(),
      });
      store.dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: t('popupMessageBackyarArticlePublished'),
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

export default BackyardArticles;

const getUserAuthToken = () => {
  return JSON.parse(localStorage.getItem('user_headers'));
};
