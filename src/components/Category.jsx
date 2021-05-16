import React, { useEffect } from 'react';
import Articles from '../modules/Articles';
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import CategoryMenu from './layout/CategoryMenu';

const Category = () => {
  const { articles } = useSelector((state) => state);
  const { category } = useParams();

  useEffect(() => {
    // eslint-disable-next-line
    Articles.index(category);
  }, []);

  let categoryList = articles.map((article, index) => {
    return <ArticleCard article={article} index={index} key={index} />;
  });

  return (
    <div>
    <CategoryMenu />
      <h1 className='category-header' data-cy='category-header'>
        {category}
      </h1>
      {articles[0] ? (
        categoryList
      ) : (
        <p data-cy='error-message' style={{color:"red", textAlign:"center"}}>
          Selected category does not have any articles
        </p>
      )}
    </div>
  );
};

export default Category;
