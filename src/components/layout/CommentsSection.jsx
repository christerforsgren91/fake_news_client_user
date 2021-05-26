import React from 'react'

const CommentsSection = ({comments}) => {

  const noCommentMessage = (
    <p data-cy='no-comments-message'>No comments yet.</p>
  )

  const commentList = comments.map((comment, index) => (
    <div data-cy='comment' id={index}>
      <h3 data-cy='user'>{comment.user}</h3>      
      <p data-cy='body'>{comment.body}</p>
      <p data-cy='date'>{comment.date}</p>
    </div>
  ))

  return (
    <div data-cy='comment-section'>
      <h2>Comments Section</h2>
      {commentList[0] ? commentList : noCommentMessage}
    </div>
  )
}

export default CommentsSection
