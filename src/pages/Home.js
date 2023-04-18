import React from "react";
import PartnerSlider from "./../components/home/PartnerSlider";
import FeatureOne from "./../components/home/FeatureOne";
import AboutOne from "./../components/home/AboutOne";
import ServiceOne from "./../components/home/ServiceOne";
import DiscoverMore from "./../components/home/DiscoverMore";
import ImproveSection from "./../components/home/ImproveSection";
import BannerVideo from "./../components/home/BannerVideo";
import CoreValue from "./../components/home/CoreValue";
import Testimonial from "./../components/home/Testimonial";
import BlogHome from "./../components/home/BlogHome";
import HomeCta from "./../components/home/HomeCta";
import { Helmet } from 'react-helmet';
import AboutSlider from "../components/about/AboutSlider";
import CustomService from "../components/home/CustomService";
import ToolsUsed from "../components/home/ToolsUsed";
import NewSlider from "../components/home/NewSlider";




const Home = () => {
  return (
    <>
      

  <Helmet
>
<meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="icon" href="./assets/images/logo.png" />
  <link rel="apple-touch-icon" href="./assets/images/logo.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  <title>  ITES and Digital Marketing Services | Digital Marketing Company</title>
  <meta   name="description" content="We provide ITES and digital marketing services, including web development, SEO, social media marketing, and more. Contact us today to learn more!" />
  <meta   name="robots" content="index, follow" />
  <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link   rel="canonical" href="https://waywedesign.com/web-development" />
  <meta   property="og:locale" content="en_US" />
  <meta   property="og:type" content="website" />
  <meta   property="og:title" content="ITES and Digital Marketing Services | Digital Marketing Company" />
  <meta   property="og:description" content="We provide ITES and digital marketing services, including web development, SEO, social media marketing, and more. Contact us today to learn more!" />
  <meta   property="og:url" content="https://waywedesign.com/web-development" />
  <meta   property="og:site_name" content="WayWeDesign" />
  <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
  <meta   property="article:modified_time" content="2022-04-05T08:16:17+00:00" />
  <meta   name="twitter:card" content="summary_large_image" />
  <meta   name="twitter:creator" content="@waywedesign" />
  <meta   name="twitter:site" content="@waywedesign" />
  </Helmet>


    
      <div className="page-wrapper">
        {/* <NewSlider/> */}
        <BannerVideo/>
        <PartnerSlider />
        <FeatureOne />
        <AboutOne />
        <CustomService/>
        <DiscoverMore />
        <AboutSlider/>
      
        <Testimonial />
        <BlogHome />
        <HomeCta />
        <ToolsUsed/>
      </div>
    </>
  );
};

export default Home;
