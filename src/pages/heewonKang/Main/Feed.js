import { useState, useEffect } from 'react';
import Comment from './Comment';

export default function Feed() {
  const [inputComment, setInputComment] = useState('');
  const [disabledPost, setDisabledPost] = useState(true);
  const [comment, setComment] = useState([
    {
      id: 1,
      name: 'gmldnjslzzang',
      comment: '우와 멋지다 💃🏻',
    },
    {
      id: 2,
      name: 'leejungglee',
      comment: '✨',
    },
  ]);

  useEffect(() => {
    if (inputComment.length) {
      setDisabledPost(false);
    } else {
      setDisabledPost(true);
    }
  }, [inputComment]);

  const handleComment = e => {
    const { value } = e.target;
    setInputComment(value);
  };

  const commentEnter = e => {
    if (e.key === 'Enter') addComment();
  };

  const addComment = () => {
    setComment(current => {
      const newList = [...current];
      const newComment = {
        id: newList.length + 1,
        name: 'kimCode',
        comment: inputComment,
      };
      newList.push(newComment);
      setInputComment('');
      return newList;
    });
  };

  return (
    <section>
      <article className="user_feed">
        <header>
          <section className="user_profile">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617198420518-e2b79c2cdbb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="user profile img"
              />
            </div>
            <em>kangheewon</em>
          </section>
          <i className="feed_handler fas fa-ellipsis-h fa-1x" />
        </header>
        <ul className="feed_imgs">
          <li>
            <img
              src="https://images.unsplash.com/photo-1633113212875-8ecf30ad2e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="feed_img1"
            />
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
          좋아요 <em>12,020개</em>
        </a>
        <section className="feed_desc_wrap">
          <div className="user_desc">
            <em>kangheewon</em>
            <span>hello world 🌏</span>
          </div>
          <a href="#!" className="more_comment">
            댓글 <b>{comment.length}개</b> 모두 보기
          </a>
          <ul className="comment_list">
            {comment.map((item, index) => {
              return <Comment key={index} commentItem={item} />;
            })}
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
    </section>
  );
}
