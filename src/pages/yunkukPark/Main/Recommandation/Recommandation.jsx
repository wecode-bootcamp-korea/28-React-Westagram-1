import React from 'react';
import Footer from '../Footer/Footer';

const Recommandation = () => {
  return (
    <section className="recommendation">
      <header className="recommendation-title">
        <h3>회원님을 위한 추천</h3>
        <a href="#">모두 보기</a>
      </header>
      <ul className="recommendation-list">
        <li className="recommendation-item">
          <div className="avatar avatar-32">
            <a href="#">
              <img
                src="./assets/yunkuk/image/recommend03.jpg"
                alt="유저아바타"
              />
            </a>
          </div>
          <div className="user-info">
            <strong>
              <a href="#">suuuuul.p</a>
            </strong>
            <span>Instagram에 새로 가입했습니다</span>
          </div>
          <button className="button-primary" type="button">
            팔로우
          </button>
        </li>
        <li className="recommendation-item">
          <div className="avatar avatar-32">
            <a href="#">
              <img
                src="./assets/yunkuk/image/recommend01.jpg"
                alt="유저아바타"
              />
            </a>
          </div>
          <div className="user-info">
            <strong>
              <a href="#">h_sej1n_</a>
            </strong>
            <span>홍세진</span>
          </div>
          <button className="button-primary" type="button">
            팔로우
          </button>
        </li>
        <li className="recommendation-item">
          <div className="avatar avatar-32">
            <a href="#">
              <img
                src="./assets/yunkuk/image/recommend02.jpg"
                alt="유저아바타"
              />
            </a>
          </div>
          <div className="user-info">
            <strong>
              <a href="#">caffein4ddicted</a>
            </strong>
            <span>april__o6님 외 12명이 팔로우합니다</span>
          </div>
          <button className="button-primary" type="button">
            팔로우
          </button>
        </li>
        <li className="recommendation-item">
          <div className="avatar avatar-32">
            <a href="#">
              <img
                src="./assets/yunkuk/image/yunkuk-avatar.jpg"
                alt="유저아바타"
              />
            </a>
          </div>
          <div className="user-info">
            <strong>
              <a href="#">_terryyomi</a>
            </strong>
            <span>king_sejong님 외 3명이 팔로우합니다</span>
          </div>
          <button className="button-primary" type="button">
            팔로우
          </button>
        </li>
        <li className="recommendation-item">
          <div className="avatar avatar-32">
            <a href="#">
              <img
                src="./assets/yunkuk/image/storyImage03.jpg"
                alt="유저아바타"
              />
            </a>
          </div>
          <div className="user-info">
            <strong>
              <a href="#">kkrubbingbbong</a>
            </strong>
            <span>
              굉장히많은글자수가 팔로우를 하는데 넘어가는거는 일랩시스처리합니다
            </span>
          </div>
          <button className="button-primary" type="button">
            팔로우
          </button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Recommandation;
