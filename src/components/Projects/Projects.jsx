import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import fresh from "../../images/fresh.png";
import yummy from "../../images/yummy.png";
import weather from "../../images/weather.png";
import login from "../../images/login.svg";
import book from "../../images/bookmark.png";
import qoutes from "../../images/quote.gif";
import hero from "../../images/hero.jpg";
import mealify from "../../images/mealify.png";
import notes from "../../images/notesInfo.png";
import light from "../../images/light.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CirclesWithBar } from "react-loader-spinner";

export default function Projects() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
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
    }, 1000);
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
            <span
              role="img"
              aria-label="pointer"
              className="text-react fw-bolder "
            >
              <i class="fa-solid fa-hand-pointer"></i>
            </span>
          </div>
          <Navbar />
          <section className="projects  py-5 p-0 m-0 overflow={hidden}">
            <div className="container pt-5 ">
              <div className="section-heading position-relative text-center pt-5">
                <h3 className=" fw-bold h1 " data-aos="fade-down">
                  PROJECTS
                </h3>
              </div>
              <div className="slider-container text-white ">
                <Slider {...settings}>
                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={fresh}
                      alt="frresh cart project"
                    />
                    <div className="swiper-slide text-center">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3" data-aos="fade-right">
                          Fresh Cart
                        </h1>
                        <p
                          data-aos="fade-left"
                          className="h4 fw-medium text-secondary  my-3 text-start lh-base"
                        >
                          <span className="h3 fw-bolder">Description: </span>The
                          Freshcart website is an online shopping platform
                          offering a wide range of products including fashion
                          items for both men and women, as well as electronics.
                          The website seems to provide product descriptions,
                          pricing details in Egyptian pounds, and ratings for
                          some items. electronics.
                        </p>
                        <p
                          data-aos="fade-left"
                          className="h4 fw-medium text-secondary  text-start lh-base"
                        >
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5 &amp; CSS &amp; Bootstrap &amp; React Framework
                          &amp; React js &amp; Context &amp; React-router-dom
                          &amp; React-Query &amp; React hooks( useState,
                          useContext, useParam, useNavigate and useEffect) &amp;
                          Useformik &amp; React-toast &amp; React-bootstrap
                          &amp; Authentication &amp; Authorization &amp; Online
                          Payment Support &amp; API Data Handling (GET, DELETE,
                          PUT, POST) &amp; CRUD Operations on Cart Component
                          &amp; User-Friendly Forms.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 fw-bold">
                          <Link
                            to="https://routecart.netlify.app/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-5 mx-auto mt-5"
                      src={light}
                      alt="transaction project"
                    />
                    <div className="swiper-slide text-center">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3" data-aos="fade-right">
                          Customer Transactions Manager
                        </h1>
                        <p
                          data-aos="fade-left"
                          className="h4 fw-medium text-secondary  my-3 text-start lh-base"
                        >
                          <span className="h3 fw-bolder">Description: </span>A
                          dynamic web app built with React! Featuring an
                          interactive customer table with filtering, sorting,
                          and graph visualization of transaction data per day.
                          Responsive design and smooth animations ensure a
                          seamless user experience. Built using React, Axios for
                          API requests, PrimeReact for UI components, and
                          Chart.js for dynamic data visualization.
                        </p>
                        <p
                          data-aos="fade-left"
                          className="h4 fw-medium text-secondary  text-start lh-base"
                        >
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5 &amp; CSS &amp; Bootstrap &amp; React Framework
                          &amp; PrimeReact &amp;Chart js &amp; React js &amp;
                          React-router-dom &amp; React hooks( useState,
                          useEffect) &amp; React-bootstrap &amp; User-Friendly
                          Forms.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 fw-bold">
                          <Link
                            to="https://customer-transaction.netlify.app/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={notes}
                      alt="notes app project"
                    />
                    <div className="swiper-slide text-center">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3" data-aos="fade-right">
                          Notes App
                        </h1>
                        <p
                          data-aos="fade-left"
                          className="h4 fw-medium text-secondary  my-3 text-start lh-base"
                        >
                          <span className="h3 fw-bolder">Description: </span>
                          Welcome to QuickNotes, your intuitive and sleek
                          note-taking solution! Designed with productivity in
                          mind, QuickNotes offers a minimalist interface built
                          with React.js. Enjoy real-time updates and seamless
                          cross-device use, making note-taking effortless and
                          efficient.
                        </p>
                        <p
                          data-aos="fade-left"
                          className="h4 fw-medium text-secondary  text-start lh-base"
                        >
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5 &amp; CSS &amp; Bootstrap &amp; React Framework
                          &amp; React js &amp; Recoil &amp; React-router-dom
                          &amp; React hooks( useState, useNavigate and
                          useEffect) &amp; Useformik &amp; React-bootstrap &amp;
                          Authentication &amp; Authorization &amp; API Data
                          Handling (GET, DELETE, PUT, POST) &amp; User-Friendly
                          Forms.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 fw-bold">
                          <Link
                            to="https://quicknotes-app.netlify.app/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={yummy}
                      alt="yummy project"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Yummy</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>The
                          Yummy website appears to be a platform that showcases
                          different types of foods from various cuisines. The
                          extracted content lists a variety of dishes such as
                          Corba, Sushi, Burek, Bistek, and Ribollita. It seems
                          to showcase a diverse range of popular dishes from
                          different cultures, which could be helpful for people
                          looking for culinary inspiration or information about
                          various cuisines.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          Html5 & Css3 & Javascript & Netlify & Realtime search
                          & DOM & Bootstrap (Framework) & Responsive Web Design
                          & ES6 & Jquery & deploy.
                        </p>
                        <button className="btn checkBtn w-25 mt-3  fw-bold">
                          <Link
                            to="https://yummyroute.netlify.app/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={weather}
                      alt="weather app"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Weather App</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>The
                          Weathered App is a web-based application that provides
                          real-time weather information. Users can enter a city
                          or location to receive current temperature updates,
                          weather conditions, and forecasts. The app also
                          displays the chance of rain at various times
                          throughout the day and keeps a recent cities list,
                          which can be cleared as needed. The interface is
                          user-friendly and designed to offer quick and accurate
                          weather updates for any specified location.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          Html5 && Css3 && bootstrap && JavaScript && API&& DOM
                          && Netlify host && Responsive && ES6.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 mb-5 fw-bold">
                          <Link
                            to="https://weatheredapp.netlify.app/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={login}
                      alt="login system"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Login System</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>The
                          Login System website appears to be a login system.
                          Users can enter their email address and password to
                          sign in to their account. The webpage displays error
                          messages for invalid email addresses and passwords
                          that don't meet the regex. There are options to create
                          a new account and a "LOGIN FAILED" message is
                          displayed for invalid email or password entries,
                          prompting users to try again.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          Html5 & Css3 & Javascript & Netlify & Regex &
                          Protected routes & Bootstrap (Framework) & Responsive
                          Web Design & deploy.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 mb-5 fw-bold">
                          <Link
                            to="https://smart-signin-system.netlify.app/signup.html"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={book}
                      alt="Bookmark"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Book mark</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>The
                          Bookmark website appears to be a platform named
                          "BOOKMARKER" for bookmarking your favorite websites.
                          The site seems to offer a service where users can
                          submit the name and URL of the website they want to
                          bookmark. It also looks like there are options to
                          index websites, view website names, visit the
                          bookmarked sites, and delete bookmarks. The site
                          focuses on simplifying the process of saving and
                          organizing your favorite online destinations for quick
                          acces.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5, CSS & CRUD system & Bootstrap & Javascript &
                          Realtime search.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 mb-5 fw-bold">
                          <Link
                            to="https://mostafamaged99.github.io/bookmark/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-25 rounded-5 mt-5 mx-auto"
                      src={qoutes}
                      alt="qoutes genrator app"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Quotes App</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>A
                          curated compilation of inspiring and thought-provoking
                          quotes. This website offers a diverse range of quotes
                          designed to motivate, uplift, and encourage
                          reflection. Whether you're seeking wisdom on life,
                          love, success, or personal growth, you'll find a rich
                          array of quotes from notable figures and timeless
                          sources. Dive in to discover words that resonate,
                          inspire change, and spark contemplation. Join us in
                          celebrating the power of words and the impact they can
                          have on our lives.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5, CSS & Flex box & Bootstrap & Math random &
                          Javascript
                        </p>
                        <button className="btn checkBtn w-25 mt-3 mb-5 fw-bold">
                          <Link
                            to="https://mostafamaged99.github.io/quotes/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mt-5 rounded-5 mx-auto"
                      src={hero}
                      alt="portfolio"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Daniels - portfolio</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>
                          This website belongs to a UI/UX designer and web
                          developer named Jerry Daniels. On the website,
                          visitors can find information about Jerry, his
                          services, works, clients, and team members. Visitors
                          can also download his CV, see a portfolio of his work,
                          read testimonials from his customers, and get in touch
                          with him via phone or email. The website is responsive
                          and retina ready, meaning that the design will adjust
                          and look good on devices of different sizes and
                          display qualities.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5, CSS & position & Flex box & Bootstrap &
                          Transform & Animation & Responsive.
                        </p>
                        <button className="btn checkBtn w-25 mt-3 mb-5 fw-bold">
                          <Link
                            to="https://danielsroute.netlify.app/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      data-aos="fade-right"
                      className="w-10 mx-auto mt-5"
                      src={mealify}
                      alt="mealify"
                    />
                    <div className="swiper-slide  ">
                      <div className="swiper-slide-text">
                        <h1 className="fw-bold pb-3">Mealify</h1>
                        <p className="h4 fw-medium text-secondary  my-3 text-start lh-base">
                          <span className="h3 fw-bolder">Description: </span>
                          Mealify is a user-friendly web application designed to
                          simplify meal planning and recipe management. It
                          offers a seamless experience for users to discover new
                          recipes, plan meals, and manage grocery lists
                          efficiently. Featuring an intuitive interface, Mealify
                          helps users save time and stay organized by providing
                          customized meal suggestions and easy access to recipe
                          details. Whether you’re a culinary enthusiast or
                          someone looking to streamline your meal prep, Mealify
                          makes meal planning a breeze.
                        </p>
                        <p className="h4 fw-medium text-secondary  text-start lh-base">
                          <span className="h3 fw-bolder">
                            Features &amp; Tecnologies:{" "}
                          </span>
                          HTML5, CSS variables & position & Flex box & Transform
                          & Animation
                        </p>
                        <button className="btn checkBtn w-25 mt-3 mb-5 fw-bold">
                          <Link
                            to="https://mostafamaged99.github.io/Mealify/"
                            target="_blank"
                          >
                            Check it here!
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
