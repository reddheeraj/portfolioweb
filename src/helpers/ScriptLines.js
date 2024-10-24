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
    let loop;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const scale = window.devicePixelRatio;
        ctx.scale(scale, scale);

        canvas.width = window.innerWidth * 2.5;
        canvas.height = window.innerHeight * 2.5;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight-100 + "px";

        const draw = () => {
            const nameElement = nameRef.current;
            if (!nameElement) {
                return;
            }

            var txtWidth = window.getComputedStyle(nameElement).getPropertyValue("width");
            var txtHeight = window.getComputedStyle(nameElement).getPropertyValue("height");
            txtWidth = txtWidth.substring(0, txtWidth.length - 2) / 14;
            txtHeight = txtHeight.substring(0, txtHeight.length - 2);

            var xOff = -1.4 * ctx.canvas.width / 20;
            var yOff = (.336 * (ctx.canvas.width / 20));

            if (window.innerWidth > window.innerHeight) {
                xOff += nameElement.getBoundingClientRect().right - txtWidth * 1.5;
                yOff += nameElement.getBoundingClientRect().y - .72 * txtHeight + txtHeight / 1;
            } else {
                xOff += window.innerWidth / 2 + 4 * txtWidth;
                yOff += window.innerHeight / 2 - .72 * txtHeight / 2 + txtHeight / 2;
            }

            ctx.strokeStyle = "#ececec";
            ctx.lineWidth = 3;

            var x = 1.4;
            var y = -.336;
            var z = 0;

            var pastx = x;
            var pasty = y;

            var a = 1.4;
            var o = 0.005;
            var p = ctx.canvas.width / 20;

            loop = setInterval(() => {
                var dx = -a * x - 4 * y - 4 * z - y * y;
                var dy = -a * y - 4 * z - 4 * x - z * z;
                var dz = -a * z - 4 * x - 4 * y - x * x;
                x = x + dx * o;
                y = y + dy * o;
                z = z + dz * o;

                var u = toisou(x, y, z);
                var v = toisov(x, y, z);

                ctx.beginPath();
                ctx.quadraticCurveTo(2 * (pastx * p + xOff), 2 * (pasty * p + yOff), 2 * (u * p + xOff), 2 * (v * p + yOff));
                ctx.stroke();
                pastx = u;
                pasty = v;
            });
        };

        const degrees_to_radians = (degrees) => {
            var pi = Math.PI;
            return degrees * (pi / 180);
        }

        const toisou = (lx, ly, lz) => {
            var u = lx * Math.cos(2 * Math.PI) + ly * Math.cos(2 * Math.PI + degrees_to_radians(120)) + lz * Math.cos(2 * Math.PI - degrees_to_radians(120));
            return u;
        }

        const toisov = (lx, ly, lz) => {
            var v = lx * Math.sin(2 * Math.PI) + ly * Math.sin(2 * Math.PI + degrees_to_radians(120)) + lz * Math.sin(2 * Math.PI - degrees_to_radians(120));
            return v;
        }

        draw();

        window.onresize = () => {
            window.clearInterval(loop);
            draw();
        }

        return () => {
            window.clearInterval(loop);
        };
    }, []);

    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeInOut'}}
        >
            <canvas id="canvas" ref={canvasRef}></canvas>
            <div className="name" ref={nameRef}>Dheeraj Reddy</div>
            <div className='my_links'>
                <a href="https://www.linkedin.com/in/dheeraj2002reddy/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/reddheeraj" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/red.dheeraj/" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a href="mailto:meetdheerajreddy@gmail.com">
                  <Mail />
                </a>
              </div>
        </m.div>
    );
};

export default CanvasAnimation;
