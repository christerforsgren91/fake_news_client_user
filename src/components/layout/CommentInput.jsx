import React, { useState } from 'react';
import Articles from '../../modules/Articles';
import { useSelector } from 'react-redux';

const CommentInput = () => {
  const { subscriber } = useSelector((state) => state);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const submitComment = (event) => {
    event.preventDefault();
    if (subscriber) {
      const comments = {
        body: event.target.body.value,
      };
      Articles.create(comments);
      setInput('');
      setMessage('');
    } else {
      setMessage('Please subscribe to comment');
    }
  };

  return (
    <div>
      {<h2 data-cy='message'>{message}</h2>}
      <form onSubmit={(event) => submitComment(event)}>
        <textarea
          data-cy='comment-input'
          name='body'
          placeholder='Add comment here'
          value={input}
          required
          onChange={(event) => setInput(event.target.value)}
        />
        <div className='comment-buttons'>
          <input data-cy='comment-btn' name='comment' type='submit' />
          <button
            data-cy='clear-btn'
            href='#'
            type='reset'
            onClick={() => setInput('')}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
