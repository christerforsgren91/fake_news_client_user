import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import Articles from '../modules/Articles';
import ArticleCard from './ArticleCard';
import BreakingNews from './layout/BreakingNews';

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchArticles = async () => {
    try {
      const response = await Articles.get()
      setArticles(response);
      setErrorMessage('');
    } catch (error) {
      if (error.response.status === 500) {
        setErrorMessage(
          'Servers are currently not responding, Pleas try again later'
        );
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  let articleList = articles.slice(1).map((article, i) => {
    return <ArticleCard article={article} i={i} />;
  });

  return (
    <>
      {errorMessage && (
        <Header data-cy='error-message' color='red'>
          {errorMessage}
        </Header>
      )}
      <BreakingNews firstArticle={articles[0]} />
      <div id='card-container' data-cy='articles-container'>
        {articleList}
      </div>
    </>
  );
};

export default MainPage;
