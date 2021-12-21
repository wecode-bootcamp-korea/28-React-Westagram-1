import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import RecommnadationList from './RecommendationList';

const Recommendation = () => {
  const recommadations = [
    {
      key: 0,
      avatarImage: './assets/yunkuk/image/recommend01.jpg',
      userName: 'suuuuul.p',
      recommandState: 'Instagram에 새로 가입했습니다',
    },
    {
      key: 1,
      avatarImage: './assets/yunkuk/image/recommend02.jpg',
      userName: 'h_sejin_',
      recommandState: '홍세진',
    },
    {
      key: 2,
      avatarImage: './assets/yunkuk/image/recommend03.jpg',
      userName: 'caffein4ddicted',
      recommandState: 'april__o6님 외 12명이 팔로우합니다',
    },
    {
      key: 3,
      avatarImage: './assets/yunkuk/image/avatar-default.jpg',
      userName: '_terryyomi',
      recommandState: 'king_sejong님 외 3명이 팔로우합니다',
    },
    {
      key: 4,
      avatarImage: './assets/yunkuk/image/avatar-default.jpg',
      userName: 'kkrubbingbbong',
      recommandState:
        '굉장히많은글자수가 팔로우를 하는데 넘어가는거는 일랩시스처리합니다',
    },
  ];

  return (
    <section className="recommendation">
      <header className="recommendation-title">
        <h3>회원님을 위한 추천</h3>
        <Link to="#">모두 보기</Link>
      </header>
      <ul className="recommendation-list">
        {recommadations.map(recommadation => {
          const { key, ...otherprops } = recommadation;
          return <RecommnadationList key={key} {...otherprops} />;
        })}
      </ul>
      <Footer />
    </section>
  );
};

export default Recommendation;
