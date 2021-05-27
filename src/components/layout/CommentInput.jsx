import React from 'react';
import { useSelector } from 'react-redux';

const CommentInput = () => {
  const { article } = useSelector((state) => state.state);

  return (
    <div>
        <form>
          <textarea name='' placeholder='Add comment here'></textarea>
          <div className='comment-buttons'>
            <input
              name='comment'
              data-cy='comment-input'
              type='submit'
              value='Comment'
            />
            <button data-cy='clear-btn' herf='#'>
              Clear
            </button>
          </div>
        </form>
    </div>
  );
};

export default CommentInput;
