import React, { useEffect } from 'react';
import Articles from '../modules/Articles';
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

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
      <h1 className='category-header' data-cy='category-header'>
        {category}
      </h1>
      {categoryList}
    </div>
  );
};

export default Category;
