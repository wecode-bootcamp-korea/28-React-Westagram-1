import React, { useEffect, useState } from 'react';
import Feed from '../Feed/Feed';
import Story from '../Story/Story';

const MainLeft = () => {
  const DATA_URL = 'http://localhost:3000/dataYunkuk';
  const [feedContents, setfeedContents] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/feed.json`)
      .then(res => res.json())
      .then(data => setfeedContents(data));
  }, []);

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
