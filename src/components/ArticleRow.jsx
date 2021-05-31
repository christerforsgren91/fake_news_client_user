import React from 'react';
import { Link } from 'react-router-dom';
import { setRating } from '../modules/Articles';
import { Rating, Label, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const ArticleRow = ({ article }) => {
  const { subscriber } = useSelector((state) => state);
  const isSmall = useMediaQuery({ query: '(max-width: 1050px)' });

  const responsiveStyles = {
    container: {
      display: 'flex',
      flexDirection: isSmall ? 'column' : 'row',
    },
    contentContainer: {
      color: 'white',
      padding: isSmall ? '25px 0' : 25,
    },
    image: {
      height: isSmall ? 'auto' : 240,
      width: isSmall ? '100%' : 300,
      objectFit: 'cover',
    },
  };

  return (
    <Link
      style={styles.container}
      data-cy='article'
      className='hover'
      to={
        subscriber
          ? `/articles/${article.id}`
          : article.premium
          ? { pathname: '/registration', state: { redirected: true } }
          : `/articles/${article.id}`
      }>
      <div>
        {article.premium && (
          <Label data-cy='premium-label' style={styles.label}>
            <Icon name='star' color='black' /> Premium
          </Label>
        )}
      </div>
      <div style={responsiveStyles.container}>
        <img
          style={responsiveStyles.image}
          src={article.image}
          alt={article.title}
        />
        <div style={responsiveStyles.contentContainer}>
          <h1 data-cy='title'>{article.title}</h1>
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
  );
};

export default ArticleRow;

const styles = {
  container: {
    display: 'flex',
    marginBottom: 50,
    flexDirection: 'column',
    width: '100%'
  },
  image: {
    height: 240,
    width: 300,
    objectFit: 'cover',
  },
  label: {
    backgroundColor: '#ffb74d',
    color: 'black',
    position: 'relative',
    top: 0,
    zIndex: 2000,
  },
};
