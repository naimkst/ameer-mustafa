import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { showImage } from "app/utils/helper";

export const Testimonial = ({ data }: any) => {
  const sliderRef = useRef<any>();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="slider-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider-container">
              <div className="swiper-container ">
                <div className="">
                  <Slider ref={sliderRef} {...settings}>
                    {data?.map((item: any, index: number) => (
                      <div
                        key={`testimonial-${index}`}
                        className="swiper-slide"
                      >
                        <div className="image-wrapper">
                          <img
                            className="img-fluid"
                            src={showImage(item?.TestimonialImage)}
                            alt="alternative"
                          />
                        </div>
                        <div className="text-wrapper">
                          <div className="testimonial-text">
                            {item?.Description}
                          </div>
                          <div className="testimonial-author">{item?.Name}</div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="swiper-button-next" onClick={handleNext}></div>
                <div className="swiper-button-prev" onClick={handlePrev}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
