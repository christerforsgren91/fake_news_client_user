import React from 'react';

const BreakingNews = ({ firstArticle }) => {
  if (firstArticle) {
    return (
      <div>
        <div className='breaking-news' data-cy='breaking-news' placeholder>
          <img
          data-cy='braking-img'
            className='braking-img'
            src='https://images.unsplash.com/photo-1487758608033-7780b34680ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80'
            alt=''
          />
          <div className='breaking-content'>
            <h2 data-cy='breaking-title' >{firstArticle.title}</h2>
            <h4 data-cy='breaking-teaser' >{firstArticle.teaser}</h4>
            <p data-cy='breaking-date' >{firstArticle.date}</p>
          </div>
        </div>
      </div>
    );
  }
  return '';
};

export default BreakingNews;
