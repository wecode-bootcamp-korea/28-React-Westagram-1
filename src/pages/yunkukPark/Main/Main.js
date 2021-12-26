import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'pages/yunkukPark/Main/Nav/Nav';
import MainContents from 'pages/yunkukPark/Main/MainContnets/MainContents';
import Aside from 'pages/yunkukPark/Main/Aside/Aside';
import './Main.scss';

const USER_INFO_URL = 'https://westagram-signup.herokuapp.com/profile';

const Main = () => {
  const [userName, setUserName] = useState('');
  const userToken = localStorage.getItem('user_token');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(USER_INFO_URL, {
      headers: {
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(data => setUserName(data.username));
  }, []);

  useEffect(() => {
    !userToken && navigate('/login-kuk');
  }, []);

  return (
    <div className="home-container">
      <Nav />
      <main>
        <MainContents userName={userName} />
        <Aside userName={userName} />
      </main>
    </div>
  );
};

export default Main;
