import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import { setRating } from '../../modules/Articles';
import { useMediaQuery } from 'react-responsive';

const BreakingNews = ({ firstArticle: article }) => {
  const isSmall = useMediaQuery({ query: '(max-width: 1450px)' });

  if (article) {
    return (
      <Link
        to={`/articles/${article.id}`}
        className={
          isSmall
            ? 'small-breaking-news box-shadow'
            : 'breaking-news box-shadow'
        }
        data-cy='breaking-news'>
        <img
          data-cy='breaking-img'
          className={isSmall ? 'small-breaking-img' : 'breaking-img'}
          src={article.image}
          alt='Breaking news attachment'
        />
        <div
          className={isSmall ? 'small-breaking-content' : 'breaking-content'}>
          <h2
            className={isSmall ? 'small-breaking-title' : 'breaking-title'}
            data-cy='breaking-title'>
            {article.title}
          </h2>
          {!isSmall && <p data-cy='breaking-teaser'>{article.teaser}</p>}

          <Rating
            data-cy='breaking-rating'
            rating={setRating(article.rating)}
            maxRating={5}
            disabled
            icon='star'
            size='tiny'
          />
          <p className='breaking-date' data-cy='breaking-date'>
            {article.date}
          </p>
        </div>
      </Link>
    );
  }
  return '';
};

export default BreakingNews;
