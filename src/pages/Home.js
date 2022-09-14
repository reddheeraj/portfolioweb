import React, { useEffect } from 'react'
import '../styles/Home.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const name = "Dheeraj";
  const namearr = name.split("");

  useEffect(() => {
    Aos.init({disable: 'mobile'});
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className='Home'>
      <div className='about'>
        <h1>Hi, I'm {namearr.map((e) => {
          return <span className='name'>{e}</span>
        })}</h1>
        <div className='aboutText'>
          <p>A passionate Individual with knowledge in Machine Learning and MERN stack</p>
            <a href="https://www.linkedin.com/in/dheeraj-reddy-889a10222/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/reddheeraj" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.instagram.com/red_dheeraj/" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol  className='skillsList'>
          <div data-aos="fade-left">
            <li className='item'>
              <h2>Machine Learning</h2>
              <span>
                <p>Data modeling and evaluation</p>
                <p>System design</p>
                <p>ML libraries & algorithms</p>
              </span>
            </li>
          </div>
          <div data-aos="fade-right">
            <li className='item'>
              <h2>Deep Learning</h2>
              <span>
                <p>Neural networks</p>
                <p>Open CV</p>
              </span>
            </li>
          </div>
          <div data-aos="fade-left">
            <li className='item'>
              <h2>Web Development</h2>
              <span>
                <p>HTML, CSS, JavaScript</p>
                <p>MongoDB, Express.js, React, Node.js, SQLite</p>
                <p>Material UI, Bootstrap</p>
              </span>
            </li>
          </div>
          <div data-aos="fade-right">
            <li className='item'>
              <h2>Languages</h2>
              <span>
                <p>Python</p>
                <p>C/C++</p>
                <p>JavaScript</p>
              </span>
            </li>
          </div>
        </ol>
      </div>
      
    </div>
  )
}

export default Home