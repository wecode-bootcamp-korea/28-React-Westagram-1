import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHome,
  faCompass,
  faPlus,
  faLocationArrow,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import SearchResultArrayComponent from './SearchResultArrayComponent';

export default function MainNavBar(props) {
  const [searchResultArr, setSearchResultArr] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [memberID] = useState([
    { id: 'wecode', desc: '>wecode | 위코드' },
    { id: 'westudy', desc: '>wecode | 위코드 스터디' },
    { id: 'KJH', desc: 'leit_motif' },
    { id: 'abcdefg', desc: 'alphabet' },
    { id: 'lovepet', desc: 'love_pet' },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    renderSearchResultArr();
  }, [searchInput]);

  const renderSearchResultArr = () => {
    if (searchInput.length > 2) {
      const result = memberID.filter(member =>
        member.id.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResultArr(result);
    } else {
      setSearchResultArr([]);
    }
  };

  const getSearchedResult = event => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const mainSearchInputFocusIn = event => {
    event.preventDefault();
    const searchIcon = document.querySelector('#searchIcon');
    const searchResultBox = document.querySelector('#searchResultBox');
    searchIcon.classList.add('hide');
    searchResultBox.classList.add('active');
    event.target.style.paddingLeft = '12px';
  };

  const mainSearchInputFocusOut = event => {
    event.preventDefault();
    const searchIcon = document.querySelector('#searchIcon');
    const searchResultBox = document.querySelector('#searchResultBox');
    searchIcon.classList.remove('hide');
    searchResultBox.classList.remove('active');
    event.target.style.paddingLeft = '30px';
  };

  const navGoMain = event => {
    event.preventDefault();
    navigate('/main-hyun');
  };

  const navDirectMessage = event => {
    event.preventDefault();
  };

  const navNewPost = event => {
    event.preventDefault();
  };

  const navTripFeeds = event => {
    event.preventDefault();
  };

  const navViewLikes = event => {
    event.preventDefault();
  };

  const navViewProfile = event => {
    event.preventDefault();
    const userToken = localStorage.getItem('token');
    fetch('https://westagram-signup.herokuapp.com/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'jwt is invalid') alert('토큰 정보 오류');
        else alert(result.username + '님 안녕하세요!');
      });
  };
  return (
    <article id="navContainer">
      <nav id="navRowBar">
        <header>
          <span onClick={navGoMain}>Westagram</span>
        </header>
        <section id="navRowBarSearch" className="active">
          <div id="navRowBarSearchInput">
            <FontAwesomeIcon icon={faSearch} id="searchIcon" />
            <input
              id="mainSearchInput"
              type="text"
              placeholder="검색"
              value={searchInput}
              onFocus={mainSearchInputFocusIn}
              onBlur={mainSearchInputFocusOut}
              onChange={getSearchedResult}
            />
          </div>
          <div id="searchResultBox">
            <div id="searchArrowDiv" />
            <div id="searchResult">
              <SearchResultArrayComponent searchResult={searchResultArr} />
            </div>
          </div>
        </section>
        <section id="navBtns">
          <div id="navBtnsBox">
            <section id="navBtnsArea">
              <FontAwesomeIcon
                icon={faHome}
                id="navBtnsAreaEach"
                onClick={navGoMain}
              />
              <FontAwesomeIcon
                icon={faLocationArrow}
                id="navBtnsAreaEach"
                onClick={navDirectMessage}
              />
              <FontAwesomeIcon
                icon={faPlus}
                id="navBtnsAreaEach"
                onClick={navNewPost}
              />
              <FontAwesomeIcon
                icon={faCompass}
                id="navBtnsAreaEach"
                onClick={navTripFeeds}
              />
              <FontAwesomeIcon
                icon={faHeart}
                id="navBtnsAreaEach"
                onClick={navViewLikes}
              />
              <div id="profileImg" onClick={navViewProfile} />
            </section>
            <section id="navBtnsFloatingBox">
              <div id="navBtnsArrowDiv" />
              <div id="navBtnsFloatingArea" />
            </section>
          </div>
        </section>
      </nav>
    </article>
  );
}
