import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="portfolio-projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;