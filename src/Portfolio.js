import React from 'react';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Expertise from './components/Expertise/Expertise';
import Footer from './components/Footer/Footer';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <Summary />
      <Expertise />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;