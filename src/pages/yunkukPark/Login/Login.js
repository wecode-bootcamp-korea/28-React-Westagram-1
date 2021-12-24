import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from 'config';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    id: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const validateLogin = () => {
    return validateId() && validatePassword();

    function validateId() {
      const isValidId = formInput.id.indexOf('@') !== -1;

      return isValidId ? true : false;
    }

    function validatePassword() {
      const isValidPassword = formInput.password.length > 5;

      return isValidPassword ? true : false;
    }
  };

  const submitLoginForm = () => {
    const isValid = validateLogin();
    const { id, password } = formInput;

    if (isValid) {
      fetch(api.login, {
        method: 'POST',
        body: JSON.stringify({ id, password }),
      })
        .then(res => res.json())
        .then(data => {
          const { message, token } = data;
          if (message !== 'login success') {
            alert('로그인 정보를 확인해 주세요.');
            return;
          }

          if (message === 'login success') {
            localStorage.setItem('user_token', token);
            goToMain();
          }
        });
    }
  };

  const goToMain = () => {
    navigate('/main-kuk');
  };

  const isFormValid = validateLogin();

  return (
    <div className="login-body">
      <section className="login-wrapper">
        <header>
          <h1 className="logo">Westagram</h1>
        </header>

        <div className="input-group">
          <input
            className="login-input"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
            value={formInput.id}
          />
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
            value={formInput.password}
            onKeyDown={event => {
              if (event.key === 'Enter') submitLoginForm();
            }}
          />

          <button
            className="login-button"
            type="button"
            disabled={!isFormValid}
            onClick={submitLoginForm}
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
