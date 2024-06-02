import React from "react";
import Slider from "react-slick";
import img1 from '../../images/123.jpg'
import { Link } from "react-router-dom";

function CustomPaging() {
  const settings = {
    customPaging: function(i) {
      return (
        <Link>
          <img src={img1} alt="img1"/>
        </Link>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img1} alt="img1" />
        </div>
      </Slider>
    </div>
  );
}

export default CustomPaging;
