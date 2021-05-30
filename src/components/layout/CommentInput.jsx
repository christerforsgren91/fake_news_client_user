import React, { useState } from 'react';
import Articles from '../../modules/Articles';
import { useSelector } from 'react-redux';

const CommentInput = () => {
  const { subscriber, article } = useSelector((state) => state);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [focus, setFocus] = useState(false);

  const submitComment = () => {
    if (subscriber) {
      const comments = {
        body: input,
      };
      if (input.trim().length !== 0) {
        Articles.createComment(comments, article.id);
        setInput('');
        setMessage('');
        setFocus(false);
      } else {
        setMessage("Comment field can't be empty");
      }
    } else {
      setMessage('Please subscribe to comment');
    }
  };

  const submitCommentHandler = (event) => {
    if (event.key === 'Enter') {
      submitComment();
    }
  };

  return (
    <div className='comment-outer-container'>
      <div className='comment-inner-container'>
        <h2 className='sign-up-message' data-cy='message'>
          {message}
        </h2>
        <textarea
          className='comment-textarea'
          data-cy='comment-input'
          type='text'
          name='body'
          placeholder='Add comment here'
          value={input}
          required
          onFocus={() => setFocus(true)}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={submitCommentHandler}
        />
        {focus ? (
          <div className='comment-button-container'>
            <button
              onClick={() => submitComment()}
              className='submit-btn '
              data-cy='comment-btn'
              name='comment'>
              Submit
            </button>
            <button
              className=' clear-btn'
              data-cy='clear-btn'
              onClick={() => {
                setInput('');
                setFocus(false);
              }}>
              Clear
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CommentInput;
