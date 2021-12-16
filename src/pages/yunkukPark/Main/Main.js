import React from 'react';
import './Main.scss';
import Nav from './Nav/Nav';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = () => {
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
