import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import ArticleCard from './ArticleCard'

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  
  useEffect(() => {
    const fetchArticles = async () => {
      debugger;
      try {
        const response = await axios.get('/articles/');
        setArticles(response.data.articles);
        setErrorMessage('');
      } catch (error) {
        if (error.status === 500) {
          setErrorMessage(
            'Servers are currently not responding, Pleas try again later'
            );
        }
      }
    };
    fetchArticles();
  }, []);

  let articleList = articles.map((article, i) => {
    return <ArticleCard article={article} i={i}/>;
  });

  return (
    <>
      <Grid>
        {articleList}
      </Grid>
    </>
  );
};

export default Articles;
