import React from 'react';

function StoryList(props) {
  const { userName, imageUrl, isNew } = props;
  return (
    <li className="story-item">
      <div className={`avatar-wrapper-66 ${isNew && 'is-story-new'}`}>
        <div className="avatar avatar-56 is-story">
          <img src={imageUrl} alt={`${userName} 님의 스토리`} />
        </div>
      </div>
      <span className="user-id"> {userName} </span>
    </li>
  );
}

export default StoryList;
