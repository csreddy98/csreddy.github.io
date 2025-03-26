import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Citizens',
      duration: 'Sep 2023 - Present',
    },
    {
      role: 'Lead Software Engineer',
      company: 'Lbits Technologies',
      duration: 'Oct 2020 - Dec 2021',
    },
    {
      role: 'Associate Software Engineer',
      company: 'Lbits Technologies',
      duration: 'Jul 2019 - Oct 2020',
    },
    {
      role: 'Software Developer',
      company: 'Open Box Digital and Emerging Technologies',
      duration: 'Apr 2018 - Jul 2019',
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