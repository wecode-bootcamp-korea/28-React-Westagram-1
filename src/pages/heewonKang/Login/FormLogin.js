import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');

  // 막혔어요 ^^..
  const goToMain = () => {
    if (handleIdInput && handlePwInput) {
      navigate('/Main-won');
    } else {
      alert('아이디 또는 비밀번호가 틀렸어요 🙋🏻‍♀️');
    }
  };

  const handleIdInput = event => {
    const { value } = event.target;
    setId(value);
    const loginBtn = document.querySelector('#login_btn');
    if (value.includes('@') && pwValue.length > 5) {
      loginBtn.classList.add('active_login');
    } else {
      loginBtn.classList.remove('active_login');
    }
  };

  const handlePwInput = event => {
    const { value } = event.target;
    setPw(value);
    const loginBtn = document.querySelector('#login_btn');
    if (value.length > 5 && idValue.includes('@')) {
      loginBtn.classList.add('active_login');
    } else {
      loginBtn.classList.remove('active_login');
    }
  };

  return (
    <form>
      <ul>
        <li>
          <input
            id="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
        </li>
        <li>
          <input
            id="login_pw"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
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
