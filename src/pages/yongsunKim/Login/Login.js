import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <main className="login">
      <div className="loginInner">
        <h1>Westagram</h1>
        <div className="loginContent">
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="pw" type="text" placeholder="비밀번호" />
          <button className="btn" onClick={goToMain}>
            로그인
          </button>
        </div>
        <a>비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}

export default Login;
// export default function Login(props) {
//   return <></>;
// }
