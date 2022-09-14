import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList.js'
import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import "../styles/ProjDisp.css"

function ProjDisp() {
    const { id } = useParams()
    const project = projectList[id]
    return (
    <div className='project'>
        <p> </p>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name}/>
        <p>
        <b>Description: </b> {project.description}
        </p>
        <p>
            <b>Tech used: </b> {project.tech}
        </p>
        <a href={project.github} target="_blank" rel="noreferrer">
            <div className="github">
            <GithubIcon />  
            View on Github
            </div>
        </a>
        <a href={project.live} target="_blank" rel="noreferrer">
            <div className="live">
            <CodeIcon />
            View Live
            </div>
        </a>
    </div>
  )
}

export default ProjDisp