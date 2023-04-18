import React from 'react'
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";

const ProfessionalStaffing= () => {
  return (
    <>
    <Helmet>
      <title>Professional Staffing - Way WeDesign</title>
      <meta name="description" content="Professional Staffing" />
    </Helmet>
   
    <Breadcrumbs pageurl="professional-staffing" subtitle="Professional Staffing" />

    <section className="service-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img
                  src="/assets/images/resources/hrm-service.jpg"
                  alt="ProfessionalStaffing"
                />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__title">Professional Staffing</h3>
                <p className="service-details__text ">
                Industries across the globe resort to different strategies when it comes to attracting the right talent. As the economy is growing, there is also a huge gap in demand and supply of core talent, especially in niche areas. Our professional staffing segment specifically caters to bridging the inadequacies your organization might have at meeting the growing demands of your business. Our team focuses on providing the best fit primarily focusing on skill fulfillment.
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

export default ProfessionalStaffing