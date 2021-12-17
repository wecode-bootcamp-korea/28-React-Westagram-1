import React from 'react';
import { Link } from 'react-router-dom';

function NavMyMenu(props) {
  return (
    <>
      <div className="my-menu-layer" />
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
    </>
  );
}

export default NavMyMenu;
