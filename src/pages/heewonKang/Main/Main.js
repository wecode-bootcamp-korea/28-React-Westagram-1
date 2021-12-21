import { useState } from 'react';
import NavWon from '../Nav-won';
import './Main.scss';

import Comment from './Comment';

export default function Main(props) {
  const [inputComment, setInputComment] = useState('');
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
    <div id="container">
      <NavWon />
      <main>
        <div className="main_wrap">
          <section className="feed_wrap">
            <div className="users_story">
              <div className="users_story_content">
                <div>
                  <div className="arrows">
                    <i className="fas fa-chevron-left" />
                    <i className="fas fa-chevron-right" />
                  </div>
                  <ul className="story">
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>kangheewon</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>kangminhee</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                    <li>
                      <div>
                        <img
                          className="circle_profile_img"
                          src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                          alt="story_user_profile_img"
                        />
                      </div>
                      <em>dlwlrma_</em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                    댓글 <b>120개</b> 모두 보기
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
                  <button className="post_comment_btn" onClick={addComment}>
                    게시
                  </button>
                </section>
              </article>
            </section>
          </section>
          <aside className="recommend_aside">
            <div id="my_profile">
              <div className="profile_img">
                <img
                  src="https://images.unsplash.com/photo-1617198420518-e2b79c2cdbb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="user profile img"
                />
              </div>
              <div className="my_info">
                <em>kangheewon</em>
                <span>후론트라라라 👩🏻‍💻</span>
              </div>
              <button className="my_transform">전환</button>
            </div>
            <section className="recommend_me">
              <div className="title">
                <h4>회원님을 위한 추천</h4>
                <button>모두 보기</button>
              </div>
              <ul className="users_list">
                <li>
                  <div className="recommend_user_img">
                    <img
                      className="circle_profile_img"
                      src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                      alt="recommend_user_profile_img"
                    />
                  </div>
                  <div className="recommend_user_title">
                    <em>allabout_jungmin</em>
                    <span className="recommand_desc">회원님을 위한 추천</span>
                  </div>
                  <button>팔로우</button>
                </li>
                <li>
                  <div className="recommend_user_img">
                    <img
                      className="circle_profile_img"
                      src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                      alt="recommend_user_profile_img"
                    />
                  </div>
                  <div className="recommend_user_title">
                    <em>memo04.50</em>
                    <span className="recommand_desc">
                      dlwlrma님 외 1명이 팔로우합니다
                    </span>
                  </div>
                  <button>팔로우</button>
                </li>
                <li>
                  <div className="recommend_user_img">
                    <img
                      className="circle_profile_img"
                      src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                      alt="recommend_user_profile_img"
                    />
                  </div>
                  <div className="recommend_user_title">
                    <em>meaning_0</em>
                    <span className="recommand_desc">
                      adulkid님 외 1명이 팔로우합니다
                    </span>
                  </div>
                  <button>팔로우</button>
                </li>
                <li>
                  <div className="recommend_user_img">
                    <img
                      className="circle_profile_img"
                      src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                      alt="recommend_user_profile_img"
                    />
                  </div>
                  <div className="recommend_user_title">
                    <em>iilihelloili</em>
                    <span className="recommand_desc">WEstagram 신규 가입</span>
                  </div>
                  <button>팔로우</button>
                </li>
              </ul>
            </section>
            <footer>
              <div className="footer_link_list">
                <a href="#!">소개</a>
                <a href="#!">도움말</a>
                <a href="#!">홍보 센터</a>
                <a href="#!">API</a>
                <a href="#!">채용 정보</a>
                <a href="#!">개인정보처리방침</a>
                <a href="#!">약관</a>
                <a href="#!">위치</a>
                <a href="#!">인기 계정</a>
                <a href="#!">해시태그</a>
                <a href="#!">언어</a>
              </div>
              <address>© 2021 WESTAGRAM FROM WETA</address>
            </footer>
          </aside>
        </div>
      </main>
    </div>
  );
}
