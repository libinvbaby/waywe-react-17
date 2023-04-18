import React, { useEffect } from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from 'react-helmet';
import ToolsUsed from "../components/home/ToolsUsed";



const WebDevelopment = () => {
 
  return (
    <>
      <Helmet>
        <title>  Web development company | Web Development Service | Web Services</title>
        <meta   name="description" content="Web Development company in kochi" />
        <meta   name="robots" content="index, follow" />
	      <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	      <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	      <link   rel="canonical" href="https://waywedesign.com/web-development" />
	      <meta   property="og:locale" content="en_US" />
	      <meta   property="og:type" content="website" />
	      <meta   property="og:title" content="Web development company | Web Development Service | Web Services" />
	      <meta   property="og:description" content="Web Development company in kochi" />
	      <meta   property="og:url" content="https://waywedesign.com/web-development" />
	      <meta   property="og:site_name" content="waywedesign.com" />
	      <meta   property="article:publisher" content="https://www.facebook.com/waywedesign.com/" />
	      <meta   property="article:modified_time" content="2020-09-01T08:16:17+00:00" />
	      <meta   name="twitter:card" content="summary_large_image" />
	      <meta   name="twitter:creator" content="@waywedesign.com" />
	      <meta   name="twitter:site" content="@waywedesign.com" />

        
       
      </Helmet>
     
      <Breadcrumbs pageurl="web-development" subtitle="WEB DEVELOPMENT" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/web-development-page-banner.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">WEB DEVELOPMENT</h3>
                  <p className="service-details__text ">
                    A website can be created for either personal or professional
                    purposes. Technology has made web development a convenient
                    process. The growing number of websites and the increased
                    use of the internet are indicators of this. As the
                    businesses grow, they increasingly recognize the necessity
                    for access to a professional web service provider to find
                    solutions for their online company development demands.
                    That’s where we come in. Our web development services aid in
                    the creation of all types of web-based software and ensure
                    that web users have a positive experience. We professionally
                    design, redesign, and support customer-facing and enterprise
                    web apps to achieve high conversion an adoption rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div>
          </div>
        </div>
        <ToolsUsed/>

      </section>
    </>
  );
};

export default WebDevelopment;
