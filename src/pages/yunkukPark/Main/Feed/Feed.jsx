import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Feed = () => {
  const feedContents = [
    {
      feedId: 0,
      userName: 'seha_park._.',
      feedImg: './assets/yunkuk/image/feedImage1.jpeg',
      content: '가가가가가가가가가가가가가',
    },
    {
      feedId: 1,
      userName: 'ctrsound',
      feedImg: './assets/yunkuk/image/feedImage02.jpg',
      content: `<span>최고은 새 앨범 <br>[오늘의 난 미지근하게 축제] 음반 판매 오픈! 🎉<br><br>최고은의 새 앨범 '오늘의 난 미지근하게 축제' 실물 음반 판매가 시작되었습니다. 이번 음반은 단순 음원뿐만 아니라 에세이와 영상까지 합해진 '뮤키디오 𝙈𝙪𝙤𝙤𝙠𝙞𝙙𝙚𝙤 (music + book + video)' 형식으로 제작이 되었다고 하는데요. 수작업 방식으로 제작되어 특별함까지 더했다고 합니다❗️<br>이번 음반을 통해서만 지난 6월 전시된 reAL II의 라이브 클립을 감상하실 수 있어요. 엄청난 소장가치 💯<br>실물 음반에 포함된 책갈피에는 앨범을 감상하며 아침 숲🌳을 걷는 기분을 느낄 수 있도록 '우정스러움'과 맞닿는 향이 묻어있다고 합니다 💧 이 또한 이번 앨범을 위해 특별히 조향된 것이라고 하네요!<br>선착순 50분께는 싱어송라이터 최고은과 김소연 시인의 친필싸인본을 보내드리니 절대 놓치지 마세요 🧚‍♀️<br><br>▫️[앨범구매]<br>𝙂𝙤𝙣𝙣𝙚 𝘾𝙝𝙤𝙞 굿즈샵 : https://m.smartstore.naver.com/iamgonne (또는 프로필링크트리 ’𝙂𝙤𝙣𝙣𝙚 𝘾𝙝𝙤𝙞 굿즈샵’) **최고은&amp;김소연 싸인본 (50장 한정)<br><br>디자인 _ <a class="notranslate" href="/77pattern/" tabindex="0">@77pattern</a><br><br><a class=" xil3i" href="/explore/tags/오늘의난미지근하게축제/" tabindex="0">#오늘의난미지근하게축제</a> <a class=" xil3i" href="/explore/tags/최고은/" tabindex="0">#최고은</a> x <a class=" xil3i" href="/explore/tags/김소연/" tabindex="0">#김소연</a> <a class=" xil3i" href="/explore/tags/뮤키디오/" tabindex="0">#뮤키디오</a> <a class=" xil3i" href="/explore/tags/muookideo/" tabindex="0">#muookideo</a></span>`,
    },
    {
      feedId: 2,
      userName: 'ekekejuocx',
      feedImg: 'images/ksh/feed3.jpg',
      content: '다다다다다다다다다다다다',
    },
    {
      feedId: 3,
      userName: 'soso23',
      feedImg: 'images/ksh/rabbitCat.jpg',
      content: '라라라라라라라라라라라라라',
    },
  ];

  const [likeInfo, setLikeInfo] = useState({
    hit: 100,
    class: 'far fa-heart',
    animate: '',
  });
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
    updateLikeHit();
  };

  const updateLikeHit = () => {
    let myLikeInfo = { ...likeInfo };

    if (!like) {
      myLikeInfo = {
        hit: myLikeInfo.hit + 1,
        class: 'fas fa-heart is-liked',
        animate: 'like-animation',
      };
      setLikeInfo(myLikeInfo);
    }
    if (like) {
      myLikeInfo = {
        hit: myLikeInfo.hit - 1,
        class: 'far fa-heart',
        animate: '',
      };
      setLikeInfo(myLikeInfo);
    }
  };

  return (
    <div className="feed-wrapper">
      <header className="feed-header">
        <div className="feed-header-left">
          <div className="avatar avatar-32">
            <Link to="#">
              <img
                src="./assets/yunkuk/image/yunkuk-avatar.jpg"
                alt="유저아바타"
              />
            </Link>
          </div>
          <div className="user-info feed">
            <strong>
              <Link to="#">seha_park._._</Link>
            </strong>
          </div>
        </div>
        <button className="more-btn" type="button">
          <img src="./assets/yunkuk/image/icons/more.png" alt="more-button" />
        </button>
      </header>
      <section className="feed-main">
        <div className="feed-image-wrapper" onDoubleClick={handleLikeClick}>
          <i className={`${likeInfo.class} ${likeInfo.animate}`} />
          <img src="./assets/yunkuk/image/feedImage1.jpeg" alt="피드이미지" />
        </div>
      </section>
      <section className="feed-bottom">
        <section className="feed-controler">
          <div className="icon-group left">
            <div className="icon-item">
              <i className={likeInfo.class} onClick={handleLikeClick} />
            </div>
            <div className="icon-item">
              <i className="far fa-comment" />
            </div>
            <div className="icon-item">
              <i className="far fa-paper-plane" />
            </div>
          </div>
          <div className="right">
            <div className="icon-item">
              <i className="far fa-bookmark" />
            </div>
          </div>
        </section>
        <div className="feed-bottom-info">
          <div className="feed-like">
            <dl>
              <dt>좋아요</dt>
              <dd>
                <span className="like-hit">{likeInfo.hit}</span>개
              </dd>
            </dl>
          </div>
          <div className="feed-desc-group">
            <dl className="feed-desc">
              <dt className="user-id">h_sej1n_</dt>
              <dd className="feed-content">응애 기타쳐버렸지🎸</dd>
            </dl>
            <ul className="feed-comment-list" />

            <p className="comment-more">댓글 3개 모두 보기</p>
            <p className="feed-uploaded">4시간 전</p>
          </div>
        </div>
      </section>
      <section className="comment-wrapper">
        <button type="button">
          <i className="far fa-smile" />
        </button>
        <input name="comment" type="text" placeholder="댓글 달기..." />
        <button className="comment-submit-button button-primary" disabled>
          게시
        </button>
      </section>
    </div>
  );
};

export default Feed;
