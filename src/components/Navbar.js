import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
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

   

    function collapseNav() {
        setExpandedbar(false);
    }

    function rotatenavicon() {
        const navicon = document.getElementsByClassName('navicon');
        if (navicon && navicon[0]) {
            navicon[0].style.animation = 'rotate 0.8s ease-in-out';
            setTimeout(() => {
                navicon[0].style.animation = 'none';
            }, 800);
        }
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
            <div style={{"cursor":"pointer"}} onClick={() => { collapseNav(); navigate('/portfolioweb'); }}>
                <p>HOME</p>
            </div>
            <div style={{"cursor":"pointer"}} onClick={() => { collapseNav(); navigate('/projects'); }}>
                <p>PROJECTS</p>
            </div>
            <div style={{"cursor":"pointer"}} onClick={() => { collapseNav(); navigate('/experience'); }}>
                <p>EXPERIENCE</p>
            </div>
            <div style={{"cursor":"pointer"}} onClick={() => { collapseNav(); navigate('/contact'); }}>
                <p>CONTACT ME</p>
            </div>
            <div style={{"cursor":"pointer"}} onClick={() => { collapseNav(); navigate('/blogs'); }}>
                <p>BLOGS</p>
            </div>
        </div>
    </div>
  );
}

export default Navbar