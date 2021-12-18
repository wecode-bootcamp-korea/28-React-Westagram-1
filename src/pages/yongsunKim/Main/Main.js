import React from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/index.scss';
import myImg from '../../../assets/images/myImg.jpeg';
// Import {FontAwesomeIcon} from ""

// export default function Main(props) {
//   return <></>;
// }

export default function Main(props) {
  return (
    <main>
      <header>
        <nav>
          <div className="nav_wrap">
            <div className="logo_box">
              <h1 className="logo">Westagram</h1>
            </div>
            <div className="search_box">
              <input
                type="text"
                id="search"
                className="fontawesome"
                placeholder="&#xf002; 검색"
              />
            </div>
            <div className="icons_box">
              <i className="far fa-compass"></i>
              <i className="far fa-heart"></i>
              <i className="far fa-user"></i>
            </div>
          </div>
        </nav>
      </header>
      <div className="mainWrap">
        <section>
          <div className="story_box">
            <div className="story_wrap">
              <ul className="story">
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
                <li className="story_list">
                  <div className="story_border">
                    <img
                      src={myImg}
                      className="story_profile"
                      alt="내 스토리"
                    />
                    <a>아이디</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="post_box">
            <article>
              <div className="post_wrap">
                <div className="post_header">
                  <div className="post_account">
                    <img src={myImg} className="post_profile" alt="프사" />
                    <a>rlaydtjs</a>
                  </div>
                  <button className="post_info">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <div className="post_body">
                  <div className="post_photo_wrap">
                    <div className="post_photo_container">
                      <img src={myImg} className="post_photos" alt="사진1" />
                    </div>
                  </div>
                  <div className="post_footer">
                    <div className="post_icons_wrap">
                      <div className="post_icons_box1">
                        <button className="post_icons_btn">
                          <i className="far fa-heart"></i>
                        </button>
                        <button className="post_icons_btn">
                          <i className="far fa-comment"></i>
                        </button>
                        <button className="post_icons_btn">
                          <i className="far fa-paper-plane"></i>
                        </button>
                      </div>
                      <div className="post_icons_box2">
                        <button className="post_icons_btn">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                    <div className="post_content_wrap">
                      <div className="post_likes">
                        <p>좋아요 2000개</p>
                      </div>
                      <div className="post_content">
                        <a>아이디</a>
                        <p>내용내용내용내용</p>
                        <a>아이디</a>
                        <p>내용내용내용내용</p>
                      </div>
                      <div className="post_reply">
                        <ul className="reply_wrap" />
                      </div>
                      <div className="post_created_at">
                        <p>42분 전</p>
                      </div>
                    </div>
                    <div className="post_reply_wrap">
                      <textarea
                        placeholder="댓글 달기..."
                        className="write_reply"
                      />
                      <button className="submit_reply" disabled>
                        게시
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="post_wrap">
                <div className="post_header">
                  <div className="post_account">
                    <img src={myImg} className="post_profile" alt="프사" />
                    <a>rlaydtjs</a>
                  </div>
                  <button className="post_info">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <div className="post_body">
                  <div className="post_photo_wrap">
                    <div className="post_photo_container">
                      <img src={myImg} className="post_photos" alt="사진1" />
                    </div>
                  </div>
                  <div className="post_footer">
                    <div className="post_icons_wrap">
                      <div className="post_icons_box1">
                        <button className="post_icons_btn">
                          <i className="far fa-heart"></i>
                        </button>
                        <button className="post_icons_btn">
                          <i className="far fa-comment"></i>
                        </button>
                        <button className="post_icons_btn">
                          <i className="far fa-paper-plane"></i>
                        </button>
                      </div>
                      <div className="post_icons_box2">
                        <button className="post_icons_btn">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                    <div className="post_content_wrap">
                      <div className="post_likes">
                        <p>좋아요 2000개</p>
                      </div>
                      <div className="post_content">
                        <a>아이디</a>
                        <p>내용내용내용내용</p>
                        <a>아이디</a>
                        <p>내용내용내용내용</p>
                      </div>
                      <div className="post_reply">
                        <ul className="reply_wrap" />
                      </div>
                      <div className="post_created_at">
                        <p>42분 전</p>
                      </div>
                    </div>
                    <div className="post_reply_wrap">
                      <textarea
                        placeholder="댓글 달기..."
                        className="write_reply"
                      />
                      <button className="submit_reply" disabled>
                        게시
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="post_wrap">
                <div className="post_header">
                  <div className="post_account">
                    <img src={myImg} className="post_profile" alt="프사" />
                    <a>rlaydtjs</a>
                  </div>
                  <button className="post_info">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
                <div className="post_body">
                  <div className="post_photo_wrap">
                    <div className="post_photo_container">
                      <img src={myImg} className="post_photos" alt="사진1" />
                    </div>
                  </div>
                  <div className="post_footer">
                    <div className="post_icons_wrap">
                      <div className="post_icons_box1">
                        <button className="post_icons_btn">
                          <i className="far fa-heart"></i>
                        </button>
                        <button className="post_icons_btn">
                          <i className="far fa-comment"></i>
                        </button>
                        <button className="post_icons_btn">
                          <i className="far fa-paper-plane"></i>
                        </button>
                      </div>
                      <div className="post_icons_box2">
                        <button className="post_icons_btn">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                    <div className="post_content_wrap">
                      <div className="post_likes">
                        <p>좋아요 2000개</p>
                      </div>
                      <div className="post_content">
                        <a>아이디</a>
                        <p>내용내용내용내용</p>
                        <a>아이디</a>
                        <p>내용내용내용내용</p>
                      </div>
                      <div className="post_reply">
                        <ul className="reply_wrap" />
                      </div>
                      <div className="post_created_at">
                        <p>42분 전</p>
                      </div>
                    </div>
                    <div className="post_reply_wrap">
                      <textarea
                        placeholder="댓글 달기..."
                        className="write_reply"
                      />
                      <button className="submit_reply" disabled>
                        게시
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <aside>
          <div className="aside_wrap">
            <div className="aside_account">
              <div className="aside_profile story_old_border">
                <img src={myImg} className="account_photo" alt="내 프로필" />
              </div>
              <div className="aside_id">
                <p>rlaydtjs</p>
                <p>기묭선</p>
              </div>
              <div>
                <button className="change_account_btn">전환</button>
              </div>
            </div>

            <div className="aside_recommend">
              <div className="aside_recommend_header">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className="aside_recommend_body">
                <div className="aside_recommend_account">
                  <div className="recommend_profile">
                    <img
                      src={myImg}
                      className="recommend_photo"
                      alt="내 프로필"
                    />
                  </div>
                  <div className="recommend_id">
                    <a>아이디</a>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <div>
                    <button className="change_account_btn follow_btn">
                      팔로우
                    </button>
                  </div>
                </div>
                <div className="aside_recommend_account">
                  <div className="recommend_profile">
                    <img
                      src={myImg}
                      className="recommend_photo"
                      alt="내 프로필"
                    />
                  </div>
                  <div className="recommend_id">
                    <a>아이디</a>
                    <p>회원님을 위한 추천</p>
                  </div>
                  <div>
                    <button className="change_account_btn follow_btn">
                      팔로우
                    </button>
                  </div>
                </div>
              </div>
              <div className="aside_recomment_footer">
                <ul className="aside_tags">
                  <li>
                    <a>소개</a>
                  </li>
                  <li>
                    <a>도움말</a>
                  </li>
                  <li>
                    <a>홍보 센터</a>
                  </li>
                  <li>
                    <a>API</a>
                  </li>
                  <li>
                    <a>채용 정보</a>
                  </li>
                  <li>
                    <a>개인정보처리방침</a>
                  </li>
                  <li>
                    <a>약관</a>
                  </li>
                  <li>
                    <a>위치</a>
                  </li>
                  <li>
                    <a>인기 계정</a>
                  </li>
                  <li>
                    <a>해시태그</a>
                  </li>
                  <li>
                    <a>언어</a>
                  </li>
                </ul>
                <div className="copyright">
                  <p>© 2021 WESTAGRAM</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
