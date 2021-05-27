import React, { useState } from 'react';
import Articles from '../../modules/Articles'

const CommentInput = () => {
  const [input, setInput] = useState('')

  const submitComment = (event) => {
    event.preventDefault()
    const comments = {
      body: event.target.body.value,
    };
    Articles.create(comments);
    setInput('')
  };

  return (
    <div>
        <form 
        onSubmit={(event) => submitComment(event)}
        >
          <textarea 
          data-cy='comment-input' 
          name='body' 
          placeholder='Add comment here'
          value={input}
          onChange={(event) => setInput(event.target.value)}
          />
          <div className='comment-buttons'>
            <input
              data-cy='comment-btn'
              name='comment'
              type='submit'
            />
            <button data-cy='clear-btn' type='reset' href='#'>
              Clear
            </button>
          </div>
        </form>
    </div>
  );
};

export default CommentInput;
