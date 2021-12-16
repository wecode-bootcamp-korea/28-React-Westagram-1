import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function Login(props) {
  const navigate = useNavigate();
  const goToMain = () => navigate('/Main-won');

  return (
    <div className="login_body">
      <div id="container" className="login_container">
        <main className="login_main">
          <article>
            <div className="wrap_box">
              <h1 className="logo">westagram</h1>
              <div className="login_form">
                <form action="" method="post">
                  <ul>
                    <li>
                      <input
                        id="login_id"
                        type="text"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                      />
                    </li>
                    <li>
                      <input
                        id="login_pw"
                        type="password"
                        placeholder="비밀번호"
                      />
                    </li>
                    <li className="login_btn">
                      <button type="button" id="login_btn" onClick={goToMain}>
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
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
