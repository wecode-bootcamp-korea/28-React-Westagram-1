import { useState, useEffect } from 'react';
import Comment from './Comment';

export default function Feed({ feedInfo }) {
  const { feedId, name, userImg, feedImg, desc, likeCount, comments } =
    feedInfo;
  const [comment, setComment] = useState(comments);
  const [inputComment, setInputComment] = useState('');
  const [disabledPost, setDisabledPost] = useState(true);

  useEffect(() => {
    setDisabledPost(!inputComment.length);
  }, [inputComment]);

  const handleComment = e => {
    const { value } = e.target;
    setInputComment(value);
  };

  const commentEnter = e => {
    if (e.key === 'Enter') addComment();
  };

  const addComment = () => {
    const newComment = {
      id: comment.length + 1,
      name: 'kimCode',
      content: inputComment,
    };
    setComment([...comment, newComment]);
    setInputComment('');
  };

  return (
    <article className="user_feed">
      <header>
        <section className="user_profile">
          <div>
            <img src={userImg} alt="user profile img" />
          </div>
          <em>{name}</em>
        </section>
        <i className="feed_handler fas fa-ellipsis-h fa-1x" />
      </header>
      <ul className="feed_imgs">
        <li>
          <img src={feedImg} alt={`feedImg${feedId}`} />
        </li>
      </ul>
      <ul className="feed_img_dots">
        <li />
        <li className="active_feed_dots" />
      </ul>
      <section className="feed_reaction">
        <span>
          <i className="far fa-heart fa-2x" />
        </span>
        <span>
          <i className="far fa-comment fa-2x" />
        </span>
        <span>
          <i className="far fa-paper-plane fa-2x" />
        </span>
        <span>
          <i className="far fa-bookmark fa-2x" />
        </span>
      </section>
      <a href="#!" className="like_people">
        좋아요 <em>{likeCount.toLocaleString()}개</em>
      </a>
      <section className="feed_desc_wrap">
        <div className="user_desc">
          <em>{name}</em>
          <span>{desc}</span>
        </div>
        <a href="#!" className="more_comment">
          댓글 <b>{comment.length}개</b> 모두 보기
        </a>
        <ul className="comment_list">
          {comment.map(item => (
            <Comment key={item.id} commentInfo={item} />
          ))}
        </ul>
        <time className="before_post">1일 전</time>
      </section>
      <section className="post_comment_wrap">
        <button className="emoji">
          <i className="far fa-smile fa-2x" />
        </button>
        <input
          id="post_comment_input"
          type="text"
          placeholder="댓글 달기..."
          onKeyPress={commentEnter}
          onChange={handleComment}
          value={inputComment}
        />
        <button
          className="post_comment_btn"
          disabled={disabledPost}
          onClick={addComment}
        >
          게시
        </button>
      </section>
    </article>
  );
}
