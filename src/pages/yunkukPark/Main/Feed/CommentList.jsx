import React, { useState } from 'react';

const CommentList = props => {
  const {
    onDeleteButtonClick,
    comment,
    comment: { userName, content },
  } = props;

  const [isCommentLike, setIsCommentLike] = useState(false);
  const [likeClass, normalClass] = ['fas is-liked', 'far'];

  return (
    <li className="feed-comment-item">
      <dl className="feed-desc feed-comment">
        <dt className="feed-comment user-id">{userName}</dt>
        <dd className="feed-comment feed-content">{content}</dd>
      </dl>
      <div>
        <button type="button" onClick={() => setIsCommentLike(!isCommentLike)}>
          <i
            className={
              isCommentLike
                ? `fa-heart ${likeClass}`
                : `fa-heart ${normalClass}`
            }
          />
        </button>
        <button type="button">
          <i
            className="fas fa-times"
            onClick={() => {
              // delete target comment
              onDeleteButtonClick(comment);
            }}
          />
        </button>
      </div>
    </li>
  );
};

export default CommentList;
