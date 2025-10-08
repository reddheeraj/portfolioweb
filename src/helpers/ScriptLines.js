import React, { useEffect, useRef } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Mail from '@material-ui/icons/Mail';
import '../styles/Home.css';
import { motion as m } from 'framer-motion';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);
  let animationFrameId;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const scale = window.devicePixelRatio;
    ctx.scale(scale, scale);

    canvas.width = window.innerWidth * 2.5;
    canvas.height = window.innerHeight * 2.5;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';

    // Precompute constants for conversion functions
    const PI2 = 2 * Math.PI;
    const angle120 = (120 * Math.PI) / 180;
    const cos120 = Math.cos(angle120);
    const sin120 = Math.sin(angle120);
    const cosNeg120 = Math.cos(-angle120);
    const sinNeg120 = Math.sin(-angle120);

    const toisou = (lx, ly, lz) => {
      return lx * Math.cos(PI2) + ly * cos120 + lz * cosNeg120;
    };

    const toisov = (lx, ly, lz) => {
      return lx * Math.sin(PI2) + ly * sin120 + lz * sinNeg120;
    };

    // Initialize state variables for the differential equation
    let x = 1.4, y = -0.336, z = 0;
    let pastx = x, pasty = y;
    const a = 1.4;
    const o = 0.005; // integration step size
    const p = ctx.canvas.width / 20;

    // Calculate offsets based on the "name" element
    const nameElement = nameRef.current;
    let txtWidth = parseFloat(window.getComputedStyle(nameElement).getPropertyValue("width"));
    let txtHeight = parseFloat(window.getComputedStyle(nameElement).getPropertyValue("height"));
    txtWidth = txtWidth / 14;
    let xOff = -1.4 * ctx.canvas.width / 20;
    let yOff = 0.336 * (ctx.canvas.width / 20);

    if (window.innerWidth > window.innerHeight) {
      xOff += nameElement.getBoundingClientRect().right - txtWidth * 1.5;
      yOff += nameElement.getBoundingClientRect().y - 0.72 * txtHeight + txtHeight;
    } else {
      xOff += window.innerWidth / 2 + 4 * txtWidth;
      yOff += window.innerHeight / 2 - 0.72 * txtHeight / 2 + txtHeight / 2;
    }

    ctx.strokeStyle = "#D6CFC7";
    ctx.lineWidth = 3;

    // Increase the number of iterations per frame to speed up the drawing
    const stepsPerFrame = 10; 

    const animate = () => {
      for (let i = 0; i < stepsPerFrame; i++) {
        // Differential equation updates
        const dx = -a * x - 4 * y - 4 * z - y * y;
        const dy = -a * y - 4 * z - 4 * x - z * z;
        const dz = -a * z - 4 * x - 4 * y - x * x;
        x += dx * o;
        y += dy * o;
        z += dz * o;

        const u = toisou(x, y, z);
        const v = toisov(x, y, z);

        // Draw a line segment from the previous point to the current point
        ctx.beginPath();
        ctx.moveTo(2 * (pastx * p + xOff), 2 * (pasty * p + yOff));
        ctx.lineTo(2 * (u * p + xOff), 2 * (v * p + yOff));
        ctx.stroke();

        pastx = u;
        pasty = v;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.onresize = () => {
      cancelAnimationFrame(animationFrameId);
      // Optionally, reinitialize your canvas settings here
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <canvas id="canvas" ref={canvasRef}></canvas>
      <div className="name" ref={nameRef}>Dheeraj Reddy</div>
      <div className='my_links'>
        <a href="https://www.linkedin.com/in/dheerajmudireddy" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/reddheeraj" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        {/* <a href="https://www.instagram.com/red.dheeraj/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a> */}
        <a href="mailto:meetdheerajreddy@gmail.com">
          <Mail />
        </a>
      </div>
    </m.div>
  );
};

export default CanvasAnimation;
