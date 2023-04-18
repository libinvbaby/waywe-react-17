import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";

const MobileAppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development - Way WeDesign</title>
        <meta name="description" content="Mobile App Development" />
      </Helmet>
    

      <Breadcrumbs
        pageurl="mobile-app-development"
        subtitle="MOBILE APP DEVELOPMENT"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/mobile-app-development.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">
                    MOBILE APP DEVELOPMENT
                  </h3>
                  <p className="service-details__text ">
                    With extensive experience in delivering top-quality mobile
                    applications and complex technology solutions, our company
                    guarantees seamless integration with your business systems.
                    We take pride in our ability to select and manage the right
                    technology to deliver native, web, and hybrid products for
                    even the most ambitious organizations. Our in-house
                    technical teams specialize in iOS and Android development
                    and are always up for a new challenge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppDevelopment;
