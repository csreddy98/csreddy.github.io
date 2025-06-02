import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'AskDB',
      link: 'https://askdb.csreddy.com',
      description: '<b>AskDB</b> is a powerful AI-driven database query tool that allows users to interact with databases using natural language. It supports MySQL. Users can ask questions in plain English, and AskDB translates these queries into SQL, making database interactions more intuitive and accessible.',
    },
    {
      name: 'PipeCraft',
      link: 'https://cicd.csreddy.com',
      description: '<b>PipeCraft</b> is a visual CI/CD pipeline builder that lets developers design, connect, and manage pipeline components with ease. It simplifies DevOps automation through an intuitive drag-and-drop interface and real-time pipeline orchestration.'
    },
    {
      name: 'Financial Advisor',
      link: 'https://github.com/csreddy98/financial-advisor',
      description: '<b>Financial-Advisor</b> is a fine-tuned language model powered by Gemma-2-2b, designed to provide accurate and timely answers to financial questions. Optimized with the Gemma Financial Advisor Dataset, it delivers high-confidence insights tailored for financial decision-making. Optimized with the <a target="_blank" href="https://huggingface.co/csr/gemma-finanical-advisor">Gemma Financial Advisor Dataset</a>',
    }
  ];

  return (
    <section className="portfolio-projects">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div className="project" key={index}>
          <h3><a href={project.link} target="_blank">{project.name}</a></h3>
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
      ))}
    </section>
  );
};

export default Projects;