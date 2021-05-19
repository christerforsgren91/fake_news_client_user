import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Articles, { setRating } from '../modules/Articles';
import { Popup, Rating } from 'semantic-ui-react';

const Article = () => {
  const { article, popupSuccess } = useSelector((state) => state);
  const { id } = useParams();

  const articleRating = (event, { rating, maxRating }) => {
    Articles.ratings(rating, id);
  };

  useEffect(() => {
    Articles.show(id);
  }, [id]);

  return (
    <div data-cy='article-container' className='article-container'>
      {article && (
        <>
          <img
            data-cy='article-image'
            src={article.image}
            alt='article.attachment'
            style={{ width: '100%' }}
          />
          <h1 data-cy='article-title' className='article-title'>
            {article.title}
          </h1>
          <p data-cy='article-category' className='article-category'>
            Category: {article.category}
          </p>
          <Popup
            content={
              popupSuccess
                ? 'Thank you for your opinion!'
                : 'Sorry your vote was not registered'
            }
            on='Click'
            pinned
            popper={{ id: 'rating-message' }}
            hideOnScroll
            trigger={
              <Rating
                onRate={articleRating}
                data-cy='article-rating-button'
                defaultRating={setRating(article.rating)}
                maxRating={5}
                icon='star'
                size='tiny'
              />
            }
          />
          <span data-cy='article-rating' style={{ fontSize: '1rem' }}>
            {` ${article.rating}`}
          </span>
          <p data-cy='article-author' className='article-author'>
            {article.author &&
              `Written by: ${article.author.first_name} ${article.author.last_name} - `}
            <span data-cy='article-date' className='article-date'>
              {article.date}
            </span>
          </p>

          <p data-cy='article-body' className='article-body'>
            {article.body}
          </p>
        </>
      )}
    </div>
  );
};

export default Article;
