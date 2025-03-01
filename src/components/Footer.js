import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-one">
      <div className="lower">
        <div className="auto-container">
          <div className="inner">
            <div className="copyright">Crafted with <i  className="bi bi-heart-fill icon"></i> and built on <a href="https://xinfin.org/" target="_blank" rel="noopener noreferrer">XDC</a></div>
            <div className="copyright">GAMA &copy; {new Date().getFullYear()}. Open source, for everyone. <a href="https://xinfin.org/ecosystem-dapps" target="_blank" rel="noopener noreferrer">#BuildOnXDC</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;