import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo (left) */}
        <div className="footer-logo">
          <img src="/footf.jpg" alt="Logo" />
        </div>

        {/* Center content */}
        <div className="footer-content">
          <p><b>For any assistance call at official Mahindra</b></p>
          <button className="footer-call-btn">📞 1800 209 6006</button>

          <div className="footer-links">
            <div>
              <h3>Mahindra Automotive</h3>
              <a href="https://auto.mahindra.com/" target="_blank">Official Mahindra</a><br />
              <a href="https://x.com/Mahindra_Auto" target="_blank">Twitter</a><br />
              <a href="https://www.instagram.com/mahindra_auto/?hl=en" target="_blank">Instagram</a>
            </div>

            <div>
              <h3>Shlok Katiyar</h3>
              <a href="https://shlok612.github.io/myportfolio/" target="_blank">Portfolio</a><br />
              <a href="https://github.com/shlok612" target="_blank">Github</a><br />
              <a href="https://www.linkedin.com/in/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Your image (right) */}
        <div className="footer-photo">
          <img src="/shlokimg.jpg" alt="Shlok" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

