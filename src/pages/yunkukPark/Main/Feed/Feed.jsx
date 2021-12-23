import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentInput from './CommentInput';
import FeedFooter from './FeedFooter';

const Feed = props => {
  const { userName, userAvatar, feedImg, content, likeHit, comments } = props;
  const [likeInfo, setLikeInfo] = useState({
    hit: likeHit,
    class: 'far fa-heart',
    animate: '',
  });
  const [like, setLike] = useState(false);
  const [feedComments, setFeedComments] = useState(comments);
  const commentLenght = feedComments.length;

  const handleLikeClick = () => {
    setLike(!like);
    updateLikeHit();
  };

  const updateLikeHit = () => {
    let myLikeInfo = { ...likeInfo };

    if (!like) {
      myLikeInfo = {
        hit: myLikeInfo.hit + 1,
        class: 'fas fa-heart is-liked',
        animate: 'like-animation',
      };
      setLikeInfo(myLikeInfo);
    }
    if (like) {
      myLikeInfo = {
        hit: myLikeInfo.hit - 1,
        class: 'far fa-heart',
        animate: '',
      };
      setLikeInfo(myLikeInfo);
    }
  };

  const addNewComment = newComment => {
    setFeedComments([newComment, ...feedComments]);
  };

  const deleteComment = comment => {
    const copyFeedComments = [...feedComments];
    const comments = copyFeedComments.filter(
      feedComment => feedComment.id !== comment.id
    );
    setFeedComments(comments);
  };

  return (
    <div className="feed-wrapper">
      <header className="feed-header">
        <div className="feed-header-left">
          <div className="avatar avatar-32">
            <Link to="#">
              <img src={userAvatar} alt={`${userName} 아바타`} />
            </Link>
          </div>
          <div className="user-info feed">
            <strong>
              <Link to="#">seha_park._._</Link>
            </strong>
          </div>
        </div>
        <button className="more-btn" type="button">
          <img src="./assets/yunkuk/image/icons/more.png" alt="more-button" />
        </button>
      </header>
      <section className="feed-main">
        <div className="feed-image-wrapper" onDoubleClick={handleLikeClick}>
          <i className={`${likeInfo.class} ${likeInfo.animate}`} />
          <img src={feedImg} alt="피드이미지" />
        </div>
      </section>
      <section className="feed-bottom">
        <section className="feed-controler">
          <div className="icon-group left">
            <div className="icon-item">
              <i className={likeInfo.class} onClick={handleLikeClick} />
            </div>
            <div className="icon-item">
              <i className="far fa-comment" />
            </div>
            <div className="icon-item">
              <i className="far fa-paper-plane" />
            </div>
          </div>
          <div className="right">
            <div className="icon-item">
              <i className="far fa-bookmark" />
            </div>
          </div>
        </section>
        <div className="feed-bottom-info">
          <div className="feed-like">
            <dl>
              <dt>좋아요</dt>
              <dd>
                <span className="like-hit">{likeInfo.hit}</span>개
              </dd>
            </dl>
          </div>
          <FeedFooter
            userName={userName}
            content={content}
            comments={feedComments}
            onDeleteButtonClick={deleteComment}
          />
        </div>
      </section>
      <CommentInput
        onButtonClick={addNewComment}
        commentLenght={commentLenght}
      />
    </div>
  );
};

export default Feed;
