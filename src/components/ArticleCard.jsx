import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import { setRating } from '../modules/Articles';

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
            <Rating
              data-cy='rating'
              defaultRating={setRating(article.rating)}
              maxRating={5}
              disabled
              icon='star'
              size='tiny'
            />

            <p className='card-date' data-cy='created-at'>
              {article.date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
