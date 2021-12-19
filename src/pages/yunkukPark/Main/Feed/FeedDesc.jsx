import React, { useState } from 'react';
import CommentList from './CommentList';

const FeedDesc = props => {
  const { userName, content, comments, onDeleteButtonClick } = props;

  return (
    <div className="feed-desc-group">
      <dl className="feed-desc">
        <dt className="user-id">{userName}</dt>
        <dd className="feed-content">{content}</dd>
      </dl>
      <ul className="feed-comment-list">
        {comments.map(comment => (
          <CommentList
            key={comment.id}
            comment={comment}
            onDeleteButtonClick={onDeleteButtonClick}
          />
        ))}
      </ul>
      <p className="comment-more">댓글 {comments.length}개 모두 보기</p>
      <p className="feed-uploaded">4시간 전</p>
    </div>
  );
};

export default FeedDesc;
