import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Logo.css'
import logo from '../assets/Dnew.png';

function Logo() {

    //const logos = "DR".split("");
    
  return (
    <div className='logo'>
        {/* {logos.map((e) => {
            return <span className='logoText'>{e}</span>
        })} */}
        <Link className='logoText' to='/portfolioweb'>
            <img src={logo} alt="logo" />
        </Link>
    </div>
  )
}

export default Logo