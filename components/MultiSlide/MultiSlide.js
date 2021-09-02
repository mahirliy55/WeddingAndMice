import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 15000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <div className="text-center multiSlider sm:hidden" id="reviews">
        <h2 className="font-semibold text-4xl mb-4">Reviews</h2>
        <Slider {...settings}>
          <div className="reviews rounded-md">
            <em className="text-black">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nihil repellendus velit cupiditate. Quod id porro
              distinctio alias, vitae quas dolor ratione maxime doloribus modi.
              In eligendi nobis consequuntur optio? "
            </em>
            <h2 className="font-bold">James Brown</h2>
          </div>
          <div className="reviews rounded-md mr-2">
            <em className="text-black">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nihil repellendus velit cupiditate. Quod id porro
              distinctio alias, vitae quas dolor ratione maxime doloribus modi.
              In eligendi nobis consequuntur optio? "
            </em>
            <h2 className="font-bold">James Brown</h2>

          </div>
          <div className="reviews rounded-md mr-2">
            <em className="text-black">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nihil repellendus velit cupiditate. Quod id porro
              distinctio alias, vitae quas dolor ratione maxime doloribus modi.
              In eligendi nobis consequuntur optio? "
            </em>
            <h2 className="font-bold">James Brown</h2>
          </div>
          <div className="reviews rounded-md mr-2">
            <em className="text-black">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nihil repellendus velit cupiditate. Quod id porro
              distinctio alias, vitae quas dolor ratione maxime doloribus modi.
              In eligendi nobis consequuntur optio? "
            </em>
            <h2 className="font-bold">James Brown</h2>
          </div>
          <div className="reviews rounded-md mr-2">
            <em className="text-black">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nihil repellendus velit cupiditate. Quod id porro
              distinctio alias, vitae quas dolor ratione maxime doloribus modi.
              In eligendi nobis consequuntur optio? "
            </em>
            <h2 className="font-bold">James Brown</h2>
          </div>
          <div className="reviews rounded-md mr-2">
            <em className="text-black">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit nihil repellendus velit cupiditate. Quod id porro
              distinctio alias, vitae quas dolor ratione maxime doloribus modi.
              In eligendi nobis consequuntur optio? "
            </em>
            <h2 className="font-bold">James Brown</h2>
          </div>
        </Slider>
      </div>
    );
  }
}
