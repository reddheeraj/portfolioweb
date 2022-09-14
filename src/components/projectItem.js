import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

function ProjectItem({ name, image, id }) {
    const navigate = useNavigate()

    useEffect(() => {
      Aos.init({disable: 'mobile'});
        Aos.init({duration: 2000});
    }, []);


  return (
    <div data-aos="fade-left" className='projectItem' onClick={() => {
        navigate(`/projects/${id}`)
    }}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1>{ name }</h1>
    </div>
  )
}

export default ProjectItem