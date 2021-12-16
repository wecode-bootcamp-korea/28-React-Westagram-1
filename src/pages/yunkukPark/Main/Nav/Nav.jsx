import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
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
            <i class="far fa-compass" />
          </div>
          <div className="user-action-item is-new">
            <i className="far fa-heart" />
          </div>
          <div className="user-action-item my-menu">
            <button type="button" className="dropdown-button avatar avatar-26">
              <img
                src="./assets/yunkuk/image/yunkuk-avatar.jpg"
                alt="유저아바타"
              />
            </button>

            <div className="my-menu-content">
              <ul className="my-menu-list">
                <li className="my-menu-item">
                  <i className="far fa-user-circle" />
                  <Link to="#">프로필</Link>
                </li>
                <li className="my-menu-item">
                  <i className="far fa-bookmark" />
                  <Link to="#">저장됨</Link>
                </li>
                <li className="my-menu-item">
                  <i className="fas fa-cog" />
                  <Link to="#">설정</Link>
                </li>
                <li className="my-menu-item">
                  <button type="button">로그아웃</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
