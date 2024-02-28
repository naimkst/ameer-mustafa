"use client";
import Image from "next/image";
import "@public/css/bootstrap.css";
import "@public/css/fontawesome-all.css";
import "@public/css/swiper.css";
import "@public/css/magnific-popup.css";
import "@public/css/styles.css";

import { useEffect, useState } from "react";
import { Marketing } from "./components/marketing";
import { Description } from "./components/description";
import { Customer } from "./components/customer";
import { Header } from "./components/header";
import { Details } from "./components/details";
import { Video } from "./components/video";
import { Pricing } from "./components/pricing";
import { Testimonial } from "./components/testimonial";
import { Newsletter } from "./components/newsletter";
import { Footer } from "./components/footer";
import useFetch from "./hooks/useFetch";

export default function Home() {
  const [scroll, setScroll] = useState(false);

  const {
    loading,
    error,
    data: getData,
  }: any = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/home?populate=deep`);

  const homeData = getData?.data?.attributes;
  console.log(homeData, "=========");

  useEffect(() => {
    const handleScroll = () => {
      // Access scroll data
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    // Attach scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <div className="spinner-wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div> */}
      <nav
        className={`${
          scroll
            ? "navbar navbar-expand-lg navbar-dark navbar-custom fixed-top top-nav-collapse"
            : "navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"
        }`}
      >
        <div className="container">
          {/* <a className="navbar-brand logo-text page-scroll" href="/">
            Tivo
          </a> */}

          <a className="navbar-brand logo-image" href="/">
            <img src="images/logo.svg" alt="alternative" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle=""
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
          </button>

          <div className=" navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#header">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#details">
                  DETAILS
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link  page-scroll"
                  href="#video"
                  id="navbarDropdown"
                  role="button"
                  // aria-haspopup="true"
                  // aria-expanded="false"
                >
                  VIDEO
                </a>
                {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="article-details.html">
                    <span className="item-text">ARTICLE DETAILS</span>
                  </a>
                  <div className="dropdown-items-divide-hr"></div>
                  <a className="dropdown-item" href="terms-conditions.html">
                    <span className="item-text">TERMS CONDITIONS</span>
                  </a>
                  <div className="dropdown-items-divide-hr"></div>
                  <a className="dropdown-item" href="privacy-policy.html">
                    <span className="item-text">PRIVACY POLICY</span>
                  </a>
                </div> */}
              </li>

              <li className="nav-item">
                <a className="nav-link page-scroll" href="#pricing">
                  PRICING
                </a>
              </li>
            </ul>
            <span className="nav-item">
              <a className="btn-outline-sm" href="log-in.html">
                LOG IN
              </a>
            </span>
          </div>
        </div>
      </nav>

      {/* Header */}
      {homeData?.HeroSection?.isActive == true && (
        <Header data={homeData?.HeroSection} />
      )}

      {/* Customer */}
      {homeData?.BrandImage?.isActive == true && (
        <Customer data={homeData?.BrandImage} />
      )}

      {/* Description */}
      {homeData?.SectionInfo?.isActive == true && (
        <Description data={homeData?.SectionInfo} />
      )}

      {/* Features  */}
      <Marketing />

      {/* Details */}
      <Details />

      {/* Videos */}
      <Video />

      {/* Pricing */}
      <Pricing />

      {/* Testimonail */}
      <Testimonial />

      {/* Newslatter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </>
  );
}
