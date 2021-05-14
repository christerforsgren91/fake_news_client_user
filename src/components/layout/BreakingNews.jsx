import React from 'react';

const BreakingNews = ({ firstArticle: article }) => {
  if (article) {
    return (
        <div className='breaking-news' data-cy='breaking-news' placeholder>
          <img
          data-cy='breaking-img'
            className='breaking-img'
            src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80'
            alt=''
          />
          <div className='breaking-content'>
            <h2 data-cy='breaking-title' >{article.title}</h2>
            <h4 data-cy='breaking-teaser' >{article.teaser}</h4>
            <p data-cy='breaking-date' >{article.date}</p>
          </div>
        </div>
    );
  }
  return '';
};

export default BreakingNews;
