import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

import FetchUser from '../config/fetchUserConfig.json';

export default function Register(props) {
  const [inputID, setInputID] = useState('');
  const [inputPW, setInputPW] = useState('');
  const [disabledValue, setDisabledValue] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    checkInputValidate();
  }, [inputID, inputPW]);

  const inputHandler = event => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case 'inputID':
        setInputID(value);
        break;
      case 'inputPW':
        setInputPW(value);
        break;
      default:
    }
  };

  const checkInputValidate = () => {
    inputID.length >= 6 && inputPW.length >= 6
      ? setDisabledValue(false)
      : setDisabledValue(true);
  };

  const registerSubmit = () => {
    // fetch method post
    // let body = {id:, pw:}
    // if state true -> route to login
    // if state false -> operate alert and value init
    fetch(FetchUser.FETCH_USER_REGISTER, {
      method: 'POST',
      body: JSON.stringify({
        id: inputID,
        password: inputPW,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'signup success') {
          alert('회원가입 성공! 로그인 페이지로 이동합니다.');
          navigate('/login-hyun');
        }
      });

    inputValueInit();
  };

  const inputValueInit = () => {
    setInputID('');
    setInputPW('');
  };

  const enterRegisterValidate = event => {
    if (event.key === 'Enter') {
      registerSubmit();
    }
  };

  return (
    <main id="registerContainer">
      <article id="registerArticle">
        <section id="registerBox">
          <section id="registerInputBox">
            <header>Westagram</header>
            <input
              type="text"
              name="inputID"
              placeholder="아이디"
              value={inputID}
              onChange={inputHandler}
              onKeyPress={enterRegisterValidate}
              required
            />
            <input
              type="password"
              name="inputPW"
              placeholder="비밀번호"
              value={inputPW}
              onChange={inputHandler}
              onKeyPress={enterRegisterValidate}
              required
            />
            <span>비밀번호는 최소 8자리, 최대 25자리로 구성되며</span>
            <span> 숫자+영어대/소문자+특수문자로 구성되어야합니다.</span>
            <button onClick={registerSubmit} disabled={disabledValue}>
              회원가입
            </button>
          </section>
        </section>
      </article>
    </main>
  );
}
