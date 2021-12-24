import { useNavigate } from 'react-router-dom';
import './Nav-won.scss';

const Header = () => {
  const navigate = useNavigate();
  const goToLogin = () => navigate('/Login-won');

  return (
    <header className="main_header">
      <div className="header_content">
        <h1 className="logo" onClick={goToLogin}>
          westagram
        </h1>
        <section className="search_wrap">
          <i className="fas fa-search fa-xs" />
          <input type="text" placeholder="검색" />
        </section>
        <nav>
          <div className="nav_content">
            <ul>
              <li>
                <a href="#!">
                  <i className="fas fa-home fa-lg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-paper-plane fa-lg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-plus-square fa-lg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-compass fa-lg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="far fa-heart fa-lg" />
                </a>
              </li>
              <li className="header_my_profile">
                <a href="#!">
                  <img
                    src="https://images.unsplash.com/photo-1617198420518-e2b79c2cdbb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="my profile img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
