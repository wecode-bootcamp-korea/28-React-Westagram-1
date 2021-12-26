import React, { useEffect, useState } from 'react';
import Feed from '../Feed/Feed';
import Story from '../Story/Story';

const DATA_URL = 'http://localhost:3000/dataYunkuk';

const MainLeft = () => {
  const [feedContents, setFeedContents] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/feed.json`)
      .then(res => res.json())
      .then(data => setFeedContents(data));
  }, []);

  return (
    <div className="main-left">
      <Story />
      {feedContents.map(({ feedId, ...feedContent }) => (
        <Feed key={feedId} {...feedContent} />
      ))}
    </div>
  );
};

export default MainLeft;
