import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SingleService from "./../components/SingleService";
import { Helmet } from "react-helmet";

const SoftwareDevelopmentPlatform = () => {
  const MarketingServices = [
    {
      serviceTitle: "MOBILE-APPDEVELOPMENT",
      serviceDesc:
        "With extensive experience in delivering top-quality mobile applications and complex technology solutions",
      link: "mobile-app-development",
    },
    {
      serviceTitle: "RETAIL AND ECOMMERCE",
      serviceDesc:
        "In today's rapidly evolving online world, having a robust online presence is crucial for businesses that aim",
      link: "retail-and-ecommerce",
    },
    {
      serviceTitle: "IOT DEVELOPMENT",
      serviceDesc:
        "Our embedded device development services include the latest technology and best practices to ensure high ",
      link: "iot-development",
    },
    {
      serviceTitle: "PAYROLL MANAGEMENT SOFTWARES",
      serviceDesc:
        "Organizations require comprehensive information about their employees, and it can be challenging ",
      link: "payroll-management-softwares",
    },
    {
      serviceTitle: "Erp Crm Solution",
      serviceDesc:
        "At Way wedesign, we offer comprehensive ERP solutions to assist our clients in efficiently managing",
      link: "erp-crm-solution",
    },
    {
      serviceTitle: "ASSESSMENT PLATFORMS",
      serviceDesc:
        "As the world advances, so does education. More individuals are seeking alternative methods to prepare ",
      link: "assessment-platforms",
    },
    {
      serviceTitle: "DASHBOARD REPORTING",
      serviceDesc:
        "Data is constantly changing and being updated, which can make it difficult to keep up with the latest trends",
      link: "dashboard-reporting",
    },
   
   
    {
      serviceTitle: "Data Labelling & Classification",
      serviceDesc:
        "Data is the spine of any institution. Whether you are scheduling or analyzing every stage and every level of the individual",
      link: "data-labeling  ",
    },
    {
      serviceTitle: "PEN TESTING",
      serviceDesc:
        "No organization wants their name in the next big data breach headline. But the reality is, most breached ",
      link: "pen-testing",
    },
   
    
    
    
   
  ];
  return (
    <>
      <Helmet>
        <title>Software Development Platform - Way WeDesign</title>
        <meta name="description" content="software development platform" />
      </Helmet>

      
      <Breadcrumbs
        pageurl="software-development-platform"
        subtitle="SOFTWARE & PLATFORM DEVELOPMENT"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="assets/images/resources/software-development-platform.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">
                    SOFTWARE & PLATFORM DEVELOPMENT
                  </h3>
                  <p className="service-details__text ">
                    Every business and organization will often require some kind
                    of software at some point in their existence. Software
                    development is the process of creating software using
                    computer programming. The types of software used by most
                    companies range from general applications that enable better
                    management of key organizational functions, such as human
                    resources, finances and accounts, inventory and stock, and
                    even running projects, to more specialized software items
                    that have a specific purpose, like content management
                    software for use on company websites.
</p>                    <p className="service-details__text ">
                    Software development is a measured process, therefore any
                    applications and software programs produced as a result of
                    the process will be specifically tailored to the needs and
                    requirements of your business.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div> */}
          </div>
        </div>
      </section>
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            {/* <span className="section-title__tagline">
              Wide Range of Services
            </span> */}
            <h2 className="section-title__title">Services</h2>
          </div>
          <div className="row">
            {MarketingServices.map((data) => {
              return (
                <SingleService
                  link={data.link}
                  serviceTitle={data.serviceTitle}
                  serviceDesc={data.serviceDesc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopmentPlatform;
