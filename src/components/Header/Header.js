import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="portfolio-header">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQFmcwYDcnpwrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720990471369?e=1748476800&v=beta&t=hYic-8JFxZ4AKHT4-n-SV8DqvWcDwfVdgF5MvxjHWnE" alt="Developer" className="profile-image" />
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