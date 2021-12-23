import React, { useState, useEffect } from 'react';

import MainNavBar from './MainNavBar';
import MainStories from './MainStories';
import FeedComponent from './FeedComponent';
import MainSideBar from './MainSideBar';

import FetchData from '../config/fetchDataConfig.json';
import './styles/main.scss';

function Main(props) {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch(FetchData.FETCH_FEED_DATA, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedData(data);
      });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const sideWrapper = document.querySelector('#sideWrapper');
    const bodyContainer = document.querySelector('#bodyContainer');
    const searchBar = document.querySelector('#navRowBarSearch');

    if (window.innerWidth <= 627) {
      searchBar.classList.remove('active');
    } else {
      searchBar.classList.add('active');
      bodyContainer.classList.remove('reduce');

      if (window.innerWidth <= 1001 && window.innerWidth > 690) {
        sideWrapper.classList.remove('active');
        bodyContainer.classList.add('reduce');
        bodyContainer.classList.remove('minimum');
      } else if (window.innerWidth <= 690) {
        bodyContainer.classList.remove('reduce');
        bodyContainer.classList.add('minimum');
      } else {
        sideWrapper.classList.add('active');
      }
    }
  };
  return (
    <main id="mainContainer">
      <MainNavBar />
      <article id="bodyContainer">
        <article id="feedContainer">
          <MainStories />
          {feedData.map(item => {
            return <FeedComponent key={item.userName} feedItem={item} />;
          })}
        </article>
        <MainSideBar />
      </article>
    </main>
  );
}

export default Main;
