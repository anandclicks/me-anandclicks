import React from 'react';

const Footer = () => {
  return (
    <footer className="footer h-36 overflow-hidden">
      <div className="container">
        <div className="row items-center">
          <div className="col text-center flex flex-col justify-center items-center">
            <img src="src\assets\logo\logo.png" alt="Logo" className="footer-logo" />
            <div className="footer-links flex-wrap">
            <p className="footer-text">© 2024 All rights Reserved</p>
            </div>
            
          </div>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
