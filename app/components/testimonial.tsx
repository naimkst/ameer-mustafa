import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonial = () => {
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
                    <div className="swiper-slide">
                      <div className="image-wrapper">
                        <img
                          className="img-fluid"
                          src="images/testimonial-1.jpg"
                          alt="alternative"
                        />
                      </div>
                      <div className="text-wrapper">
                        <div className="testimonial-text">
                          I started to use Tivo with the free trial about a year
                          ago and never stopped since then. It does all the
                          repeating marketing tasks and allows me to focus on
                          core development activities like new product research
                          and design. I love it and recommend it to everyone.
                        </div>
                        <div className="testimonial-author">
                          Jude Thorn - Online Marketer
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image-wrapper">
                        <img
                          className="img-fluid"
                          src="images/testimonial-2.jpg"
                          alt="alternative"
                        />
                      </div>
                      <div className="text-wrapper">
                        <div className="testimonial-text">
                          Awesome features for the money. I never thought such a
                          low ammount of money would bring me so many leads per
                          month. Before Tivo I used the services of an agency
                          which cost 10x more and delivered far less. Highly
                          recommended to marketers focused on results.
                        </div>
                        <div className="testimonial-author">
                          Roy Smith - Developer
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image-wrapper">
                        <img
                          className="img-fluid"
                          src="images/testimonial-3.jpg"
                          alt="alternative"
                        />
                      </div>
                      <div className="text-wrapper">
                        <div className="testimonial-text">
                          Tivo is the best marketing automation app for small
                          and medium sized business. It understands the mindset
                          of young entrepreneurs and provides the necessary data
                          for wise marketing decisions. Just give it a try and
                          you will definitely not regret spending your time.
                        </div>
                        <div className="testimonial-author">
                          Marsha Singer - Online Marketer
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="image-wrapper">
                        <img
                          className="img-fluid"
                          src="images/testimonial-4.jpg"
                          alt="alternative"
                        />
                      </div>
                      <div className="text-wrapper">
                        <div className="testimonial-text">
                          Tivo is one of the greatest marketing automation apps
                          out there. I especially love the Reporting Tools
                          module because it gives me such a great amount of
                          information based on little amounts of input gathered
                          in just few weeks of light weight usage. Recommended!
                        </div>
                        <div className="testimonial-author">
                          Ronda Louis - Online Marketer
                        </div>
                      </div>
                    </div>
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
