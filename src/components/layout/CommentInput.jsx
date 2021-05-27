import React from 'react';

const CommentInput = () => {
  return (
    <div>
      <form>
        <textarea name='' placeholder='Add comment here'></textarea>
        <div className='comment-buttons'>
          <input name='comment' data-cy='comment-input' type='submit' value='Comment'/>
          <button data-cy='clear-btn' herf='#'>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
