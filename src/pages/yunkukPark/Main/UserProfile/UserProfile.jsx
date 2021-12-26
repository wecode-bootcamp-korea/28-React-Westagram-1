import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <section className="user-profile">
      <div className="avatar-wrapper-66 is-user-profile">
        <div className="avatar avatar-56">
          <Link to="#">
            <img
              src="./assets/yunkuk/image/yunkuk-avatar.jpg"
              alt="유저아바타"
            />
          </Link>
        </div>
      </div>

      <div className="user-info">
        <strong>
          <Link to="#"> seha_park._._ </Link>
        </strong>
        <span>박윤국 || 박세하</span>
      </div>
      <button className="button-primary" type="button">
        전환
      </button>
    </section>
  );
};

export default UserProfile;
