import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginHeewon from './pages/heewonKang/Login/Login';
import MainHeewon from './pages/heewonKang/Main/Main';

import LoginYongsun from './pages/yongsunKim/Login/Login';
import MainYongsun from './pages/yongsunKim/Main/Main';

import LoginJeonghyun from './pages/jeonghyunKim/Login/Login';
import MainJeonghyun from './pages/jeonghyunKim/Main/Main';

import LoginYunkuk from './pages/yunkukPark/Login/Login';
import MainYunkuk from './pages/yunkukPark/Main/Main';
import SignUpYunkuk from './pages/yunkukPark/Login/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-won" element={<LoginHeewon />} />
        <Route path="/main-won" element={<MainHeewon />} />

        <Route path="/login-sun" element={<LoginYongsun />} />
        <Route path="/main-sun" element={<MainYongsun />} />

        <Route path="/login-hyun" element={<LoginJeonghyun />} />
        <Route path="/main-hyun" element={<MainJeonghyun />} />

        <Route path="/signup-kuk" element={<SignUpYunkuk />} />
        <Route path="/login-kuk" element={<LoginYunkuk />} />
        <Route path="/main-kuk" element={<MainYunkuk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
