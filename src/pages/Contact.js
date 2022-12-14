import React, { useRef, useEffect } from 'react'
import '../styles/Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Contact() {
  const form = useRef();

  useEffect(() => {
    Aos.init({disable: 'mobile'});
    Aos.init({duration: 2000});
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_lvlaz5z', 'template_3sc9kff', form.current, 'UVYRES0xKFLjwz0_5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className='scrolloutline' id='contact'>
    <div className='container' data-aos="fade-up">
      <form onSubmit={sendEmail} ref={form}>
        <b> Get in Touch </b>
        <p> or </p>
        <p>just hit me up on social media</p>
        <div className='row pt-5 mx-auto'>
          <div className='col-10 form-group mx-auto'>
            <input type='text' required className='form-control' placeholder='Name' name='name' />
          </div>
          <div className='col-10 form-group pt-2 mx-auto'>
            <input pattern='[A-Za-z0-9._]+@[A-Za-z0-9]+\.[a-z]{2,}' title='must be a valid email address' required type='email' className='form-control' placeholder='Email Address' name='email' />
          </div>
          <div className='col-10 form-group pt-2 mx-auto'>
            <input type='text' className='form-control' placeholder='Subject' name='subject' />
          </div>
          <div className='col-10 form-group pt-2 mx-auto'>
            <textarea className='form-control' required id='' cols='30' rows='8' placeholder='Your message' name='message'></textarea> 
          </div>
          <div className='col-10 pt-3 mx-auto'>
            <input type='submit' className='butn' value='Send Message'></input>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Contact