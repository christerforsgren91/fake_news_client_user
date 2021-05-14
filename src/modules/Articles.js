import axios from 'axios';

const Articles = {
  async index(setArticles, setErrorMessage) {
    try {
      const response = await axios.get('/articles/');
      setArticles(response.data.articles);
    } catch (error) {
      if (error.response.status === 500) {
        setErrorMessage(
          'Servers are currently not responding, Pleas try again later'
        );
      } else {
        setErrorMessage(error.message);
      }
    }
  },
};

export default Articles;
