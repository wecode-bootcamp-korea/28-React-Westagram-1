import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const API_URL = 'https://westagram-signup.herokuapp.com/signup';

const SignUp = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({ id: '', password: '' });
  const isFormFilled = !(!formInput.id || !formInput.password);

  const handleInput = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const validateLogin = () => {
    return validateId() && validatePassword();

    function validateId() {
      const isValidId = formInput.id.indexOf('@') === -1;
      if (isValidId) return true;

      alert('유효한 ID가 아닙니다');
      return false;
    }

    function validatePassword() {
      const isValidPassword = formInput.password.length > 5;
      if (isValidPassword) return true;

      alert('님 비밀번호 5글자 이상 아님?');
      return false;
    }
  };

  const goToLogin = () => {
    navigate('/login-kuk');
  };

  const doSignup = () => {
    const isValid = validateLogin();
    const { id, password } = formInput;
    if (isValid) {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ id, password }),
      })
        .then(res => res.json())
        .then(data => {
          const { message } = data;
          if (message === 'signup success') goToLogin();
          if (message !== 'signup success') alert('꺼져');
        });
    }
  };

  return (
    <div className="login-body">
      <section className="login-wrapper">
        <header>
          <h1 className="logo">Westagram</h1>
        </header>

        <div className="input-group">
          <input
            type="text"
            name="id"
            className="login-input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput()}
            value={formInput.id}
          />
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="비밀번호"
            onChange={handleInput()}
            value={formInput.password}
            onKeyDown={event => {
              if (event.key === 'Enter') doSignup();
            }}
          />
          <button
            className="login-button"
            type="button"
            disabled={!isFormFilled}
            onClick={doSignup}
          >
            회원가입
          </button>
        </div>

        <button className="lost-password">비밀번호를 잊으셨나요?</button>
      </section>
    </div>
  );
};

export default SignUp;
