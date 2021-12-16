import React from 'react';
import Feed from '../Feed/Feed';
import Story from '../Story/Story';

const MainLeft = () => {
  return (
    <div className="main-left">
      <Story />
      <Feed />
    </div>
  );
};

export default MainLeft;
