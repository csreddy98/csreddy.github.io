import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQFmcwYDcnpwrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720990471369?e=1754524800&v=beta&t=P2Z8bL_cDMi1B6LznnPIvrtOMoDxkDiz2pVkX55O7f0" alt="Developer" className="profile-image" />
      <div className="header-text">
        <h1>Chandra Dondeti</h1>
        <p>Senior Full Stack Developer | Gen AI Specialist</p>
        <div className="header-links">
          <a href="https://github.com/csreddy08" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/csreddy98" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.huggingface.co/csr" target="_blank" rel="noopener noreferrer" className="hugging-face-link">
            <img src="https://huggingface.co/front/assets/huggingface_logo.svg" alt="Hugging Face" className="hugging-face-logo" />
            Hugging Face
          </a>
          <a href="https://medium.com/@csreddy1998" target="_blank" rel="noopener noreferrer">
            <FaMedium /> Medium
          </a>
          <a href="mailto:howdy@csreddy.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;