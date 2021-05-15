import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, index }) => {
  return (
    <div className='card-container' data-cy={`article-card-${index}`}>
      <Link to={`/articles/${article.id}`}>
        <div id={article.id}>
          <img
            className='card-image'
            src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80'
            alt='Article Card attachment'
          />
          <div className='card-content'>
            <h4 className='card-header' data-cy='title'>
              {article.title}
            </h4>
            <p className='card-teaser' data-cy='teaser'>
              {article.teaser}
            </p>
            <p className='card-date' data-cy='created-at'>
              <p>{article.date}</p>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
