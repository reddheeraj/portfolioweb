import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandedbar, setExpandedbar] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandedbar(false); 
    }, [location]);

  return (
    <div className="navbar" id={expandedbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() => {
                    setExpandedbar((p) => !p);
                }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to='/portfolioweb'> <p>Home</p> </Link>
            <Link to='/projects'> <p>Projects</p> </Link>
            <Link to='/experience'> <p>Experience</p> </Link>
            <Link to='/contact'> <p>Contact</p> </Link>
        </div>
    </div>
  );
}

export default Navbar