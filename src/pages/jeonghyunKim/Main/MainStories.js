import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function MainStories(props) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/storyData.json')
      .then(res => res.json())
      .then(data => {
        setStories(data);
      });
    const storyUl = document.querySelector('#storyUl');
    const storyBar = document.querySelector('#storyBar');
    if (storyUl.scrollWidth === storyBar.clientWidth) {
      document.querySelector('#storyNext').classList.remove('active');
    }
  }, []);

  const storyScrollPrev = event => {
    event.preventDefault();
    const storyBarWidth = document.querySelector('#storyBar').clientWidth;
    const storyUlWidth = document.querySelector('#storyUl').scrollWidth;
    const scrollEndLoc = storyUlWidth - storyBarWidth;
    document.querySelector('#storyBar').scrollLeft -= scrollEndLoc * 0.6;
  };

  const storyScrollNext = event => {
    event.preventDefault();
    const storyBarWidth = document.querySelector('#storyBar').clientWidth;
    const storyUlWidth = document.querySelector('#storyUl').scrollWidth;
    const scrollEndLoc = storyUlWidth - storyBarWidth;
    document.querySelector('#storyBar').scrollLeft += scrollEndLoc * 0.6;
  };

  const storyScroll = event => {
    const storyUlWidth = document.querySelector('#storyUl').scrollWidth;
    const { clientWidth, scrollLeft } = event.target;

    const targetScrollEndPos = storyUlWidth - clientWidth;
    const targetScrollLeft = Math.floor(scrollLeft);
    const prevBtn = document.querySelector('#storyPrev');
    const nextBtn = document.querySelector('#storyNext');

    if (targetScrollLeft === 0) {
      prevBtn.classList.remove('active');
      nextBtn.classList.add('active');
    } else if (targetScrollLeft >= targetScrollEndPos) {
      prevBtn.classList.add('active');
      nextBtn.classList.remove('active');
    } else if (targetScrollLeft > 0 && scrollLeft < targetScrollEndPos) {
      prevBtn.classList.add('active');
      nextBtn.classList.add('active');
    }
  };

  return (
    <>
      <section id="storyBar" onScroll={storyScroll}>
        <ul id="storyUl">
          {stories.map(item => {
            return (
              <li key={item.id}>
                <div id="storyImgBorder">
                  <div id="storyImg" />
                </div>
                <span>friends{item.id}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <section id="storyBtnArea">
        <button id="storyPrev" onClick={storyScrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="storyNext" className="active" onClick={storyScrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </>
  );
}
