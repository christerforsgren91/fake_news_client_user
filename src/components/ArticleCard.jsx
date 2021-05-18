import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, index }) => {
  return (
    <div
      className='card-container box-shadow'
      data-cy={`article-card-${index}`}>
      <Link to={`/articles/${article.id}`}>
        <div id={article.id} data-cy='article'>
          <img
            data-cy='image'
            className='card-image'
            src={article.image}
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
