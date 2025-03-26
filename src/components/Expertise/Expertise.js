import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const skills = [
    {
      category: 'Fullstack Development',
      items: [
        'Built responsive user interfaces using ReactJS and Redux.',
        'Developed RESTful APIs and scalable backend systems with Node.js and Django.'
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'Deployed applications on AWS and Azure.',
        'Automated workflows with CI/CD pipelines and Docker.'
      ]
    },
    {
      category: 'Databases',
      items: [
        'Optimized database queries in PostgreSQL and MySQL.',
        'Implemented NoSQL solutions with MongoDB and Redis.'
      ]
    },
    {
      category: 'AI/ML',
      items: [
        'Built machine learning models using TensorFlow and PyTorch.',
        'Developed data pipelines for preprocessing and feature engineering.'
      ]
    },
    {
      category: 'Generative AI',
      items: [
        'Developed AI-driven content generation tools using OpenAI APIs.',
        'Integrated generative AI models into applications for personalized user experiences.'
      ]
    },
    {
      category: 'Other',
      items: [
        'Managed version control with Git and JIRA.',
        'Followed Agile methodologies for project management.'
      ]
    }
  ];

  return (
    <section className="expertise-section">
      <h2>Professional Expertise</h2>
      <div className="expertise-grid">
        {skills.map((skill, index) => (
          <div key={index} className="expertise-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;