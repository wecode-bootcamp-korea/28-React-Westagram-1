import React from 'react';

export default function MainSideBar(props) {
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
              <li id="recommendFriendListTag">
                <div className="recommendFriendImg" />
                <div className="recommendFriendInfo">
                  <span className="recommendFriendID">friends1</span>
                  <div className="followOrNot">
                    abcdefghijklmnop님 외 n명이 팔로우합니다.
                  </div>
                </div>
              </li>
              <li id="recommendFriendListTag">
                <div className="recommendFriendImg" />
                <div className="recommendFriendInfo">
                  <span className="recommendFriendID">friends2</span>
                  <div className="followOrNot">회원님을 팔로우합니다.</div>
                </div>
              </li>
              <li id="recommendFriendListTag">
                <div className="recommendFriendImg" />
                <div className="recommendFriendInfo">
                  <span className="recommendFriendID">friends3</span>
                  <div className="followOrNot">
                    strong_strawberry님 외 n명이 팔로우합니다.
                  </div>
                </div>
              </li>
              <li id="recommendFriendListTag">
                <div className="recommendFriendImg" />
                <div className="recommendFriendInfo">
                  <span className="recommendFriendID">friends4</span>
                  <div className="followOrNot">회원님을 팔로우합니다.</div>
                </div>
              </li>
              <li id="recommendFriendListTag">
                <div className="recommendFriendImg" />
                <div className="recommendFriendInfo">
                  <span className="recommendFriendID">friends5</span>
                  <div className="followOrNot">회원님을 팔로우합니다.</div>
                </div>
              </li>
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
