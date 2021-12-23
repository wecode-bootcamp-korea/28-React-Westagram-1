import React, { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationArrow,
  faHeart,
  faCircle,
  faComment,
  faStickyNote,
  faEllipsisH,
  faSmile,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import FeedCommentComponent from './FeedCommentComponent';

export default function FeedComponent({ feedItem }) {
  const [inputComment, setInputComment] = useState();
  const [submitBtnStatus, setSubmitBtnStatus] = useState(true);
  const [commentData, setCommentData] = useState([]);
  const [viewAllCommentFlag, setViewAllCommentFlag] = useState(false);
  const [feedImgPaths] = useState(feedItem.feedImgPaths.split(','));
  const [imgPosition, setImgPosition] = useState(0);

  const contentsCommentBodyRef = useRef();

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentData(data);
      });
  }, []);

  const onChangeFeedComment = event => {
    event.preventDefault();
    const { value } = event.target;
    setInputComment(value);
    value.length > 0 ? setSubmitBtnStatus(false) : setSubmitBtnStatus(true);
  };

  const enterFeedComment = event => {
    if (event.key === 'Enter') {
      addFeedComment(event);
    }
  };

  const addFeedComment = event => {
    event.preventDefault();

    let inputCommentReplace = inputComment.replace(/\n/g, '');

    if (inputCommentReplace.length) {
      setCommentData(current => {
        const newComment = {
          id: commentData.length + 1,
          userName: 'test1',
          content: inputCommentReplace,
          isLiked: false,
        };
        const newList = [...current, newComment];
        return newList;
      });
    }

    setInputComment('');
    setSubmitBtnStatus(true);
  };

  const viewAllComments = () => {
    setViewAllCommentFlag(true);
  };

  const hideComments = () => {
    setViewAllCommentFlag(false);
  };

  const moveImg = event => {
    event.preventDefault();
    const {
      target: { name },
    } = event;
    switch (name) {
      case 'imgLeftBtn':
        imgPosition > 0 ? setImgPosition(imgPosition - 1) : setImgPosition(0);
        break;
      case 'imgRightBtn':
        imgPosition <= feedImgPaths.length - 2
          ? setImgPosition(imgPosition + 1)
          : setImgPosition(feedImgPaths.length - 1);
        break;
      default:
    }
  };

  const extendFeedContent = event => {
    contentsCommentBodyRef.current.classList.add('active');
    event.target.style.display = 'none';
  };

  return (
    <section id="feeds">
      <header id="feedProfile">
        <div id="feedProfileInfo">
          <div id="feedProfileImg" />
          <div id="feedProfileDetail">
            <a href="#!">{feedItem.userName}</a>
            <a href="#!">{feedItem.userLocation}</a>
          </div>
        </div>
        <div id="feedProfileBtn">
          <a href="#!">
            <FontAwesomeIcon icon={faEllipsisH} />
          </a>
        </div>
      </header>
      <section id="feedImgContainer">
        <section id="feedImg">
          <ul>
            {feedImgPaths.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{ transform: `translateX(-${imgPosition * 605}px)` }}
                >
                  <img src={item} alt="dummyImage" />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="feedImgBtns">
          <button name="imgLeftBtn" onClick={moveImg}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ pointerEvents: 'none' }}
            />
          </button>
          <button name="imgRightBtn" onClick={moveImg}>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ pointerEvents: 'none' }}
            />
          </button>
        </section>
        <section id="feedImgDot">
          {feedImgPaths.map((item, index) => {
            const activeDot = index === imgPosition ? 'active' : null;

            return (
              <div className={`feedImgLengthDot ${activeDot}`} key={index}>
                <FontAwesomeIcon id="faCircle" icon={faCircle} />
              </div>
            );
          })}
        </section>
      </section>
      <section id="feedBtns">
        <div id="feedOptionBtns">
          <FontAwesomeIcon id="feedOptionBtnEach" icon={faHeart} />
          <FontAwesomeIcon id="feedOptionBtnEach" icon={faComment} />
          <FontAwesomeIcon id="feedOptionBtnEach" icon={faLocationArrow} />
        </div>
        <div id="feedScrapBtn">
          <FontAwesomeIcon id="feedOptionScrapBtn" icon={faStickyNote} />
        </div>
      </section>
      <section id="feedLikes">
        <div id="feedLikesImg" />
        <div id="feedLikesImg" />
        <div id="feedLikesCount">
          <span id="feedLikesCountBold">kjh_</span>님{' '}
          <span id="feedLikesCountBold">외 n명</span>이 좋아합니다.
        </div>
      </section>
      <section id="feedContents">
        <div id="feedContentsBox">
          <span id="feedContentsComment">
            <span id="feedContentsBold">{feedItem.userName}</span>
            <span id="feedContentsCommentBody" ref={contentsCommentBodyRef}>
              {feedItem.feedComment}
            </span>
          </span>
          <button id="feedExtendContents" onClick={extendFeedContent}>
            {feedItem.feedComment.length > 5 ? '더 보기' : null}
          </button>
        </div>
      </section>
      <section id="feedComments">
        <div id="feedCommentsBox">
          {commentData.length < 3 ? null : viewAllCommentFlag ? (
            <div className="feedCommentsViewHideBtn" onClick={hideComments}>
              Hide Comments
            </div>
          ) : (
            <div className="feedCommentsViewHideBtn" onClick={viewAllComments}>
              View All Comments
            </div>
          )}
          {commentData
            .filter(function (element) {
              return viewAllCommentFlag
                ? element.id >= 0
                : element.id >= commentData.length - 1;
            })
            .map((item, index) => {
              return (
                <FeedCommentComponent
                  id={feedItem.id}
                  key={index}
                  commentKey={item.id}
                  commentEach={item}
                  commentData={commentData}
                  setCommentData={setCommentData}
                />
              );
            })}
        </div>
      </section>
      <section id="feedContentsTime">
        <div id="feedContentsTimeBox">
          <span>1시간 전</span>
        </div>
      </section>
      <section id="inputComments">
        <div id="inputCommentsBox">
          <div id="inputCommentsEmojiBtn">
            <FontAwesomeIcon id="inputCommentsEmojiSmile" icon={faSmile} />
          </div>
          <div id="inputCommentsType">
            <textarea
              id="inputCommentsTextarea"
              placeholder="댓글 달기..."
              onChange={onChangeFeedComment}
              onKeyPress={enterFeedComment}
              value={inputComment}
            />
          </div>
          <div id="inputCommentsSubmit">
            <button
              id="inputCommentsSubmitBtn"
              onClick={addFeedComment}
              disabled={submitBtnStatus}
            >
              게시
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
