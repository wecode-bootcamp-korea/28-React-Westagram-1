import React from 'react';
import StoryList from './StoryList';

const Story = () => {
  const storyItems = [
    {
      key: 1,
      userId: 'poclanos',
      imageUrl: './assets/yunkuk/image/storyImage01.jpg',
      isNew: true,
    },
    {
      key: 2,
      userId: 'hyucki2000',
      imageUrl: './assets/yunkuk/image/storyImage02.jpg',
      isNew: true,
    },
    {
      key: 3,
      userId: 'longlonglonglonglong',
      imageUrl: './assets/yunkuk/image/storyImage03.jpg',
      isNew: true,
    },
    {
      key: 4,
      userId: '2onic',
      imageUrl: './assets/yunkuk/image/storyImage04.jpg',
      isNew: true,
    },
    {
      key: 5,
      userId: '2f_art_museum',
      imageUrl: './assets/yunkuk/image/storyImage05.jpg',
      isNew: false,
    },
    {
      key: 6,
      userId: 'ctrsound',
      imageUrl: './assets/yunkuk/image/storyImage06.jpg',
      isNew: false,
    },
    {
      key: 7,
      userId: 'dlwlrma',
      imageUrl: './assets/yunkuk/image/storyImage07.jpg',
      isNew: false,
    },
    {
      key: 8,
      userId: 'knock_out',
      imageUrl: './assets/yunkuk/image/avatar-default.jpg',
      isNew: false,
    },
  ];

  return (
    <div className="story-wrapper">
      <ul className="story-list">
        {storyItems.map(storyItem => {
          return <StoryList {...storyItem} />;
        })}
      </ul>
    </div>
  );
};

export default Story;
