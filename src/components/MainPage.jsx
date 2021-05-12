import React, { useState, useEffect } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, serErrorMessage] = useState('');

  const fetchArticles = async () => {
    try {
      const response = await axios.get('/articles/');
      setArticles(response.data.articles);
      serErrorMessage('');
      
    } catch (error) {
      debugger
      if (error.response.status === 500) {
        
        serErrorMessage(
          'Servers are currently not responding, Pleas try again later'
        );
      } else {
        serErrorMessage(error.message);
      }
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  let articleList = articles.map((article, i) => {
    return <ArticleCard article={article} i={i} />;
  });

  return (
    <>
      {errorMessage && (
        <Header data-cy='error-message' color='red'>
          {errorMessage}
        </Header>
      )}
      <Grid data-cy='article-container'>{articleList}</Grid>
    </>
  );
};

export default Articles;
