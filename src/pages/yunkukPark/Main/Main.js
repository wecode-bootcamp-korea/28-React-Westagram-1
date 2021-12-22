import React, { useEffect, useState } from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const USER_INFO_URL = 'https://westagram-signup.herokuapp.com/profile';
  const userToken = localStorage.getItem('user_token');
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(USER_INFO_URL, {
      method: 'GET',
      headers: {
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(data => setUserName(data.username));
  }, [userToken]);

  const doKickAss = path => {
    navigate(path);
    alert('가라 이방인');
  };

  if (userToken) {
    return (
      <div className="home-container">
        <Nav />
        <main>
          <MainLeft userName={userName} />
          <MainRight userName={userName} />
        </main>
      </div>
    );
  }

  return (
    <div className="home-container">가라 이방인{doKickAss('/login-kuk')}</div>
  );
};

export default Main;
