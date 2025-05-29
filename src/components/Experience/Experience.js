import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full-stack Engineer',
      company: 'Citizens Bank',
      duration: 'Sep 2023 - Present',
    },
    {
      role: 'Full-Stack Engineer',
      company: 'Lbits Technologies',
      duration: 'Oct 2020 - Dec 2021',
    },
    {
      role: 'Backend Developer',
      company: 'Open Box Digital and Emerging Technologies',
      duration: 'Jan 2019 - Jul 2019',
    }
  ];

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>  
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
