import React from 'react';
import Articles from '../../modules/Articles'

const CommentInput = () => {

  const submitComment = (event) => {
    const comments = {
      body: event.target.body.value,
    };
    Articles.create(comments);
  };

  return (
    <div>
        <form 
        onSubmit={(event) => submitComment(event)}
        >
          <textarea data-cy='comment-input' name='body' placeholder='Add comment here'></textarea>
          <div className='comment-buttons'>
            <input
              data-cy='comment-btn'
              name='comment'
              type='submit'
            />
            <button data-cy='clear-btn' href='#'>
              Clear
            </button>
          </div>
        </form>
    </div>
  );
};

export default CommentInput;
