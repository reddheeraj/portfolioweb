import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList.js'
import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import Projects from './Projects.js';
import "../styles/ProjDisp.css"

function ProjDisp() {
    const { id } = useParams()
    const project = projectList[id]
    return (
        <div className='project_box'>
            <Projects />
        </div>
    )

}

export default ProjDisp