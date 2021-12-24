import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  const [disableValue, setDisableValue] = useState(true);

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

  const goToMain = () => {
    fetch('http://10.58.5.56:8080/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert(`${idValue}님 반갑습니다!`);
          localStorage.setItem('user', result.token);
          navigate('/Main-won');
        }
        if (result.message === 'USER_DOES_NOT_EXIST') {
          alert('아이디가 틀렸거나 존재하지 않는 회원입니다.');
        }
        if (result.message === 'PASSWORD_ERROR') {
          alert('비밀번호가 틀렸어요.');
        }
      });
  };

  return (
    <form method="POST">
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
          <button
            type="button"
            id="login_btn"
            onClick={goToMain}
            disabled={disableValue}
          >
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
