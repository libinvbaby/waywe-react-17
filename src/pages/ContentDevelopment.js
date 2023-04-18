import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";
import AccordionFaq from "../components/Accordion";

const ContentDevelopment = () => {
  const faq = [
    {
      eventkey: 0,
      title: "What is content marketing?",
      desc: " Content marketing is a marketing strategy that involves the creation and sharing of valuable, relevant, and engaging content in order to attract and retain an audience.",
    },
    {
      eventkey: 1,
      title: "What are some examples of content marketing?",
      desc: "Examples of content marketing include blog posts, articles, videos, info graphics, podcasts, and social media updates.",
    },
    {
      eventkey: 2,
      title: "Why is content marketing important?",
      desc: "Content marketing is important because it helps businesses establish themselves as thought leaders and trusted advisors in their industry, build brand awareness, and foster customer loyalty.",
    },
    {
      eventkey: 3,
      title: "How does content marketing differ from traditional marketing?",
      desc: "Traditional marketing is focused on promoting a product or service directly to the customer, while content marketing is focused on providing valuable information and engaging the customer in a conversation.",
    },
    {
      eventkey: 4,
      title: "How can a digital marketing company help with content marketing?",
      desc: "A digital marketing company can help with content marketing by developing a comprehensive content strategy, creating and optimizing content, and promoting it through various channels.",
    },
    {
      eventkey: 5,
      title: "How do you measure the success of content marketing?",
      desc: "The success of content marketing can be measured by tracking metrics such as website traffic, engagement rates, lead generation, and conversion rates.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Content Marketing - Way WeDesign</title>
        <meta name="description" content="CONTENT MARKETING" />
      </Helmet>

      <Breadcrumbs
        pageurl="content-marketing"
        subtitle="CONTENT MARKETING
"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/content-development.jpg"
                    alt="content-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">Content Marketing</h3>
                  <p className="service-details__text ">
                    Content marketing has emerged as a crucial component of
                    digital marketing, as it allows businesses to connect with
                    their target audience in a meaningful way. As a service
                    provided by a digital marketing company, content marketing
                    involves the creation and distribution of valuable,
                    relevant, and engaging content that attracts and retains a
                    clearly defined audience. This content can take many forms,
                    including blog posts, articles, videos, info graphics,
                    podcasts, and social media updates. </p>  <p className="service-details__text ">
                    The goal of content marketing is to establish a business as
                    an authority in its industry, build brand awareness, and
                    foster customer loyalty. By creating content that speaks to
                    the needs and interests of their target audience, businesses
                    can position themselves as thought leaders and trusted
                    advisors. This can help to differentiate them from
                    competitors and drive more traffic, leads, and conversions.
                     </p>  <p className="service-details__text ">
                    Digital marketing companies that offer content marketing
                    services typically have a team of experienced writers,
                    designers, and strategists who work together to develop a
                    comprehensive content strategy. This involves researching
                    the target audience, identifying key topics and themes, and
                    mapping out a content calendar. The team will also be
                    responsible for creating the content itself, optimizing it
                    for search engines and social media, and promoting it
                    through various channels.
                  </p>
                </div>
              </div>
              <div className="py-5">
                <h3 className="service-details__title ">FAQ</h3>
                {faq.map((data) => {
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
            <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentDevelopment;
