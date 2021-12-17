import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FeedCommentComponent({
  commentKey,
  commentEach,
  commentData,
  setCommentData,
}) {
  const likeClick = event => {
    event.preventDefault();
    event.target.style.color = 'red';
  };

  const removeComment = event => {
    event.preventDefault();
    const removedCommentList = [...commentData];
    removedCommentList.splice(event.target.parentNode.getAttribute('name'), 1);
    setCommentData(removedCommentList);
  };

  return (
    <span name={commentKey}>
      <span id="feedCommentsBold">{commentEach.commentID}</span>
      {commentEach.commentText}
      <FontAwesomeIcon id="commentLikeBtn" icon={faHeart} onClick={likeClick} />
      <span id="removeBtn" onClick={removeComment}>
        삭제
      </span>
    </span>
  );
}
