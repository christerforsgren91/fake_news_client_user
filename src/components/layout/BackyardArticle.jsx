import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BackyardArticles from '../../modules/BackyardArticles';
import { useParams } from 'react-router';

const BackyardArticle = () => {
  const { backyardArticle } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    BackyardArticles.show(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div data-cy='article-container' className='backyard-container box-shadow'>
      <h1 data-cy='title' className='article-title'>
        {backyardArticle.title}
      </h1>
      <h2 data-cy='theme' className='article-author'>
        {backyardArticle.theme}
      </h2>
      <p data-cy='author' className='article-category'>
        Written By: {backyardArticle.written_by}
      </p>
      <p data-cy='date' className='article-date'>
        {backyardArticle.date}
      </p>
      {backyardArticle.body &&
        backyardArticle.body.map((paragraph) => (
          <>
            <p data-cy='body' className='article-body'>
              {paragraph}
            </p>
            <br />
          </>
        ))}
    </div>
  );
};

export default BackyardArticle;
