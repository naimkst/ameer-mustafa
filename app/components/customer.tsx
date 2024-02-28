import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { showImage } from "app/utils/helper";

export const Customer = ({ data }: any) => {
  console.log(data, "@@@@@@");
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
                    {data?.SliderImages?.data.map((item: any, index: any) => (
                      <div key={`item-${index}`} className="swiper-slide">
                        <img
                          className="img-fluid"
                          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item?.attributes?.url}`}
                          alt="alternative"
                        />
                      </div>
                    ))}
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
