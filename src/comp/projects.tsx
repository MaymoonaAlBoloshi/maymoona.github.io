import React from 'react';
import './projects.css';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
