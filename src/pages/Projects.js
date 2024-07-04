// Projects.js
import React from 'react';
import { projectList } from '../helpers/ProjectList';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            {projectList.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;
