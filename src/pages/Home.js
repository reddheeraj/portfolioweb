import React, { Suspense, useEffect, useRef } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Mail from '@material-ui/icons/Mail';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css'
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import vanillaTilt from 'vanilla-tilt';
import {motion as m} from 'framer-motion';
import CanvasAnimation from '../helpers/ScriptLines';

function Home() {
  const name = "Dheeraj";
  const namearr = name.split("");
  const skills = ["AI", "MERN Stack Developement", "Guitar", "Competitive Coding", "AI"]

  useEffect(() => {
    Aos.init({disable: 'mobile'});
    // Aos.init({duration: 2000});
    const cards = document.querySelectorAll('.card');
    vanillaTilt.init(cards, {
      max: 25,
      speed: 400,
      scale: 1.1,
    });
  }, []);

  //const titleRef = useRef();
  let myRef = useRef()


  return (
          // <div className='words'>
          //   {skills.map((e) => {
          //     return <span className='word'>{e}</span>
          //   })}
          // </div>
          
          <m.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
          className='home' id='home'>
            <CanvasAnimation />
            {/* <div className='name'>
              <div className='name_letters'>
                DHEERAJ REDDY
              </div>
              <div className='my_links'>
                <a href="https://www.linkedin.com/in/dheeraj-reddy-889a10222/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/reddheeraj" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/red_dheeraj/" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a href="mailto:meetdheerajreddy@gmail.com">
                  <Mail />
                </a>
              </div>
            </div> */}
          </m.div>
  
  )
}

export default Home