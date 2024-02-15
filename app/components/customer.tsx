import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Customer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <div className="swiper-container">
                <div className="">
                  <Slider {...settings}>
                    <div className="swiper-slide">
                      <img
                        className="img-fluid"
                        src="images/customer-logo-1.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="img-fluid"
                        src="images/customer-logo-2.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="img-fluid"
                        src="images/customer-logo-3.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="img-fluid"
                        src="images/customer-logo-4.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="img-fluid"
                        src="images/customer-logo-5.png"
                        alt="alternative"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        className="img-fluid"
                        src="images/customer-logo-6.png"
                        alt="alternative"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
