import React from 'react'
import ProjectItem from '../components/projectItem.js'
import '../styles/Projects.css'
import { projectList } from '../helpers/ProjectList.js'


function Projects() {

  return (
    <div className='projects'>
      <p> </p>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project, id) => {
          return <ProjectItem id={id} name={project.name} image={project.image}/>
        })} 
      </div>
    </div>
  )
}

export default Projects