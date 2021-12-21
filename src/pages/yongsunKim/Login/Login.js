import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
// import LoginInput from './LoginInput';

export default function Login(props) {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const navigate = useNavigate();

  const idInputCheck = event => {
    setIdInput(event.target.value);
    const btnElem = document.querySelector('.btn');
    if (event.target.value.includes('@') && pwInput.length > 5) {
      btnElem.style.backgroundColor = '#0095F6';
    } else {
      btnElem.style.backgroundColor = '#c0dffd';
    }
  };

  const pwInputCheck = event => {
    setPwInput(event.target.value);
    const btnElem = document.querySelector('.btn');
    if (event.target.value.length > 5) {
      btnElem.style.backgroundColor = '#0095F6';
    } else {
      btnElem.style.backgroundColor = '#c0dffd';
    }
  };

  const btnClick = event => {
    event.preventDefault();
    navigate('/main');
  };

  return (
    <main className="login">
      <div className="loginInner">
        <h1>Westagram</h1>
        {/* <LoginInput /> */}
        <div className="loginContent">
          <input
            id="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idInput}
            onChange={idInputCheck}
          />
          <input
            id="userPw"
            type="text"
            placeholder="비밀번호"
            value={pwInput}
            onChange={pwInputCheck}
          />
          <button className="btn" type="button" onClick={btnClick}>
            로그인
          </button>
        </div>
        <a href="#!">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}
