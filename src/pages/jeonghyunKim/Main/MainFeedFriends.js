import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function MainFeedFriends(props) {
  useEffect(() => {
    if (
      document.querySelector('#friendsFeedUl').scrollWidth ===
      document.querySelector('#friendsFeed').clientWidth
    ) {
      document.querySelector('#friendsFeedNext').style.visibility = 'hidden';
    }
  }, []);

  const friendsFeedScrollPrev = event => {
    event.preventDefault();
    const friendsFeedWidth = document.querySelector('#friendsFeed').clientWidth;
    const ulWidth = document.querySelector('#friendsFeedUl').scrollWidth;
    const scrollEndPos = ulWidth - friendsFeedWidth;
    document.querySelector('#friendsFeed').scrollLeft -= scrollEndPos * 0.6;
  };

  const friendsFeedScrollNext = event => {
    event.preventDefault();
    const friendsFeedWidth = document.querySelector('#friendsFeed').clientWidth;
    const ulWidth = document.querySelector('#friendsFeedUl').scrollWidth;
    const scrollEndPos = ulWidth - friendsFeedWidth;
    document.querySelector('#friendsFeed').scrollLeft += scrollEndPos * 0.6;
  };

  const friendsFeedScroll = event => {
    const ulWidth = document.querySelector('#friendsFeedUl').scrollWidth;
    const scrollEndPos = ulWidth - event.target.clientWidth;
    const scrollLeft = Math.floor(event.target.scrollLeft);
    const prevBtn = document.querySelector('#friendsFeedPrev');
    const nextBtn = document.querySelector('#friendsFeedNext');

    if (scrollLeft === 0) {
      prevBtn.style.visibility = 'hidden';
      nextBtn.style.visibility = 'visible';
    } else if (scrollLeft === scrollEndPos) {
      prevBtn.style.visibility = 'visible';
      nextBtn.style.visibility = 'hidden';
    } else if (scrollLeft > 0 && scrollLeft < scrollEndPos) {
      prevBtn.style.visibility = 'visible';
      nextBtn.style.visibility = 'visible';
    }
  };

  return (
    <>
      <section id="friendsFeed" onScroll={friendsFeedScroll}>
        <ul id="friendsFeedUl">
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends1</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends2</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
        </ul>
      </section>
      <section id="friendsFeedsBtnArea">
        <button id="friendsFeedPrev" onClick={friendsFeedScrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="friendsFeedNext" onClick={friendsFeedScrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </>
  );
}
