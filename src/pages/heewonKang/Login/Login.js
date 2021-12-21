import FormLogin from './FormLogin';
import './Login.scss';

export default function Login() {
  return (
    <div className="login_body">
      <div id="container" className="login_container">
        <main className="login_main">
          <article>
            <div className="wrap_box">
              <h1 className="logo">westagram</h1>
              <div className="login_form">
                <FormLogin />
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
