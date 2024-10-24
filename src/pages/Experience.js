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
      <div className='thinbar'>
      </div>
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='December 2020 - May 2024'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Nitte Meenakshi Institute of Technology, Vishweshwaraya Technological University, Bangalore, India
          </h2>
          <h2 className='vertical-timeline-element-subtitle'>
            Bachelor of Engineering
          </h2>
          <p>Information Science</p>
          <p className='vertical-timeline-element-subtitle'>GPA: 9.22/10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='October 2021 - January 2023'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Freelancer 
          </h2>
          <ul>
            <li>Designed and Developed Websites and projects using <b>MERN</b> stack</li>
            <li>Used <b>Computer Vision</b> to solve a real-world problem for a fisheries company based in US</li>
            <li>Originated and Built <b>Discord Bots</b></li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='August 2022 - October 2022'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            VentraGate Technologies 
          </h2>
          <p>
            <b>Data Science Intern</b>
          </p>
          <ul>
          <li> Wrote a pipeline in python to automate video processing and object detection, reducing the initial processing time by <b>50%</b>.</li>
          <li>Collaborated with Data team in developing solutions to improve customer experience and to guide business decision making.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='August 2023 - May 2024'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Mahindra Group, Group Technology Office 
          </h2>
          <p>
            <b>Data Scientist, Intern</b>
          </p>
          <ul>
          <li>Spearheaded POCs for various projects, and materialized them to the production phase (now used by 100+ employees in client companies).</li>
          <li> Revived and steered <b>call center analytics</b> product development into production, enhancing <b>audio call processing with NLP</b> and delivering tailored insights via dynamic dashboards built using Streamlit on the front.</li>
          <li> Contributed to various phases of <b>range analysis</b> for Mahindra EV vehicle series, ensuring comprehensive assessment.</li>
          <li> Collaborated on the improvement of an internal <b>data quality tool</b>, streamlining report generation for automated data quality analysis.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='August 2024 - Dec 2025'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            Texas A&M University, Texas, USA
          </h2>
          <h2 className='vertical-timeline-element-subtitle'>
            Master of Science
          </h2>
          <p>Data Science</p>
          <p className='vertical-timeline-element-subtitle'></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='October 2024 - present'
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h2 className='vertical-timeline-element-title'>
            College of Performance, Visualization and Fine Arts, Texas A&M University, Texas, USA
          </h2>
          <p>Student Research Assistant </p>
          <p>Working with Prof. Jian Tao and team at the Digital Twin Lab to build a Human Digital Twin, trying to replicate organs, cognition and physicality of a human.</p>
          <p className='vertical-timeline-element-subtitle'></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br></br>
      <br></br>
      <br></br>
      {/* <div className='experienceText'>
        <h2>Technologies I have worked with..</h2>
        <div className='tech'>
          <Box className='techBox'>
            <div className='techIcon'>
              <FaPython />
            </div>
          </Box>
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
      </div> */}
    </div>
  )
}

export default Experience