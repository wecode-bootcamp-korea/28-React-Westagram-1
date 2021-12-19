import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMyMenu from './NavMyMenu';

const Nav = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => setIsClick(!isClick);
  const myMenuButton = useRef();

  //TODO: 버그 발견 console을 찍어보면 여러개 찍힘 & document를 찍으면 click이 계속해서 true로 남아있음 기능 동작은 잘됨
  document.addEventListener('click', event => {
    if (!isClick) return;
    if (event.target !== myMenuButton.current) {
      setIsClick(false);
    }
  });

  return (
    <nav className="global-nav-bar">
      <div className="global-nav-wrapper">
        <Link to="#">
          <h1 className="logo">Westagram</h1>
        </Link>
        <div className="search-input-wrapper">
          <i className="ic-search" />
          <input type="text" placeholder="검색" />
        </div>
        <div className="user-action-group">
          <div className="user-action-item">
            <i className="far fa-compass" />
          </div>
          <div className="user-action-item is-new">
            <i className="far fa-heart" />
          </div>
          <div className="user-action-item my-menu">
            <button
              onClick={handleClick}
              type="button"
              className={`dropdown-button avatar avatar-26 ${
                isClick && 'is-active'
              }`}
            >
              <img
                src="./assets/yunkuk/image/yunkuk-avatar.jpg"
                alt="유저아바타"
                ref={myMenuButton}
              />
            </button>
            {isClick && <NavMyMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
