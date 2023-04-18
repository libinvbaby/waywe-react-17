import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import AccordionFaq from "../components/Accordion";
import { Helmet } from "react-helmet";

const IotDevelopment = () => {
  const IotDevelopmentFaq = [
    {
      eventkey: 0,
      title: "What is software development?",
      desc: "Software development is the process of designing, coding, testing, and maintaining software applications",
    },
    {
      eventkey: 1,
      title: "What is a platform?",
      desc: "A platform is a set of hardware and software technologies that support the development and execution of software applications",
    },
    {
      eventkey: 2,
      title: "What is the difference between software and platform?",
      desc: "Software refers to a specific application or program, while a platform refers to the underlying technology that supports the development and execution of software.",
    },
    {
      eventkey: 3,
      title: "What are the popular software development methodologies?",
      desc: "Agile, Waterfall, Scrum, Kanban, and Lean are popular software development methodologies.",
    },
    {
      eventkey: 4,
      title: "What is Agile development?",
      desc: "Agile development is a iterative and flexible approach to software development that emphasizes collaboration, customer involvement, and rapid iteration.",
    },
    {
      eventkey: 4,
      title: "What is Scrum in software development?",
      desc: "Scrum is an Agile framework for managing and completing complex projects. It emphasizes collaboration, flexibility, and continuous improvement.",
    },
    {
      eventkey: 4,
      title: "What are the popular software development platforms?",
      desc: "Popular software development platforms include Windows, Linux, macOS, Android, and iOS.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>IOT Development - Way WeDesign</title>
        <meta name="description" content="IOT Development" />
      </Helmet>
      
      <Breadcrumbs pageurl="iot-evelopment" subtitle="IOT DEVELOPMENT" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/IotDevelopment.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">IOT DEVELOPMENT</h3>
                  <p className="service-details__text ">
                    Our embedded device development services include the latest
                    technology and best practices to ensure high quality
                    products for our customers. We have a team of professionals
                    with industrial experience in the latest technologies to
                    help our customers transform their innovative ideas into
                    distinct products. We also provide support and development
                    services for embedded products and real-time operating
                    systems-based products with high accuracy.
                  </p>
                </div>
                <div class="service-details__benefits">
                  <div class="row">
                    <div cl ass="col-xl-6">
                      <div class="service-details__benefits-text">
                        <p class="service-details__benefits-text">
                          <ul>
                            <li>
                              <h6 class="service_list"> IOT PROJECTS</h6>
                            </li>
                            <li>
                              <h6 class="service_list">HOME AUTOMATION</h6>
                            </li>
                            <li>
                              <h6 class="service_list">PCB DESIGNING</h6>
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  {IotDevelopmentFaq.map((data) => {
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

export default IotDevelopment;
