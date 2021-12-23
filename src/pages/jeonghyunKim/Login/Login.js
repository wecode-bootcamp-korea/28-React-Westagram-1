import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

import FetchUser from '../config/fetchUserConfig.json';

function Login(props) {
  const [inputID, setInputID] = useState('');
  const [inputPW, setInputPW] = useState('');
  const [disabledValue, setDisabledValue] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    checkInputValidate();
  }, [inputID, inputPW]);

  const inputValueInit = () => {
    setInputID('');
    setInputPW('');
  };

  const checkInputValidate = () => {
    if (inputID.length >= 6 && inputPW.length >= 6) {
      setDisabledValue(false);
    } else {
      setDisabledValue(true);
    }
  };

  const inputHandler = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'inputID':
        setInputID(value);
        break;
      case 'inputPW':
        setInputPW(value);
        break;
      default:
        return;
    }
  };

  const handleResize = () => {
    const imgBox = document.querySelector('.imgBox');

    window.innerWidth <= 735
      ? imgBox.classList.add('hide')
      : imgBox.classList.remove('hide');
  };

  const loginFunc = () => {
    fetch(FetchUser.FETCH_USER_LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        id: inputID,
        password: inputPW,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'login success') {
          localStorage.setItem('token', result.token);
          navigate('/main-hyun');
        } else {
          alert('로그인 정보가 일치하지 않습니다.');
          inputValueInit();
        }
      });
  };

  const enterLoginValidate = event => {
    if (event.key === 'Enter') {
      loginFunc();
    }
  };

  const forgetPWFunc = () => {
    // 비밀번호 찾기 페이지로 라우팅한다.
  };

  const facebookLoginFunc = () => {
    // 페이스북 로그인 modal를 출력한다.
  };

  const userRegisterFunc = () => {
    navigate('/register-hyun');
  };

  return (
    <main id="landingContainer">
      <article id="landingArticle">
        <section className="imgBox" />
        <section id="loginBox">
          <div id="inputBox">
            <header>Westagram</header>
            <input
              className="inputID"
              name="inputID"
              maxLength="75"
              type="text"
              required
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={inputID}
              onChange={inputHandler}
              onKeyPress={enterLoginValidate}
            />
            <input
              className="inputPW"
              name="inputPW"
              type="password"
              required
              placeholder="비밀번호"
              value={inputPW}
              onChange={inputHandler}
              onKeyPress={enterLoginValidate}
            />
            <button
              className="loginBtn"
              onClick={loginFunc}
              disabled={disabledValue}
            >
              로그인
            </button>
            <section id="loginHrContainer">
              <div className="loginHr" />
              <span>또는</span>
              <div className="loginHr" />
            </section>
            <section id="inputBoxFooter">
              <i className="fab fa-facebook-square" id="facebookLogo" />
              <span id="facebookLogin" onClick={facebookLoginFunc}>
                Facebook으로 로그인
              </span>
            </section>
            <span id="forgetPw" onClick={forgetPWFunc}>
              비밀번호를 잊으셨나요?
            </span>
          </div>
          <div id="registerBox">
            <span>계정이 없으신가요?</span>
            <a href="#!" onClick={userRegisterFunc}>
              가입하기
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Login;
