import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";

const RetailAndEcommerce = () => {
  return (
    <>
      <Helmet>
        <title>Retail And Ecommerce - Way WeDesign</title>
        <meta name="description" content="Retail and Ecommerce" />
      </Helmet>
      

      <Breadcrumbs
        pageurl="retail-and-ecommerce"
        subtitle="RETAIL AND ECOMMERCE"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/retail-and-ecommerce.jpg"
                    alt="RETAIL AND ECOMMERCE"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">
                    RETAIL AND ECOMMERCE
                  </h3>
                  <p className="service-details__text ">
                    In today's rapidly evolving online world, having a robust
                    online presence is crucial for businesses that aim to
                    attract new customers and broaden their reach. Merely having
                    a website is not sufficient, it requires experts who are
                    aware of the latest trends and can effectively target your
                    audience. Our team can assist you in devising a strategy
                    that delivers results and inspires customers to purchase
                    your offerings.
                   </p>                    <p className="service-details__text ">

                    At WeDesign, we possess the necessary online expertise and
                    resources to drive growth for your business beyond its
                    current limits. Our platform serves as your ultimate tool
                    for online promotion, offering:
                  </p>
                  <img width="100%"
                    class="text-center"
                    src="/assets/images/resources/retail-and-ecommerce-two.jpg"
                    alt="RETAIL AND ECOMMERCE  OFFERING"
                  />
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

export default RetailAndEcommerce;
