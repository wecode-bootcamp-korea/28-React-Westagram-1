import React, { useEffect } from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const USER_INFO_URL = 'https://westagram-signup.herokuapp.com/profile';
  const userToken = localStorage.getItem('user_token');
  const navigate = useNavigate();

  // Validate Effect
  useEffect(() => {
    fetch(USER_INFO_URL, {
      method: 'GET',
      headers: {
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.id) {
          alert('꺼져 이방인!');
          navigate('/login-kuk');
        }
      });
  }, [userToken, navigate]);

  return (
    <div className="home-container">
      <Nav />
      <main>
        <MainLeft />
        <MainRight />
      </main>
    </div>
  );
};

export default Main;
