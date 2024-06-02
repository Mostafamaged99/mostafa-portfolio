import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.module.css"; // Make sure to import your CSS file
import Aos from "aos";
import * as $ from 'jquery';
import 'jquery.ripples';

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  useEffect(() => {
    // Apply the ripple effect to the element with class 'home'
    $(".home").ripples({
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.05,
    });

    // Cleanup on unmount
    return () => {
      $(".home").ripples("destroy");
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  // Assuming you want the same AOS configuration for both useEffect calls,
  // you can consolidate them into one.

  return (
    <>
     
      <div className="app" onMouseMove={handleMouseMove}>
        <div
          className="custom-pointer"
          style={{ left: mouseX, top: mouseY }}
        >
          {/* Custom pointer content */}
          <span role="img" aria-label="pointer" className="fs-1 text-react fw-bolder">.</span>
        </div>
        <Navbar />
        <div className="home d-flex justify-content-center align-items-center vh-100 text-white">
          <div className="home-text text-center container">
            <div className="layer" 
             data-aos="fade-down"
            >
              {/* <img
                src={profile2}
                alt="profile"
                className=" rounded-circle profile"
              /> */}
            </div>
            <h1 className="fw-bolder my-3" 
             data-aos="fade-down"
            >
              HI, I am <span className="name">Mostafa Abdelmaged</span>
            </h1>
            <p 
             data-aos="fade-down" 
            className="h5 text-secondary">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design.
            </p>
            <p 
             data-aos="fade-down"
             className="text-secondary h5 mb-5">
              I also make website more & more interactive with web animations.
            </p>

            <div className="icons  d-flex justify-content-center" 
             // data-aos="fade-down"
            >
              <ul className="d-flex">
                <li className="mx-3">
                  <a href="https://www.linkedin.com/in/mostafa-abdelmaged-190b7415a/" target="_blank" rel="noopener noreferrer">
                    <i className="icon fs-6 text-white fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="mx-3">
                  <a href="https://github.com/Mostafamaged99" target="_blank" rel="noopener noreferrer">
                    <i className="icon fs-6 text-white fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="mx-3">
                  <a href="https://drive.google.com/file/d/1JsmdKb1fTkkFqeLk6_JoJ0OgZ_dwvkkc/view" target="_blank" rel="noopener noreferrer">
                    <i className="icon fs-6 text-white fa-solid fa-file"></i>
                  </a>
                </li>
                <li className="mx-3">
                  <a href="mailto:mostafaabdelmaged@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon fs-6 text-white fa-solid fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
