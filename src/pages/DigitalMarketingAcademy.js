import React from "react";
import AccordionFaq from "../components/Accordion";
import Breadcrumbs from "../components/Breadcrumbs";

import ServiceSideMenu from "../components/ServiceSideMenu";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const digitalMarketingAcademy = () => {
  const MarketingAcademyFaq = [
    {
      eventkey: 0,
      title: "What is digital marketing?",
      desc: "Digital marketing is the promotion of products or services using digital technologies, including the internet, mobile devices, and other digital media.",
    },
    {
      eventkey: 1,
      title:
        "What is the curriculum of the digital marketing course offered by Way WeDesign?",
      desc: "The curriculum of the digital marketing course offered by Way WeDesign covers a wide range of topics, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and more.",
    },
    {
      eventkey: 2,
      title: "Who is the digital marketing course intended for?",
      desc: "The digital marketing course is intended for individuals who want to develop their skills in digital marketing, including marketing professionals, business owners, entrepreneurs, and students.",
    },
    {
      eventkey: 3,
      title: "What are the benefits of taking a digital marketing course?",
      desc: "The benefits of taking a digital marketing course include gaining a comprehensive understanding of digital marketing techniques and tools, improving your ability to reach and engage with customers online, and developing the skills you need to succeed in the digital marketing industry.",
    },
    {
      eventkey: 4,
      title: "How long is the digital marketing course?",
      desc: "The length of the digital marketing course offered by Way WeDesign may vary, but it typically takes several weeks or months to complete, depending on the specific program and schedule.",
    },
    {
      eventkey: 5,
      title: "What is the format of the digital marketing course?",
      desc: "The format of the digital marketing course may vary, but it typically includes a combination of online coursework, hands-on projects, and interactive sessions with instructors and other students.",
    },
    {
      eventkey: 6,
      title: "Is the digital marketing course offered online or in-person?",
      desc: "The digital marketing course offered by Way WeDesign may be offered online or in-person, depending on the specific program and location.",
    },
    {
      eventkey: 7,
      title:
        "What are the career prospects after completing the digital marketing course?",
      desc: "Upon completing the digital marketing course offered by Way WeDesign, individuals may pursue careers in a variety of roles, including digital marketing specialist, marketing manager, content creator, and more.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Digital Marketing Academy - Way WeDesign</title>
        <meta name="description" content="Digital Marketing Academy" />
      </Helmet>
     
      <Breadcrumbs
        pageurl="digital-marketing-academy"
        subtitle="DIGITAL MARKETING ACADEMY"
      />

      {/* <ServiceSideMenu /> */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/digital-marketing-academy.jpg"
                    alt="digital-marketing-academy"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">
                    DIGITAL MARKETING ACADEMY
                  </h3>
                  <p className="service-details__text ">
                    The scope of digital marketing has greatly expanded in
                    recent years, as more and more businesses recognize the
                    importance of having a strong online presence. With the rise
                    of e-commerce and the increasing use of the internet for research and
                    communication, digital marketing has become a crucial tool
                    for reaching and engaging with customers.
                   </p>                    <p className="service-details__text ">

                    Given the growing demand for digital marketing skills and
                    the rapid pace of change in the industry, it's no surprise
                    that many individuals are seeking to develop their digital
                    marketing knowledge and expertise. This is why Way WeDesign
                    started its digital market academy - to provide individuals
                    with the training and skills they need to succeed in this
                    exciting and dynamic field.</p>
                    <p className="service-details__text ">

                    By offering a comprehensive curriculum that covers the
                    latest digital marketing techniques and tools, the digital
                    market academy provides individuals with the knowledge and
                    skills they need to succeed in a variety of roles, from
                    marketing to sales and beyond. Whether you're just starting
                    out in your career or looking to take your skills to the
                    next level, the digital market academy is an excellent
                    resource for anyone looking to succeed in the world of
                    digital marketing.
                  </p>
                  <br></br>
                  <Link class="about-one__btn thm-btn" target="_blank" to="https://waywedesign.com/digital-marketing-course/">View More</Link>
                </div>

                <div className="py-5">
                  <h3 className="service-details__title ">FAQ</h3>

                  {MarketingAcademyFaq.map((faq) => (
                    <AccordionFaq
                      eventkey={faq.eventkey}
                      title={faq.title}
                      desc={faq.desc}
                    />
                  ))}
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

export default digitalMarketingAcademy;
