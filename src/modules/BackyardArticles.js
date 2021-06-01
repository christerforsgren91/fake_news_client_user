import axios from 'axios'
import i18n from '../i18n'
import store from '../state/store/configureStore'
import errorHandler from './ErrorHandler'

const BackyardArticles = {
  async index(coords) {
    if (coords) {
      try {
        let { latitude, longitude } = coords
        let response = await axios.get(
          `/backyards/?lat=${latitude}&lon=${longitude}`
        )
        if (response.data.backyard_articles[0]) {
          store.dispatch({
            type: 'SET_BACKYARD_ARTICLES',
            payload: {
              articles: response.data.backyard_articles,
              location: response.data.location,
            },
          })
        } else {
          store.dispatch({
            type: 'NO_BACKYARD_ARTICLES',
            payload: {
              message: i18n.t('popupMessageNoBackyardArticles'),
              location: response.data.location,
            },
          })
        }
      } catch (error) {
        errorHandler(error)
      }
    } else {
      store.dispatch({
        type: 'ERROR_MESSAGE',
        payload: i18n.t('popupMessageAllowYourLocation'),
      })
    }
  },
  async show(id) {
    try {
      const response = await axios.get(`/backyards/${id}`)
      store.dispatch({
        type: 'SHOW_BACKYARD_ARTICLE',
        payload: response.data.backyard_article,
      })
    } catch (error) {
      errorHandler(error)
    }
  },
  async create(backyardArticle) {
    try {
      const params = {
        backyardArticle: backyardArticle,
      }
      await axios.post('/backyards', params, {
        headers: getUserAuthToken(),
      })
      store.dispatch({
        type: 'SUCCESS_MESSAGE',
        payload: i18n.t('popupMessageBackyarArticlePublished'),
      })
      store.dispatch({
        type: 'UPDATE',
      })
    } catch (error) {
      errorHandler(error)
    }
  },
}

export default BackyardArticles

const getUserAuthToken = () => {
  return JSON.parse(localStorage.getItem('user_headers'))
}
