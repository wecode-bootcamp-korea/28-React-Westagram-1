import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [likeInfo, setLikeInfo] = useState({
    hit: 100,
    class: 'far fa-heart',
    animate: '',
  });
  const [like, setLike] = useState(false);

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

  return (
    <div className="feed-wrapper">
      <header className="feed-header">
        <div className="feed-header-left">
          <div className="avatar avatar-32">
            <Link to="#">
              <img
                src="./assets/yunkuk/image/yunkuk-avatar.jpg"
                alt="유저아바타"
              />
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
          <img src="./assets/yunkuk/image/feedImage1.jpeg" alt="피드이미지" />
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
          <div className="feed-desc-group">
            <dl className="feed-desc">
              <dt className="user-id">h_sej1n_</dt>
              <dd className="feed-content">응애 기타쳐버렸지🎸</dd>
            </dl>
            <ul className="feed-comment-list" />

            <p className="comment-more">댓글 3개 모두 보기</p>
            <p className="feed-uploaded">4시간 전</p>
          </div>
        </div>
      </section>
      <section className="comment-wrapper">
        <button type="button">
          <i className="far fa-smile" />
        </button>
        <input name="comment" type="text" placeholder="댓글 달기..." />
        <button className="comment-submit-button button-primary" disabled>
          게시
        </button>
      </section>
    </div>
  );
};

export default Feed;
