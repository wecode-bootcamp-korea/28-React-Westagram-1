import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function FeedCommentComponent(props) {
  const commentID = props.commentID;
  const commentText = props.commentText;

  const likeClick = event => {
    event.preventDefault();
    event.target.style.color = 'red';
  };

  const removeComment = event => {
    event.preventDefault();
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  };

  return (
    <span key={commentID}>
      <span id="feedCommentsBold">{commentID}</span>
      {commentText}
      <FontAwesomeIcon id="commentLikeBtn" icon={faHeart} onClick={likeClick} />
      <span id="removeBtn" onClick={removeComment}>
        삭제
      </span>
    </span>
  );
}
