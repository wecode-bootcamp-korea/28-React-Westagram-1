import React from 'react';
import Recommandation from '../Recommandation/Recommandation';
import UserProfile from '../UserProfile/UserProfile';

const MainRight = () => {
  const setLayout = () => {
    const mainLeft = document.querySelector('.main-left');
    const mainRight = document.querySelector('.main-right');
    const mainLeftXoffset = mainLeft.offsetLeft;
    const mainLeftWidth = mainLeft.offsetWidth;
    const mainLeftMarginRight = 28;
    const mainRightXoffset = `${
      mainLeftXoffset + mainLeftWidth + mainLeftMarginRight
    }px`;
    mainRight.style.left = mainRightXoffset;
  };

  const init = () => {
    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
  };

  init();

  return (
    <aside className="main-right">
      <UserProfile />
      <Recommandation />
    </aside>
  );
};

export default MainRight;
