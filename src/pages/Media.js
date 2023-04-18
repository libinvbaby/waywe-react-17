import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import Accordion from "react-bootstrap/Accordion";
import { Helmet } from "react-helmet";

const Media = () => {
  return (
    <>
      <Helmet>
        <title>Media - Way WeDesign</title>
        <meta name="description" content="Media" />
      </Helmet>
      

      <Breadcrumbs pageurl="media" subtitle="MEDIA" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/media.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">Media</h3>
                  <p className="service-details__text ">
                    Way WeDesign offers an innovative digital platform that
                    enables you to showcase your products across a variety of
                    media channels, while keeping important information
                    accessible to customers. Our platform offers an
                    irreplaceable solution that ensures your message is
                    disseminated to a broad audience through numerous formats
                    and channels. This combination of reach and exclusivity
                    helps you maximize your marketing efforts and build stronger
                    relationships with your customers. Whether you're looking to
                    promote a new product, reach a wider audience, or simply
                    abridge your marketing efforts, Way WeDesign has the
                    solution you need to succeed in the digital age.
                  </p>
                 
                </div>
                <br />
                <h3 className="service-details__title ">FAQ</h3>
                <Accordion
                  defaultActiveKey="0"
                  className="service-details__faq"
                >
                  <Accordion.Item
                    eventKey="0"
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    <Accordion.Header className="accrodion-title">
                      <h4>What are the different types of media?</h4>{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accrodion-content">
                      The different types of media include traditional media
                      (television, radio, print), digital media (online, social
                      media), and emerging media (virtual reality, augmented
                      reality).
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    <Accordion.Header className="accrodion-title">
                      <h4>What is the role of media in society?</h4>{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accrodion-content">
                      The role of media in society is to inform, educate, and
                      entertain the public, as well as to provide a platform for
                      the exchange of ideas and perspectives. Media also plays a
                      crucial role in shaping public opinion and influencing
                      public policy.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    eventKey="2"
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    <Accordion.Header className="accrodion-title">
                      <h4>What are the benefits of media promotions?</h4>{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accrodion-content">
                      <ul>
                        <li>Increased brand awareness</li>
                        <li>Targeted audience reach</li>
                        <li>Immediate impact and results</li>
                        <li>Cost-effective marketing</li>
                        <li>Ability to track results and ROI</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    <Accordion.Header className="accrodion-title">
                      <h4>
                        What are the factors to consider when planning a media
                        promotion?
                      </h4>{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accrodion-content">
                      <ul>
                        <li> Target audience</li>
                        <li> Budget</li>
                        <li> Media channels</li>
                        <li>Timing of promotion</li>
                        <li>Message and content</li>
                        <li>Measurable goals and KPIs</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    <Accordion.Header className="accrodion-title">
                      <h4>
                        How do I measure the success of my media promotion?
                      </h4>{" "}
                    </Accordion.Header>
                    <Accordion.Body className="accrodion-content">
                      <ul>
                        <li>Track sales and revenue</li>
                        <li>Monitor website traffic and engagement</li>
                        <li>Conduct market research and surveys</li>
                        <li>
                          Analyze ROI and return on advertising spend (ROAS)
                        </li>
                        <li>
                          Compare promotion results with prior sales trends.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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

export default Media;
