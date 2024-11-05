// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'A React- based Contact - Manager.' },
    { title: 'Project 2', description: 'A React- based Todo List Btn Check.' },
    { title: 'Project 3', description: 'A personal portfolio website.' },
  ];

  return (
    <section style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} style={{ margin: '20px 0' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
