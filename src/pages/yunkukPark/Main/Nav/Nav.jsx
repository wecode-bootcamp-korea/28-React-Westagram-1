import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMyMenu from './NavMyMenu';

const Nav = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => setIsClick(!isClick);
  const myMenuButton = useRef();

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
            {isClick && (
              <NavMyMenu
                isClick={isClick}
                myMenuButton={myMenuButton}
                setIsClick={setIsClick}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
