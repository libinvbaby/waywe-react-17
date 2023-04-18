import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

const NewSlider = () => {
  const sliderDetail = [
    {
      title:"Take Your Brand's Eventful Story Into The  Digital Space ",
      image:"banner-one.gif",
      link:"/about"
    },
    {
      title:"  Better Solution at  Your Fingertips",
      image:"banner-two.gif",
      link:"/about"
      
    },
    {
      title:"Take Your Brand's Eventful Story Into The  Digital Space",
      image:"banner-four.gif",
      link:"/about"
    },
    {
      title:"Better Solution at  Your Fingertips",
      image:"banner-three.gif",
      link:"/about"
    },
  ];

  const params = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <div class="main-slider">
      <Swiper
        modules={[Navigation]}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        className="swiper-container thm-swiper__slider"
        {...params}
      >
        <div className="swiper-wrapper">
          {sliderDetail.map((slide, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(assets/images/banner/${slide.image})`,
                  }}
                ></div>
                <div className="image-layer-overlay" />
                {/* /.image-layer */}
                <div className="main-slider-shape-1">
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="main-slider__content">
                        <h2>{slide.title}</h2>
                        {/* <p>
                          We’ve One Mission to be the Best IT Software Company in UK
                        </p> */}
                        <Link to={slide.link} className="thm-btn">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-pagination" id="main-slider-pagination" />
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="icon-right-arrow icon-left-arrow" />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="icon-right-arrow" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default NewSlider;
