import React, { useEffect, useState } from "react";
import logo from "../../images/2.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Example condition to change navbar bg color
      if (position > 100) {
        setNavbarBg('black'); // Change this to whatever color you want
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //

  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top" style={{ backgroundColor: navbarBg }}>
        <div className="container">
          <NavLink className="navbar-brand w-25" to="/">
            <h2 className="h1 text-white fw-bolder">Mostafa</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link  text-white mx-5" aria-current="page" to="/home">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-white mx-5" aria-current="page" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-white mx-5" aria-current="page" to="/projects">
                  PROJECTS
                </NavLink>
              </li>
              <li className="nav-item ">
                <span
                  className="phoneNumber nav-link  cursor-pointer text-white mx-5"
                  aria-current="page"
                >
                  <span className="me-5">|</span>{" "}
                  <i class="fa-solid fa-phone mx-2"></i> +201121197663
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
