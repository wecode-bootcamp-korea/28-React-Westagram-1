import React from 'react';

const Footer = () => {
  return (
    <footer className="global-footer">
      <ul className="global-footer-list">
        <li className="global-footer-item">
          <a target="blank" href="https://about.instagram.com/">
            소개
          </a>
        </li>
        <li className="global-footer-item">
          <a target="blank" href="https://help.instagram.com/">
            도움말
          </a>
        </li>
        <li className="global-footer-item">
          <a target="blank" href="https://about.instagram.com/blog">
            홍보 센터
          </a>
        </li>
        <li className="global-footer-item">
          <a
            target="blank"
            href="https://developers.facebook.com/docs/instagram"
          >
            API
          </a>
        </li>
        <li className="global-footer-item">
          <a target="blank" href="https://help.instagram.com/519522125107875">
            개인정보처리방침
          </a>
        </li>
      </ul>

      <span className="copyright">© 2021 Instagram from Meta</span>
    </footer>
  );
};

export default Footer;
