import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [buttonSwitch, setButtonSwitch] = useState(true);

  const handleInput = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'user-id') setId(value);
    if (name === 'user-password') setPassword(value);

    handleButton(id, password);
  };

  const handleButton = (id, password) => {
    const isFilled = !(!id || !password);
    setButtonSwitch(!isFilled);
  };

  const validateLogin = () => {
    return validateId() && validatePassword();
  };

  const validateId = () => {
    if (id.indexOf('@') === -1) {
      alert('님 아이디에 @ 안씀');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length > 5) {
      return true;
    }
    if (password.length <= 5) {
      alert('님 비밀번호 5글자 이상 아님?');
      return false;
    }
  };

  const goToMain = () => {
    const isValided = validateLogin();
    isValided ? navigate('/main-kuk') : alert('로그인 할 수 없습니다.');
  };

  return (
    <div className="login-body">
      <section className="login-wrapper">
        <header>
          <h1 className="logo">Westagram</h1>
        </header>

        <div className="input-group">
          <input
            className="login-input"
            id="user-id"
            name="user-id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={event => {
              handleInput(event);
            }}
            value={id}
          />
          <input
            className="login-input"
            id="user-password"
            name="user-password"
            type="password"
            placeholder="비밀번호"
            onChange={event => {
              handleInput(event);
            }}
            value={password}
            onKeyDown={event => {
              if (event.code === 'Enter') goToMain();
            }}
          />
          <button
            className="login-button"
            type="button"
            disabled={buttonSwitch}
            onClick={goToMain}
          >
            로그인
          </button>
        </div>

        <button className="lost-password">비밀번호를 잊으셨나요?</button>
      </section>
    </div>
  );
};

export default Login;
