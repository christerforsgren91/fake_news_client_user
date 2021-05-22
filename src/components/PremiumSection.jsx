import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PremiumSection = () => {
  const { articles, subscriber } = useSelector((state) => state);

  const premiumList = articles
    .filter((article) => article.premium === true)
    .slice(0, 3)
    .map((article) => (
      <Link
        key={article.id}
        to={
          subscriber
            ? `/articles/${article.id}`
            : article.premium
            ? { pathname: '/registration', state: { redirected: true } }
            : `/articles/${article.id}`
        }
        style={styles.articleContainer}>
        <div className='background-hover box-shadow' style={styles.wrapper}>
          <div style={styles.overlay}></div>
          <img
            src={article.image}
            alt={article.title}
            style={styles.imageContainer}
          />
          <h4 style={styles.title}>{article.title}</h4>
        </div>
      </Link>
    ));

  return <div style={styles.container}>{premiumList}</div>;
};

export default PremiumSection;

const styles = {
  container: {
    backgroundColor: '#ffb74d',
    height: 600,
    display: 'flex',
    alignItems: 'center',
    padding: '0 15%',
  },
  articleContainer: {
    margin: '0 10px',
    height: '80%',
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
