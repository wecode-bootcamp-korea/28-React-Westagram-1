import React from 'react';
import Feed from '../Feed/Feed';
import Story from '../Story/Story';

const MainLeft = () => {
  const feedContents = [
    {
      feedId: 0,
      userName: 'seha_park._.',
      userAvatar: './assets/yunkuk/image/yunkuk-avatar.jpg',
      feedImg: './assets/yunkuk/image/feedImage1.jpeg',
      content: '맛있다 💪🏻',
      likeHit: 123,
    },
    {
      feedId: 1,
      userName: 'ctrsound',
      userAvatar: './assets/yunkuk/image/storyImage06.jpg',
      feedImg: './assets/yunkuk/image/feedImage02.jpg',
      content: `[오늘의 난 미지근하게 축제] 음반 판매 오픈! 🎉`,
      likeHit: 142,
    },
  ];
  return (
    <div className="main-left">
      <Story />
      {feedContents.map(feedContent => {
        const { feedId, ...otherProps } = feedContent;
        return <Feed key={feedId} {...otherProps} />;
      })}
    </div>
  );
};

export default MainLeft;
