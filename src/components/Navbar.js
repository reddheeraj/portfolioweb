import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
//import { FaHome, FaBriefcase, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

function Navbar() {
    const [expandedbar, setExpandedbar] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setExpandedbar(false); 
    }, [location]);

    function locationpath() {
        if (location.pathname === "/projects/0") {
            navigate('/portfolioweb')
        }
        else if (location.pathname === "/projects/1") {
            navigate('/portfolioweb')
        }
        else if (location.pathname === "/projects/2") {
            navigate('/portfolioweb')
        }
        else if (location.pathname === "/projects/3") {
            navigate('/portfolioweb')
        }
        else if (location.pathname === "/projects/4") {
            navigate('/portfolioweb')
        }
    }  

    function changeID() {
        let navbar = document.getElementsByClassName('navbar');
        navbar[0].id = 'close';
        setExpandedbar(false);
    }

    function rotatenavicon() {
        let navicon = document.getElementsByClassName('navicon');
        navicon[0].style.animation = 'rotate 0.8s ease-in-out';
        setTimeout(() => {
            navicon[0].style.animation = 'none';
        }, 800);
    }

  return (
    <div className="navbar" id={expandedbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() => {
                    setExpandedbar((p) => !p);
                    rotatenavicon();
                }}
            >
                <div className="navicon">
                    <ReorderIcon />
                </div>
            </button>
        </div>
        <div className='links'>
            <Logo />
            <Link to='home'> 
                {/* <p><FaHome size="30px" /></p>*/}
                <div style={{"cursor":"pointer"}} onClick={() => {
                    changeID()
                    locationpath()
                    }}> 
                    <p>HOME</p>
                </div>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={100}>
                {/* <p><FaProjectDiagram size="30px"/></p>  */}
                 <div style={{"cursor":"pointer"}} onClick={() => {
                    changeID()
                    locationpath()
                    }}>
                    <p>PROJECTS</p>
                </div>
            </Link>
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={100}>
                {/* <p><FaBriefcase size="30px"/></p> */}
                <div style={{"cursor":"pointer"}} onClick={() => {
                    changeID()
                    locationpath()
                    }}>
                    <p>EXPERIENCE</p>
                </div>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={100}>
                {/* <p><FaEnvelope size="30px" /></p> */}
                <div style={{"cursor":"pointer"}} onClick={() => {
                    changeID()
                    locationpath()
                    }}>
                    <p>CONTACT ME</p>
                </div>
            </Link>
        </div>
    </div>
  );
}

export default Navbar