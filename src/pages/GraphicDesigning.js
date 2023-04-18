import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceSideMenu from "../components/ServiceSideMenu";
import AccordionFaq from "../components/Accordion";
import { Helmet } from "react-helmet";


const GraphicDesigning = () => {
  const Faq = [
    {
      eventkey: 0,
      title: "What type of design services do you offer?",
      desc: "We offer poster design, brochure design, visiting card design, and logo design services.",
    },
    {
      eventkey: 1,
      title: "How long does it take to complete a design project?",
      desc: "The time it takes to complete a design project depends on the complexity of the project and the number of revisions required. Our team will provide you with an estimated timeline for completion when you place your order.",
    },
    {
      eventkey: 2,
      title: "What is the process for ordering a design project?",
      desc: "The process for ordering a design project begins with a consultation with our team to discuss your design needs and preferences. We will then provide you with a quote for the project and, once the project is approved, begin the design process.",
    },
    {
      eventkey: 3,
      title: "How many revisions are included in the design process?",
      desc: "The number of revisions included in the design process depends on the project and will be discussed during the initial consultation. We strive to ensure that our clients are completely satisfied with the final design and will work with you to make any necessary revisions.",
    },
    {
      eventkey: 4,
      title: "How do I receive the final design files?",
      desc: "The final design files will be delivered to you in the format of your choice (e.g. JPG, PNG, PDF, etc.).",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Graphic Designing - Way WeDesign</title>
        <meta name="description" content="Graphic designing" />
      </Helmet>
      
      <Breadcrumbs pageurl="graphic-designing" subtitle="GRAPHIC DESIGNING" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/graphic-design-banner.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">GRAPHIC DESIGNING</h3>
                  <p className="service-details__text ">
                    We offer professional graphic design services for all your
                    marketing and branding needs. Our team of experienced
                    designers creates visually appealing and effective designs
                    to help you stand out in a competitive market. Our services
                    include:
                  </p>
                </div>
                <div class="service-details__benefits">
                  <div class="row">
                    <div cl ass="col-xl-6">
                      <p class="service-details__benefits-text">
                        <ul>
                          <li>
                            <h6 class="service_list">Poster Design</h6>
                            <p>
                              Our posters are designed to grab the attention of
                              your target audience and convey your message
                              effectively. We create posters that are not only
                              visually appealing but also communicate your brand
                              values and messaging.
                            </p>
                          </li>
                          <li>
                            <h6 class="service_list">Brochure Design</h6>
                            <p>
                              Our brochures are designed to give a comprehensive
                              overview of your products and services. We create
                              brochures that are visually appealing, easy to
                              read, and effectively communicate your brand
                              message.
                            </p>
                          </li>
                          <li>
                            <h6 class="service_list">Visiting Card Design</h6>
                            <p>
                              Our visiting cards are designed to make a lasting
                              impression on your clients and customers. We
                              create visiting cards that are professional,
                              visually appealing, and effectively communicate
                              your brand values and messaging
                            </p>
                          </li>
                          <li>
                            <h6 class="service_list">Logo Design</h6>
                            <p>
                              Our logos are designed to reflect the unique
                              identity of your brand. We create logos that are
                              visually appealing, memorable, and effectively
                              communicate your brand values and messaging.
                            </p>
                          </li>
                        </ul>
                        Our goal is to provide you with high-quality graphic
                        design services that meet your needs and exceed your
                        expectations. Contact us today to learn more about how
                        we can help you achieve your marketing and branding
                        goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  <h3 className="service-details__title ">FAQ</h3>

                  {Faq.map((data) => {
                    return (
                      <AccordionFaq
                        eventkey={data.eventkey}
                        title={data.title}
                        desc={data.desc}
                      />
                    );
                  })}
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

export default GraphicDesigning;
