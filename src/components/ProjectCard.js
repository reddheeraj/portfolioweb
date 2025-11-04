// ProjectCard.js
import React from 'react'
import '../styles/ProjectCard.css'; // Import the CSS file for styling
// import Aos from 'aos';
// import 'aos/dist/aos.css';
const ProjectCard = ({ project }) => {
    // useEffect(() => {
    //     Aos.init({disable: 'mobile'});
    //       Aos.init({duration: 1000});
    //   }, []);
    return (
        <div className="project-card" /* data-aos="fade-up" */>
            {project.image && <img src={project.image} alt={project.name} className="project-image" />}
            <div className="project-details">
                <h2>{project.name}</h2>
                <p className='proj_desc'>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.tech}</p>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;