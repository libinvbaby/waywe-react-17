import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import AccordionFaq from "../components/Accordion";
import { Helmet } from "react-helmet";

const SEO = () => {
  const SeoFaq = [
    {
      eventkey: 0,
      title: "What is SEO and how does it work?",
      desc: "SEO is a digital marketing strategy that aims to improve the visibility and ranking of a website in search engine results pages (SERPs). It works by optimizing various on-page and off-page elements to make a website more attractive to search engines and its users.",
    },
    {
      eventkey: 1,
      title: "Why is SEO important for businesses?",
      desc: "SEO is important because it helps businesses to reach their target audience more effectively and increase their online visibility. It can drive more organic traffic to a website, which can lead to increased sales, brand awareness, and credibility.",
    },
    {
      eventkey: 2,
      title: "How do search engines rank websites?",
      desc: "Search engines use algorithms to rank websites based on various factors such as relevance, quality, and authority. These algorithms analyze the content, structure, and links of a website to determine its relevance and ranking.",
    },
    {
      eventkey: 3,
      title: "What are keywords in SEO?",
      desc: "Keywords are terms or phrases that people use to search for information on the web. In SEO, keywords are used to optimize content and help search engines understand what a website is about.",
    },
    {
      eventkey: 4,
      title: "How long does it take to see results from SEO?",
      desc: "The time it takes to see results from SEO varies, depending on factors such as the competitiveness of the industry, the size of the website, and the quality of the optimization efforts. It can take several months to see significant results, but it is important to be patient and persistent in the optimization process.",
    },
    {
      eventkey: 5,
      title: "Is SEO a one-time process?",
      desc: "No, SEO is not a one-time process. It is an ongoing effort that requires regular maintenance and updates to stay ahead of the competition and maintain a high ranking in search engine results pages.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>SEO - Way WeDesign</title>
        <meta name="description" content="search engine optimization" />
      </Helmet>
      

      <Breadcrumbs
        pageurl="search-engine-optimization"
        subtitle="SEARCH ENGINE OPTIMIZATION"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/seo-banner.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">
                    SEARCH ENGINE OPTIMIZATION (SEO)
                  </h3>
                  <p className="service-details__text ">
                    Expose the full potential of your website with our top-rated
                    SEO services. At Waywedesign we do what we said and
                    understand the latest techniques for ranking on Google. We
                    can offer you highly modified SEO strategies articulated
                    through an in-depth and broad study of multiple factors.
                    Search Engine Optimization is the lifeblood of any business
                    in the Internet era. Waywedesign is at the pole position
                    offering entities with superior visibility on Google. Our
                    services have delivered remarkable advancements in ROI for
                    businesses World Wide. A noticeable and active online
                    presence on the search engines is the key to acquiring
                    potential customers and improving the brand name, and that
                    is what we promise you. With our custom month-to-month
                    approach to SEO, Google will rank you #1 and we offer
                    reliable service for your business. Contact us today for a
                    free SEO consultation with us. </p>                    <p className="service-details__text ">

                    A customer would purchase a product /service only after
                    researching online, imagine your product or service is not
                    on the top list of Google, Will your product gets sold
                    easily? No right. They only click the website which is
                    listed on top. We help your website ranking top positions in
                    the natural search results. And we only use ethical and
                    white hat SEO methods to secure top positions in search
                    rankings, ensuring that the results are more effective and
                    everlasting. Our SEO company is breaking far away from
                    restrictive service plans and developing absolutely custom
                    digital marketing methods that take you to the front page.
                    </p>                    <p className="service-details__text ">

                    Not started yet?
                    </p>                    <p className="service-details__text ">

                    People are searching for particular products and services,
                    you may be a supplier of those products or services, but
                    never got a call for an order. Then it's time to think of a
                    remedy. Our SEO Company provides the most effective methods
                    for ranking your website on the top list of Google. SEO has
                    become the trendy acronym amongst aspiring entrepreneurs. It
                    is jargon that is often used to convince someone that they
                    are skilled in their own business. We at Waywedesign proudly
                    providing quality SEO for years. As an authority in SEO, we
                    take chance to educate the entrepreneurs. We use it as an
                    opportunity to show the light! Now You are looking for SEO
                    as you clearly know that if you want to maximize your ROI
                    then your website has to be on the top page of Google. The
                    search engine is constantly updating algorithms and that is
                    the main reason most SEO companies are failing. So that the
                    majority of small, mid, large-sized companies hire
                    Waywedesign for performing SEO.
                  </p>                    <p className="service-details__text ">

                    We give a new life to your website, updating just once a
                    month doesn’t help your website to rank better. Choose
                    Waywedesign to handle your SEO as we have got experienced
                    over the years and we have been learning SEO day-day and we
                    provide the best SEO service to our clients and we change
                    the rules as google does
                  </p>
                </div>
                <br />
                <h3 className="service-details__title ">FAQ</h3>
                {SeoFaq.map((data) => {
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

export default SEO;
