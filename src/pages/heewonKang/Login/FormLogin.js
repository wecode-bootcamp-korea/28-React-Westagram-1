import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormLogin(props) {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  const [activeBtn, setActiveBtn] = useState('.3');
  const [disabledBtn, setDisabledBtn] = useState(true);

  const goToMain = () => {
    navigate('/Main-won');
  };

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  const activeLoginBtn = () => {
    // idValue.includes('@') && pwValue.length >= 5
    //   ? setActiveBtn('1')
    //   : setActiveBtn('.3');
    if (idValue.includes('@') && pwValue.length >= 5) {
      setActiveBtn('1');
      setDisabledBtn(false);
    } else {
      setActiveBtn('.3');
      setDisabledBtn(true);
    }
  };

  return (
    <form action="" method="post" onKeyUp={activeLoginBtn}>
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
          <button
            type="button"
            id="login_btn"
            onClick={goToMain}
            disabled={disabledBtn}
            style={{ opacity: activeBtn }}
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
