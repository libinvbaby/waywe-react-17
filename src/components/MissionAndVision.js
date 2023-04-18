import React, { useState, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MissionVisionSlider = () => {
  const owlRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNavClick = (index) => {
    setActiveSlide(index);
    owlRef.current.to(index);
  };

  const sliderContent = [ 
    {title: "Mission",
    desc:"Delivering innovative and reliable solutions to fulfill the  requirements of our clients with exceptional standards and uncompromising integrity"},
    {title: "Vision",
    desc:"To be leading Web Solutions Company in the IT industry, our goal is to continue to solidify our position in the market. We know that the success of our clients"},
    {title: "Core Values",
    desc:"At the heart of our culture lies a set of core values that form the bedrock of our organization. We uphold integrity in all our actions, continuously pursue innovation, and put our customers at the center of everything we do. "},
    {title: "Our Team",
    desc:"Our team is the backbone of our achievements, demonstrating exceptional expertise, unwavering commitment to excellence, and an unparalleled zeal for their craft. "},
  ]

  return (
    <div className="container owl-container">
      {/* <div className="slider-nav">
        <button onClick={() => handleNavClick(0)}>Mission</button>
        <button onClick={() => handleNavClick(1)}>Vision</button>
      </div> */}
      <OwlCarousel
        ref={owlRef}
        loop
        margin={50}
        items={1}
        autoplay={true}
        className="owl-theme carousel-container"
        
      >
        {
          sliderContent.map((item,index)=>{
            return(
              <div className="item  owl-carousel-new" key={index}>
              <h4>{item.title}</h4>
              <p>
               {item.desc}
              </p>
            </div>
            )
          })
        }
       
      </OwlCarousel>
    </div>
  );
};

export default MissionVisionSlider;
