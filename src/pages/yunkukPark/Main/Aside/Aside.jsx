import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Recommendation from '../Recommendation/Recommendation';
import UserProfile from '../UserProfile/UserProfile';

const MainRight = () => {
  const INITIAL_X_OFFSET = 10000;
  const [mainRightLeft, setMainRightLeft] = useState(INITIAL_X_OFFSET);

  const handleLayout = () => {
    const mainLeft = document.querySelector('.main-left');
    const mainLeftXoffset = mainLeft.offsetLeft;
    const mainLeftWidth = mainLeft.offsetWidth;
    const mainLeftMarginRight = 28;
    const mainRightXoffset =
      mainLeftXoffset + mainLeftWidth + mainLeftMarginRight;
    setMainRightLeft(mainRightXoffset);
  };

  useEffect(() => {
    handleLayout();
    window.addEventListener('resize', handleLayout);
    return () => {
      window.removeEventListener('resize', handleLayout);
    };
  }, []);

  return (
    <aside className="main-right" style={{ left: `${mainRightLeft}px` }}>
      <UserProfile />
      <Recommendation />
      <Footer />
    </aside>
  );
};

export default MainRight;
