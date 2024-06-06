import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import aboutPic from "../../images/79097480_2494530037500976_4848138128579362816_o.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CirclesWithBar } from "react-loader-spinner";

export default function About() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner d-flex justify-content-center align-items-center vh-100">
          <CirclesWithBar
            height="100"
            width="100"
            color="#61dbfb"
            outerCircleColor="#61dbfb"
            innerCircleColor="#61dbfb"
            barColor="#61dbfb"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="app" onMouseMove={handleMouseMove}>
          <div className="custom-pointer" style={{ left: mouseX, top: mouseY }}>
            {/* Custom pointer content */}
            <span role="img" aria-label="pointer " className="text-react">
              <i class="fa-solid fa-hand-pointer"></i>
            </span>
          </div>
          <Navbar />
          <section
            id="About"
            className="about py-5 d-flex align-items-center  "
          >
            <div className="container py-5">
              <div className="section-heading position-relative text-center mt-5">
                <h3 data-aos="fade-down" className=" fw-bold h1 ">
                  ABOUT ME
                </h3>
              </div>

              <div className="row">
                <div className="col-md-5 py-5">
                  <div className="about-img position-relative me-5">
                    <img
                      src={aboutPic}
                      alt="hero"
                      className="w-100 position-relative rounded-5 "
                      data-aos="fade-right"
                    />
                  </div>
                </div>
                <div
                  className="col-md-7 py-5 d-flex align-items-center"
                  data-aos="fade-left"
                >
                  <div className="about-text">
                    <h3 className="bolder color-heading text-white">
                      Hi There! I'm Mostafa Abdelmaged
                    </h3>
                    <span className="reactDeveloper">React Developer</span>
                    <p className="py-3 lh-5 text-secondary fs-5 ">
                      I am a budding React developer eager to make waves in the
                      world of web development. With a strong foundation in
                      JavaScript and a keen eye for design, I thrive on turning
                      ideas into interactive and visually appealing user
                      experiences.
                    </p>
                    <div className="lists d-flex ">
                      <ul className="h5 fw-medium text-secondary ps-0 ">
                        <li className="pb-2">Birthday </li>
                        <li className="pb-2">Phone </li>
                        <li className="pb-2">Email </li>
                        <li className="pb-2">From </li>
                        <li className="pb-2">Language </li>
                        <li className="pb-2">Freelance </li>
                        <li className="pb-2">full time job </li>
                      </ul>
                      <ul className="h5 fw-medium text-secondary ">
                        <li className="pb-2">: 08/11/1999</li>
                        <li className="pb-2">: 201121197663</li>
                        <li className="pb-2">: Mostafaabdelmaged@gmail.com</li>
                        <li className="pb-2">: Egypt </li>
                        <li className="pb-2">: Arabic, English </li>
                        <li className="pb-2">: Available</li>
                        <li className="pb-2">: Available</li>
                      </ul>
                    </div>
                    <Link
                      to="https://drive.google.com/file/d/1JsmdKb1fTkkFqeLk6_JoJ0OgZ_dwvkkc/view"
                      target="_balnk"
                    >
                      <button className="btn btn-Cv w-50 mt-3 text-white">
                        Resume
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
