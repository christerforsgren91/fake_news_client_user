import React from 'react';
import { Link } from 'react-router-dom';
import { Rating, Label, Icon } from 'semantic-ui-react';
import { setRating } from '../modules/Articles';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const ArticleCard = ({ article, index }) => {
  const { subscriber } = useSelector((state) => state);
  const isSmall = useMediaQuery({ query: '(max-width: 1170px)' });

  const redirectionRoute = () => {
    if (subscriber) {
      return `/articles/${article.id}`;
    } else if (article.premium) {
      return { pathname: '/registration', state: { redirected: true } };
    } else {
      return `/articles/${article.id}`;
    }
  };

  return (
    <div
      className={
        isSmall
          ? 'small-card-container box-shadow'
          : 'card-container box-shadow'
      }
      data-cy={`article-card-${index}`}>
      <Link to={redirectionRoute()}>
        <div data-cy='article' className='card-content-wrapper'>
          {article.premium && (
            <Label data-cy='premium-label' style={styles.label}>
              <Icon name='star' color='black' /> Premium
            </Label>
          )}
          <img
            data-cy='image'
            className={isSmall ? 'small-card-image' : 'card-image'}
            style={{ marginTop: article.premium && -25 }}
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
            <div>
              <Rating
                data-cy='rating'
                rating={setRating(article.rating)}
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
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

const styles = {
  label: {
    backgroundColor: '#ffb74d',
    color: 'black',
    position: 'relative',
    top: 0,
    zIndex: 2000,
    width: '100%',
  },
};
