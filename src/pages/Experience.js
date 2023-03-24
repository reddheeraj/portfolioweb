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
import vanillaTilt from 'vanilla-tilt';

function Experience() {

  React.useEffect(() => {
    const boxes = document.querySelectorAll('.techBox');
    vanillaTilt.init(boxes, {
      max: 25,
      speed: 400,
      scale: 1.1,
    });
  }, []);

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
          <p className='vertical-timeline-element-subtitle'>Current CGPA: 9.4/10</p>
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
            <li>Worked on a <b>Computer Vision</b> real-world problem with a Research Institution based in US</li>
            <li>Originated and Built <b>Discord Bots</b></li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='August 2022 - October 2022'
        iconStyle={{ background: '#e9d35b', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            VentraGate Technologies 
          </h2>
          <p>
            <b>Data Science Intern</b>
          </p>
          <ul>
          <li> Designed, built and incorporated code in Python to help with services provided to customers.</li>
          <li>Collaborated with Data team in developing solutions to improve customer experience and to guide business decision making.</li>
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
            <div className='techIcon'>
              <FaReact />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>
              <DiMongodb />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>    
              <DiNodejsSmall />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>  
              <DiJsBadge />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>
              <FaPython />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>
              <SiCplusplus />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>
              <DiBootstrap />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>
              <DiGithubBadge />
            </div>
          </Box>
          <Box className='techBox'>
            <div className='techIcon'>
              <SiTensorflow />
            </div>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default Experience