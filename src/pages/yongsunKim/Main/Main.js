import React from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/index.scss';
import myImg from '../../../assets/images/myImg.jpeg';

// export default function Main(props) {
//   return <></>;
// }

export default function Main(props) {
  return (
    <>
      <main>
        <header>
          <nav>
            <div class="nav_wrap">
              <div class="logo_box">
                <h1 class="logo">Westagram</h1>
              </div>
              <div class="search_box">
                <input
                  type="text"
                  id="search"
                  class="fontawesome"
                  placeholder="&#xf002; 검색"
                />
              </div>
              <div class="icons_box">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
              </div>
            </div>
          </nav>
        </header>
        <div class="mainWrap">
          <section>
            <div class="story_box">
              <div class="story_wrap">
                <ul class="story">
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                  <li class="story_list">
                    <div class="story_border">
                      <img src={myImg} class="story_profile" alt="내 스토리" />
                      <a href="">아이디</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="post_box">
              <article>
                <div class="post_wrap">
                  <div class="post_header">
                    <div class="post_account">
                      <img src={myImg} class="post_profile" alt="프사" />
                      <a href="">rlaydtjs</a>
                    </div>
                    <button class="post_info">
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                  <div class="post_body">
                    <div class="post_photo_wrap">
                      <div class="post_photo_container">
                        <img src={myImg} class="post_photos" alt="사진1" />
                      </div>
                    </div>
                    <div class="post_footer">
                      <div class="post_icons_wrap">
                        <div class="post_icons_box1">
                          <button class="post_icons_btn">
                            <i class="far fa-heart"></i>
                          </button>
                          <button class="post_icons_btn">
                            <i class="far fa-comment"></i>
                          </button>
                          <button class="post_icons_btn">
                            <i class="far fa-paper-plane"></i>
                          </button>
                        </div>
                        <div class="post_icons_box2">
                          <button class="post_icons_btn">
                            <i class="far fa-bookmark"></i>
                          </button>
                        </div>
                      </div>
                      <div class="post_content_wrap">
                        <div class="post_likes">
                          <p>좋아요 2000개</p>
                        </div>
                        <div class="post_content">
                          <a href="">아이디</a>
                          <p>내용내용내용내용</p>
                          <a href="">아이디</a>
                          <p>내용내용내용내용</p>
                        </div>
                        <div class="post_reply">
                          <ul class="reply_wrap"></ul>
                        </div>
                        <div class="post_created_at">
                          <p>42분 전</p>
                        </div>
                      </div>
                      <div class="post_reply_wrap">
                        <textarea
                          placeholder="댓글 달기..."
                          class="write_reply"
                        ></textarea>
                        <button class="submit_reply" disabled>
                          게시
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div class="post_wrap">
                  <div class="post_header">
                    <div class="post_account">
                      <img src={myImg} class="post_profile" alt="프사" />
                      <a href="">rlaydtjs</a>
                    </div>
                    <button class="post_info">
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                  <div class="post_body">
                    <div class="post_photo_wrap">
                      <div class="post_photo_container">
                        <img src={myImg} class="post_photos" alt="사진1" />
                      </div>
                    </div>
                    <div class="post_footer">
                      <div class="post_icons_wrap">
                        <div class="post_icons_box1">
                          <button class="post_icons_btn">
                            <i class="far fa-heart"></i>
                          </button>
                          <button class="post_icons_btn">
                            <i class="far fa-comment"></i>
                          </button>
                          <button class="post_icons_btn">
                            <i class="far fa-paper-plane"></i>
                          </button>
                        </div>
                        <div class="post_icons_box2">
                          <button class="post_icons_btn">
                            <i class="far fa-bookmark"></i>
                          </button>
                        </div>
                      </div>
                      <div class="post_content_wrap">
                        <div class="post_likes">
                          <p>좋아요 2000개</p>
                        </div>
                        <div class="post_content">
                          <a href="">아이디</a>
                          <p>내용내용내용내용</p>
                          <a href="">아이디</a>
                          <p>내용내용내용내용</p>
                        </div>
                        <div class="post_reply">
                          <ul class="reply_wrap"></ul>
                        </div>
                        <div class="post_created_at">
                          <p>42분 전</p>
                        </div>
                      </div>
                      <div class="post_reply_wrap">
                        <textarea
                          placeholder="댓글 달기..."
                          class="write_reply"
                        ></textarea>
                        <button class="submit_reply" disabled>
                          게시
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div class="post_wrap">
                  <div class="post_header">
                    <div class="post_account">
                      <img src={myImg} class="post_profile" alt="프사" />
                      <a href="">rlaydtjs</a>
                    </div>
                    <button class="post_info">
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                  <div class="post_body">
                    <div class="post_photo_wrap">
                      <div class="post_photo_container">
                        <img src={myImg} class="post_photos" alt="사진1" />
                      </div>
                    </div>
                    <div class="post_footer">
                      <div class="post_icons_wrap">
                        <div class="post_icons_box1">
                          <button class="post_icons_btn">
                            <i class="far fa-heart"></i>
                          </button>
                          <button class="post_icons_btn">
                            <i class="far fa-comment"></i>
                          </button>
                          <button class="post_icons_btn">
                            <i class="far fa-paper-plane"></i>
                          </button>
                        </div>
                        <div class="post_icons_box2">
                          <button class="post_icons_btn">
                            <i class="far fa-bookmark"></i>
                          </button>
                        </div>
                      </div>
                      <div class="post_content_wrap">
                        <div class="post_likes">
                          <p>좋아요 2000개</p>
                        </div>
                        <div class="post_content">
                          <a href="">아이디</a>
                          <p>내용내용내용내용</p>
                          <a href="">아이디</a>
                          <p>내용내용내용내용</p>
                        </div>
                        <div class="post_reply">
                          <ul class="reply_wrap"></ul>
                        </div>
                        <div class="post_created_at">
                          <p>42분 전</p>
                        </div>
                      </div>
                      <div class="post_reply_wrap">
                        <textarea
                          placeholder="댓글 달기..."
                          class="write_reply"
                        ></textarea>
                        <button class="submit_reply" disabled>
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
            <div class="aside_wrap">
              <div class="aside_account">
                <div class="aside_profile story_old_border">
                  <img src={myImg} class="account_photo" alt="내 프로필" />
                </div>
                <div class="aside_id">
                  <p>rlaydtjs</p>
                  <p>기묭선</p>
                </div>
                <div>
                  <button class="change_account_btn">전환</button>
                </div>
              </div>

              <div class="aside_recommend">
                <div class="aside_recommend_header">
                  <span>회원님을 위한 추천</span>
                  <span>모두 보기</span>
                </div>
                <div class="aside_recommend_body">
                  <div class="aside_recommend_account">
                    <div class="recommend_profile">
                      <img
                        src={myImg}
                        class="recommend_photo"
                        alt="내 프로필"
                      />
                    </div>
                    <div class="recommend_id">
                      <a href="">아이디</a>
                      <p>회원님을 위한 추천</p>
                    </div>
                    <div>
                      <button class="change_account_btn follow_btn">
                        팔로우
                      </button>
                    </div>
                  </div>
                  <div class="aside_recommend_account">
                    <div class="recommend_profile">
                      <img
                        src={myImg}
                        class="recommend_photo"
                        alt="내 프로필"
                      />
                    </div>
                    <div class="recommend_id">
                      <a href="">아이디</a>
                      <p>회원님을 위한 추천</p>
                    </div>
                    <div>
                      <button class="change_account_btn follow_btn">
                        팔로우
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aside_recomment_footer">
                  <ul class="aside_tags">
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
                  <div class="copyright">
                    <p>© 2021 WESTAGRAM</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
