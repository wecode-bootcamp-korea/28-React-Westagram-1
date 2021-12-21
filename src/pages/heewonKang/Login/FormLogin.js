import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  const [disableValue, setDisableValue] = useState(true);

  const goToMain = () => {
    if (!disableValue) navigate('/Main-won');
  };

  const handleInput = event => {
    const { id, value } = event.target;
    if (id === 'login_id') setId(value);
    if (id === 'login_pw') setPw(value);
  };

  useEffect(() => {
    if (idValue.includes('@') && pwValue.length > 5) {
      setDisableValue(false);
    } else {
      setDisableValue(true);
    }
  }, [idValue, pwValue]);

  return (
    <form>
      <ul>
        <li>
          <input
            id="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
        </li>
        <li>
          <input
            id="login_pw"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
          />
        </li>
        <li className="login_btn">
          <button id="login_btn" onClick={goToMain} disabled={disableValue}>
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
