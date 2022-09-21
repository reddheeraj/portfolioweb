import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import "../styles/Experience.css" 
import { FaReact, FaPython } from 'react-icons/fa';
import Box from '@material-ui/core/Box';
import { DiJsBadge, DiBootstrap, DiGithubBadge, DiMongodb, DiNodejsSmall }from "react-icons/di";
import { SiTensorflow, SiCplusplus } from 'react-icons/si';

function Experience() {
  return (
    <div className='experience' id="experience">
      <span>Experience</span>
      <div className='thinbar'>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2017-2018'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Royal Concorde International School, Bangalore, India
          </h2>
          <h2 className='vertical-timeline-element-subtitle'>
            10th Grade
          </h2>
          <p>CBSE - 90.8%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018-2020'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Narayana PU College, Bangalore, India
          </h2>
          <h2 className='vertical-timeline-element-subtitle'>
            11th - 12th Grade
          </h2>
          <p>CBSE - 94.6%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2020-2024'
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Nitte Meenakshi Institute of Technology, Vishweshwaraya Technological University, Bangalore, India
          </h2>
          <h2 className='vertical-timeline-element-subtitle'>
            Bachelor of Engineering
          </h2>
          <p>Information Science</p>
          <p className='vertical-timeline-element-subtitle'>Current CGPA: 9.6/10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='October 2021 - Present'
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Freelancer 
          </h2>
          <ul>
            <li>Built Websites and projects using <b>MERN</b> stack</li>
            <li>Worked on a <b>Deep Learning</b> Project (OpenCV) with a fisheries company based in US</li>
            <li>Originated and Built <b>Discord Bots</b></li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br></br>
      <br></br>
      <br></br>
      <div className='experienceText'>
        <h2>Technologies I have worked with..</h2>
        <div className='tech'>
          <Box className='techBox'>
            <FaReact />
          </Box>
          <Box className='techBox'>
            <DiMongodb />
          </Box>
          <Box className='techBox'>
            <DiNodejsSmall />
          </Box>
          <Box className='techBox'>
            <DiJsBadge />
          </Box>
          <Box className='techBox'>
            <FaPython />
          </Box>
          <Box className='techBox'>
            <SiCplusplus />
          </Box>
          <Box className='techBox'>
            <DiBootstrap />
          </Box>
          <Box className='techBox'>
            <DiGithubBadge />
          </Box>
          <Box className='techBox'>
            <SiTensorflow />
          </Box>

        </div>
      </div>
    </div>
  )
}

export default Experience