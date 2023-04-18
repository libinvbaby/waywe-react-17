import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import AccordionFaq from "../components/Accordion";
import { Helmet } from "react-helmet";

const Hrm = () => {
  const HrmFaq = [
    {
      eventkey: 0,
      title: "What industries commonly hire remote employees in India?",
      desc: "Common industries that hire remote employees in India include IT, finance, customer service, and marketing.",
    },
    {
      eventkey: 1,
      title: "What are the requirements for hiring remote employees in India?",
      desc: "The requirements for hiring remote employees in India vary depending on the company and the type of role. However, common requirements include a reliable internet connection, a computer or laptop, and the necessary software and tools for the job.",
    },
    {
      eventkey: 2,
      title: "What are the best ways to manage remote employees in India?",
      desc: "The best ways to manage remote employees in India include setting clear expectations, providing regular feedback and support, and using project management tools to stay organized and on track.",
    },
    {
      eventkey: 3,
      title: "What are the challenges of hiring remote employees in India?",
      desc: "Some of the challenges of hiring remote employees in India include time zone differences, communication barriers, and difficulties in building a strong team culture.",
    },
    {
      eventkey: 4,
      title:
        "How do you ensure the quality of work from remote employees in India?",
      desc: "To ensure the quality of work from remote employees in India, it is important to establish clear expectations, provide regular feedback and support, and use performance metrics to measure success. Additionally, it is important to have a strong onboarding process to ensure that new employees have the necessary training and resources to succeed in their role.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>HRM - Way WeDesign</title>
        <meta name="description" content="HRM" />
      </Helmet>
 

      <Breadcrumbs pageurl="hrm" subtitle="HRM" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/hrm-service.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">HRM</h3>
                  <p className="service-details__text ">
                    Our talent acquisition team focus on offering the best. They
                    have a deep understanding of candidates in several verticals
                    and as specialists, know which one of them would fit right
                    into your company. Having a pool of talent helps us to
                    consistently staff projects on time, comply with client and
                    candidate needs within the mentioned budget.
                  </p>
                </div>
                <div class="service-details__benefits">
                  <div class="row">
                    <div cl ass="col-xl-6">
                      <div class="service-details__benefits-text">
                        <h4 class="service-details__benefits-title">
                          Professional Staffing
                        </h4>
                        <p class="service-details__benefits-text">
                          Industries across the globe resort to different
                          strategies when it comes to attracting the right
                          talent. As the economy is growing, there is also a
                          huge gap in demand and supply of core talent,
                          especially in niche areas. Our professional staffing
                          segment specifically caters to bridging the
                          inadequacies your organization might have at meeting
                          the growing demands of your business. Our team focuses
                          on providing the best fit primarily focusing on skill
                          fulfillment.
                        </p>
                        <br />
                        <h4 class="service-details__benefits-title">
                          Outsourcing
                        </h4>
                        <p class="service-details__benefits-text">
                          We have seen a paradigm shift in traditional staffing
                          solutions where companies are currently on the lookout
                          for more economical ways of staffing, particularly
                          outsourcing. Organizations that have people working on
                          multiple projects and in numerous industries at the
                          same time are looking for an efficient way to plan for
                          workforce needs and measure team performance.
                         </p>
                         <p className="service-details__text ">

                          Comprehending what drives our outsourcing customers is
                          essential to the success of our business
                          relationships. Providing quality candidates and a
                          wealth of resources is what make our “managed
                          staffing” program dynamic. Evaluating KPI's (Key
                          Performance Indicators) that are important to our
                          clients dramatically enhances theimport {Helmet} from
                          'react-helmet'; ir productivity levels by assigning
                          the right people to job tasks. We follow an intensive
                          recruitment process to ensure that the best talent is
                          delivered to you.
                          <br />
                          <ol>
                            <li>
                              <h6 class="service_list">SOURCING</h6>
                              <p>
                                Our team's top-notch networking and large pool
                                of candidates for IT and related services will
                                give you a chance to diversify your team keeping
                                in mind maximum efficiency and talent.
                              </p>
                            </li>
                            <li>
                              <h6 class="service_list">
                                SCREENING, FILTERING AND SHORLISTING
                              </h6>
                              <p>
                                Our staffing specialists have hands-on
                                understanding of industry operations and
                                requirements for IT and related services. This
                                ensures we validate the credentials of
                                candidates in a highly professional manner. We
                                set up interviews with HR professionals and
                                domain experts, who are readily available deal
                                with any concerns or queries that arise during
                                the interview process.
                              </p>
                            </li>
                            <li>
                              <h6 class="service_list">
                                SCHEDULING AN INTERVIEW
                              </h6>
                              <p>
                                After the candidate has been shortlisted at our
                                end of the recruitment process, we will schedule
                                an interview date with you based on mutual
                                availability.
                              </p>
                            </li>
                          </ol>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  <h3 className="service-details__title ">FAQ</h3>
                  <p class="service-details__benefits-text">
                    Are you looking for a way to attract talent and efficiently
                    staff your organization without additional expense and
                    tedious efforts? Are you searching for better ways to manage
                    your team's revenue and at the same time tackle the
                    increased manpower you would need to keep up with the
                    demands? If any of these questions fit your current company
                    needs, you're at the right place. If you're a company
                    outside India, you could consider expanding your staffing by
                    hiring remote employees in India. If you're a company in
                    India, we make sure to diligently provide top talent in
                    verticals that you aim to recruit personnel. What are the
                    benefits of hiring remote employees in India?
                    <br />
                    Hiring remote employees in India can provide cost savings,
                    access to a large pool of talented professionals, and the
                    ability to scale your workforce quickly.
                  </p>
                  <br />

                  {HrmFaq.map((data) => {
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

export default Hrm;
