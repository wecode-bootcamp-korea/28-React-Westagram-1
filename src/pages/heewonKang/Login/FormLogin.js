import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormLogin(props) {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');

  const goToMain = () => {
    navigate('/Main-won');
  };

  const handleIdInput = event => {
    setId(event.target.value);
    const loginBtn = document.querySelector('#login_btn');
    if (event.target.value.includes('@') && pwValue.length > 5) {
      loginBtn.style.opacity = 1;
      loginBtn.style.cursor = 'pointer';
    } else {
      loginBtn.style.opacity = 0.3;
      loginBtn.style.cursor = 'inherit';
    }
  };

  const handlePwInput = event => {
    setPw(event.target.value);
    const loginBtn = document.querySelector('#login_btn');
    if (event.target.value.length > 5 && idValue.includes('@')) {
      loginBtn.style.opacity = 1;
      loginBtn.style.cursor = 'pointer';
    } else {
      loginBtn.style.opacity = 0.3;
      loginBtn.style.cursor = 'inherit';
    }
  };

  return (
    <form action="" method="post">
      <ul>
        <li>
          <input
            id="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            value={idValue}
          />
        </li>
        <li>
          <input
            id="login_pw"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            value={pwValue}
          />
        </li>
        <li className="login_btn">
          <button id="login_btn" onClick={goToMain}>
            로그인
          </button>
        </li>
      </ul>
      <div className="or_line">
        <i>또는</i>
      </div>
      <a href="#!" className="forget_pw_link">
        비밀번호를 잊으셨나요?
      </a>
    </form>
  );
}
