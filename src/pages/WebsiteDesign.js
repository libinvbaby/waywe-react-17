import React from 'react'
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";

const WebsiteDesign= () => {
  return (
    <>
    <Helmet>
      <title>Website Design - Way WeDesign</title>
      <meta name="description" content="Website Design" />
    </Helmet>
   
    <Breadcrumbs pageurl="website-design" subtitle="Website Design" />

    <section className="service-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img
                  src="/assets/images/resources/content-development.jpg"
                  alt="ProfessionalStaffing"
                />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__title">Website Design</h3>
                <p className="service-details__text ">
                
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
  )
}

export default WebsiteDesign