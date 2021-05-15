import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Articles from '../modules/Articles';

const Article = () => {
  const { article } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    Articles.show(id);
  }, [id]);

  return (
    <div data-cy='article-container' className='article-container'>
      {article && (
        <>
          <h1 data-cy='article-title' className='article-title'>
            {article.title}
          </h1>
          <p data-cy='article-category' className='article-category'>
            {article.category}
          </p>
          <p data-cy='article-body' className='article-body'>
            {article.body}
          </p>
          <p data-cy='article-author' className='article-author'>
            {article.author &&
              `${article.author.first_name} ${article.author.last_name}`}
            :{' '}
            <span data-cy='article-date' className='article-date'>
              {article.date}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default Article;
