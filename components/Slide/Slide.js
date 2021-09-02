import React from "react";
import Slider from "react-slick";

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <section className="sliderSection" id="navbar">
      <Slider {...settings}>
        <div>
          <img src="/img/slide3.jpg" alt="" />
        </div>
        <div>
          <img src="/img/bob.jpg" alt="" />
        </div>
        <div>
          <img src="/img/jon.jpg" alt="" />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
};

export default Slide;
