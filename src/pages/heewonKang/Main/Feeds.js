import { useState, useEffect } from 'react';
import Feed from './Feed';

export default function Feeds() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dataHeewon/FeedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <section>
      {feedList.map(item => (
        <Feed key={item.feedId} feedInfo={item} />
      ))}
    </section>
  );
}
