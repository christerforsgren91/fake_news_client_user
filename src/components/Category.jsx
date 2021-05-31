import React, { useEffect } from 'react';
import Articles from '../modules/Articles';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import CategoryMenu from './layout/CategoryMenu';
import ArticleRow from './ArticleRow';

const Category = () => {
  const { articles } = useSelector((state) => state);
  const { category } = useParams();

  useEffect(() => {
    Articles.index(category);
    // eslint-disable-next-line
  }, [category]);

  let categoryList = articles.map((article, index) => {
    return <ArticleRow article={article} index={index} key={index} />;
  });

  return (
    <>
      <CategoryMenu />
      <h1 className='category-header' data-cy='category-header'>
        {category}
      </h1>
      {articles[0] ? (
        <div id='category-container'>{categoryList}</div>
      ) : (
        <p
          data-cy='error-message'
          style={{ color: 'red', textAlign: 'center' }}>
          Selected category does not have any articles
        </p>
      )}
    </>
  );
};

export default Category;
