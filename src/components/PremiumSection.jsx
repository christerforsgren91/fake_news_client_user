import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const PremiumSection = ({ article }) => {
  const { subscriber } = useSelector((state) => state);
  const isSmall = useMediaQuery({ query: '(max-width: 1250px)' });

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
    <>
      <Link
        key={article.id}
        to={redirectionRoute}
        style={isSmall ? smallStyles.articleContainer : styles.articleContainer}>
        <div className='background-hover box-shadow' style={isSmall ? smallStyles.wrapper : styles.wrapper}>
          <div style={styles.overlay}></div>
          <img
            src={article.image}
            alt={article.title}
            style={styles.imageContainer}
          />
          <h4 style={isSmall ? smallStyles.title : styles.title}>
            {article.title}
          </h4>
        </div>
      </Link>
    </>
  );
};

export default PremiumSection;

const styles = {
  articleContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 10px',
    height: '80%',
    width: '80px',
    flex: 1,
  },
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    position: 'relative',
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    objectFit: 'cover',
  },
  overlay: {
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Koho',
    zIndex: 10,
    position: 'absolute',
    overflow: 'hidden',
    padding: '0 10px',
  },
};

const smallStyles = {
  articleContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '25px 10px',
    minHeight: '80%',
    minWidth: '100%',
    flex: 1,
  },
  title: {
    fontSize: '4vw',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Koho',
    zIndex: 10,
    position: 'absolute',
    overflow: 'hidden',
    padding: '0 10px',
  },
  wrapper: {
    height: '250px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    position: 'relative',
  },
};
