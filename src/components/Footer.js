import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css"


function Footer() {

  return (
    <div className="footer">
        <div className="SocialMedia">
            <a href="https://www.instagram.com/red_dheeraj/" target="_blank" rel="noreferrer">
            <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/dheeraj-reddy-889a10222/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/reddheeraj" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
        </div>
        <p> &copy; 2022 dheerajreddy.me</p>
    </div>
  )
}

export default Footer;