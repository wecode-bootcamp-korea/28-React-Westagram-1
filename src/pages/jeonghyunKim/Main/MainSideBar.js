import React, { useState, useEffect } from 'react';

import FetchData from '../config/fetchDataConfig.json';

import './styles/mainSidebar.scss';

export default function MainSideBar(props) {
  const [followData, setFollowData] = useState([]);

  useEffect(() => {
    fetch(FetchData.FETCH_FOLLOW_DATA)
      .then(res => res.json())
      .then(data => {
        setFollowData(data);
      });
  }, []);

  return (
    <article id="sideWrapper" className="active">
      <section id="sideContainer">
        <section id="profileSwap">
          <div id="profileSwapBox">
            <div id="profileImg" />
            <div id="profileInfo">
              <a href="#!">lIlIlIlI</a>
              <a href="#!">김정현</a>
            </div>
            <button id="profileSwapBtn">전환</button>
          </div>
        </section>
        <section id="recommendFriends">
          <div id="recommendTextBar">
            <span>회원님을 위한 추천</span>
            <a href="#!">모두 보기</a>
          </div>
          <div id="recommendFriendList">
            <ul>
              {followData.map((item, index) => {
                if (item.id <= 5) {
                  const followMessage =
                    item.followNumber > 0
                      ? `${item.userName}님 외 ${item.followNumber}명이 팔로우합니다.`
                      : '회원님을 팔로우합니다.';
                  return (
                    <li key={item.id} id="recommendFriendListTag">
                      <div
                        className="recommendFriendImg"
                        style={{
                          backgroundImage: `url(${item.imgPath})`,
                        }}
                      />
                      <div className="recommendFriendInfo">
                        <span className="recommendFriendID">
                          {item.userName}
                        </span>
                        <div className="followOrNot">{followMessage}</div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </section>
        <section id="sideFooter">
          <div className="sideFooterTextBar">
            <span className="sideFooterPartText">소개</span>
            <span className="sideFooterPartText">도움말</span>
            <span className="sideFooterPartText">홍보 센터</span>
            <span className="sideFooterPartText">API</span>
            <span className="sideFooterPartTextEnd">채용 정보</span>
          </div>
          <div className="sideFooterTextBar">
            <span className="sideFooterPartText">개인정보처리방침</span>
            <span className="sideFooterPartText">약관</span>
            <span className="sideFooterPartText">위치</span>
            <span className="sideFooterPartText">인기 계정</span>
            <span className="sideFooterPartText">해시태그</span>
            <span className="sideFooterPartTextEnd">언어</span>
          </div>
          <div id="sideFooterBottom">
            <span>© 2021 WESTAGRAM FROM KJH</span>
          </div>
        </section>
      </section>
    </article>
  );
}
