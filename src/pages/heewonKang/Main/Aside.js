import InfoList from './InfoList';

export default function Aside() {
  return (
    <aside className="recommend_aside">
      <div id="my_profile">
        <div className="profile_img">
          <img
            src="https://images.unsplash.com/photo-1617198420518-e2b79c2cdbb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="user profile img"
          />
        </div>
        <div className="my_info">
          <em>kangheewon</em>
          <span>후론트라라라 👩🏻‍💻</span>
        </div>
        <button className="my_transform">전환</button>
      </div>
      <section className="recommend_me">
        <div className="title">
          <h4>회원님을 위한 추천</h4>
          <button>모두 보기</button>
        </div>
        <ul className="users_list">
          <li>
            <div className="recommend_user_img">
              <img
                className="circle_profile_img"
                src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="recommend_user_profile_img"
              />
            </div>
            <div className="recommend_user_title">
              <em>allabout_jungmin</em>
              <span className="recommand_desc">회원님을 위한 추천</span>
            </div>
            <button>팔로우</button>
          </li>
          <li>
            <div className="recommend_user_img">
              <img
                className="circle_profile_img"
                src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="recommend_user_profile_img"
              />
            </div>
            <div className="recommend_user_title">
              <em>memo04.50</em>
              <span className="recommand_desc">
                dlwlrma님 외 1명이 팔로우합니다
              </span>
            </div>
            <button>팔로우</button>
          </li>
          <li>
            <div className="recommend_user_img">
              <img
                className="circle_profile_img"
                src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="recommend_user_profile_img"
              />
            </div>
            <div className="recommend_user_title">
              <em>meaning_0</em>
              <span className="recommand_desc">
                adulkid님 외 1명이 팔로우합니다
              </span>
            </div>
            <button>팔로우</button>
          </li>
          <li>
            <div className="recommend_user_img">
              <img
                className="circle_profile_img"
                src="https://images.unsplash.com/photo-1639502496516-95531e23e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="recommend_user_profile_img"
              />
            </div>
            <div className="recommend_user_title">
              <em>iilihelloili</em>
              <span className="recommand_desc">WEstagram 신규 가입</span>
            </div>
            <button>팔로우</button>
          </li>
        </ul>
      </section>
      <InfoList />
    </aside>
  );
}
