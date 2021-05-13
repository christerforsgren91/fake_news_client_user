import axios from 'axios'

const Articles = {
  async get() {
   const response = await axios.get('/articles/');
    return response.data.articles
  }
}

export default Articles