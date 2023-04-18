import React from "react";
import AboutSlider from "../components/about/AboutSlider";
import KnowAbout from "../components/about/KnowAbout";
import Breadcrumbs from "../components/Breadcrumbs";
import Testimonial from "./../components/home/Testimonial";
import { Helmet } from "react-helmet";
import Newservice from "../components/Newservice";
import MissionVisionSlider from "../components/MissionAndVision";

const About = () => {
  return (
    <
    >
      <Helmet>
        <title>About Us - Way WeDesign</title>
        <meta   name="description" content="about us waywedesign" />

        <meta name="description" content="ABOUT US" />
      </Helmet>
     

      <Breadcrumbs pageurl="about" subtitle="About" />
      <KnowAbout />
      <MissionVisionSlider/> 
      <AboutSlider />
      {/* <Testimonial /> */}
      {/* <Newservice/> */}
    </>
  );
};

export default About;
