import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Articles from '../../modules/Articles';
import { useParams } from 'react-router-dom';

const Comments = ({ comments }) => {
  const { update, subscriber } = useSelector((state) => state);

  const noCommentMessage = (
    <p data-cy='no-comments-message'>No comments yet.</p>
  );

  const { id } = useParams();

  const updateComments = () => {
    if (subscriber) {
      Articles.show(id);
    } else {
      return null;
    }
  };

  useEffect(() => {
    updateComments();
    // eslint-disable-next-line
  }, [update]);

  const commentList = comments
    ? comments.map((comment, index) => (
        <div className='comment' data-cy='comment' key={index}>
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
      ))
    : [];
  return (
    <div className='comment-section' data-cy='comment-section'>
      {commentList[0] ? commentList.reverse() : noCommentMessage}
    </div>
  );
};

export default Comments;
