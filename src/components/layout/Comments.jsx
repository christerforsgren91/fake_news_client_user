import React from 'react';
import CommentInput from './CommentInput';

const Comments = ({ comments }) => {
  const noCommentMessage = (
    <p data-cy='no-comments-message'>No comments yet.</p>
  );

  const commentList = comments.map((comment, index) => (
    <div className='comment' data-cy='comment' id={index}>
      <div>
        <h3 className='user-comment' data-cy='user'>
          {comment.user}
        </h3>

        <p className='date-comment' data-cy='date'>
          {comment.date}
        </p>
      </div>

      <p className='body-comment' data-cy='body'>
        {comment.body}
      </p>
    </div>
  ));

  return (
    <div className='comment-section' data-cy='comment-section'>
      <h2>Comments</h2>
      <CommentInput />
      {commentList[0] ? commentList : noCommentMessage}
    </div>
  );
};

export default Comments;
