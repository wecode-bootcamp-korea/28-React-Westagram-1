import React from 'react';

const UserProfile = () => {
  return (
    <section className="user-profile">
      <div className="avatar-wrapper-66 is-user-profile">
        <div className="avatar avatar-56">
          <a href="#">
            <img
              src="./assets/yunkuk/image/yunkuk-avatar.jpg"
              alt="유저아바타"
            />
          </a>
        </div>
      </div>

      <div className="user-info">
        <strong>
          <a href="#"> seha_park._._ </a>
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
