import React, { Suspense, useEffect, useRef } from 'react'
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/Home.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sphere from '../components/animatedSphere'
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import { FaArrowCircleUp } from 'react-icons/fa';
import Content from '../components/atoms';

function Home() {
  const name = "Dheeraj";
  const namearr = name.split("");
  const skills = ["AI", "MERN Stack Developement", "Guitar", "Competitive Coding", "AI"]

  useEffect(() => {
    Aos.init({disable: 'mobile'});
    // Aos.init({duration: 2000});
  }, []);

  //const titleRef = useRef();
  let myRef = useRef()
  function backToTop() {
    // const titleRef = document.getElementById('home')
    // titleRef.current.scrollIntoView({ behaviour: 'smooth', block: 'start' })
    // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    window.scrollTo(0,0)
  }

  return (
    <div className='Home' ref={myRef} id="home">
      <div className='about'>
        <div className='an'>
          {/* <span>some animation here</span> */}
          
          {/* <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,5,2]} intensity={1.5} />
            <Suspense fallback={null}>
              <Sphere scale={2.6} color={"#e9d35b"} distort={0.3} speed={3} rough={0.5}/>  
            </Suspense> 
          </Canvas> */}

          <Canvas dpr={[1,2]} camera={{position: [0,0,7.5]}}>
            <pointLight color="purple" />
            <pointLight position={[10, 10, -10]} color="violet" />
            <pointLight position={[-10, -10, 10]} color="lightblue" />
            <Content />
          </Canvas>
        </div>
        <div className='an1'>
            <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere scale={2.4} color={"#4778c1"} distort={0.3} speed={3} rough={0.5}/>  
            </Suspense> 
          </Canvas>
        </div> 
        <div className='ann'>
            <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere scale={2.4} color={"#f3f3f3"} distort={0.3} speed={3} rough={0.5}/>  
            </Suspense> 
          </Canvas>
        </div> 
        {/* <div className="card">
          <div className="contentcard">
            <h2>01</h2>
            <h3>Card One</h3>
            <p>SOME TEXT HERE
              SOME TEXT HERE
            </p>
          </div>
        </div> */}

        <div className='namemobile'>
          <h1>Hi, I'm {namearr.map((e) => {
            return <span className='name'>{e}</span>
          })}</h1>
        </div>
          <div className='namereal'>
            <h1>Hi, I'm
              <button className='D'>D</button><button className='H'>H</button><button className='E'>E</button>
              <button className='E'>E</button><button className='R'>R</button><button className='A'>A</button><button className='J'>J</button>
            </h1>
          </div>
        <div className='aboutText'>
          <p>A passionate Individual with knowledge in</p>
          <div className='words'>
            {skills.map((e) => {
              return <span className='word'>{e}</span>
            })}
          </div>
          
            {/* <a href="https://www.linkedin.com/in/dheeraj-reddy-889a10222/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/reddheeraj" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.instagram.com/red_dheeraj/" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a> */}
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
                <p>MongoDB, Express.js, React, Node.js, </p>
                <p>SQLite, Threejs</p>
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
      <Projects />
      <br></br>
      <br></br>
      <Experience />
      <Contact />
        <div className='buttons'>
          <button className='pulse' onClick={backToTop}>
            <div className='rot'>
              <FaArrowCircleUp />
            </div>
          </button>
        </div>
    </div>
  )
}

export default Home