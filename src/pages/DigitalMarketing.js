import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SingleService from "./../components/SingleService";
import { Helmet } from "react-helmet";
const DigitalMarketing = () => {
  const MarketingServices = [
    {
      serviceTitle: "SEARCH ENGINE OPTIMIZATION (SEO)",
      serviceDesc:
        "Expose the full potential of your website with our top-rated SEO services. At Waywedesign",
      link: "search-engine-optimization",
    },
    {
      serviceTitle: "SOCIAL MEDIA MARKETING (SMM)",
      serviceDesc:
        "As more and more brands are uplifting with social media advertising, you should ",
      link: "social-media-marketing",
    },
    {
      serviceTitle: "GOOGLE ADS/PPC",
      serviceDesc:
        "Waywedesign is a leading digital marketing company dedicated to helping businesses reach their ",
      link: "google-ads",
    },
    {
      serviceTitle: "Email Marketing",
      serviceDesc:
        "Email marketing is a critical component of a successful digital marketing strategy, and a digital marketing company  ",
      link: "email-marketing",
    },
    {
      serviceTitle: "Digital Branding",
      serviceDesc:
        "We offer professional graphic design services for all your marketing and branding needs.",
      link: "graphic-designing",
    },
    {
      serviceTitle: "Video Production",
      serviceDesc:
        "Video production involves the entire process of creating a video, from pre-production to post-production.",
      link: "video-production",
    },
    {
      serviceTitle: "Content Development",
      serviceDesc:
        "Content marketing has emerged as a crucial component of digital marketing, as it allows",
      link: "content-marketing",
    },
  ];
  const list = [
    {
      li: "Customized Solutions:",
      des: "We provide customized solutions that are adapted to your particular needs and objectives since we recognise that every organization is unique.",
    },
    {
      li: "Advanced Analytics and Reporting:",
      des: "We use state-of-the-art analytics and reporting tools to track your online marketing performance and provide you with real-time insights and data-driven recommendations.",
    },
    {
      li: "Personalized Customer Service:",
      des: " Our team of experts is dedicated to providing you with personalized, one-on-one customer service. We are always available to answer your questions and provide you with the support you need to succeed.",
    },
    {
      li: "Transparent Pricing: ",
      des: "We believe in transparency and honesty, which is why we provide upfront pricing for all of our services. You can trust that you will never be hit with hidden fees or charges.",
    },
    {
      li: "Proven Results:",
      des: "Our digital marketing services have a proven track record of success. We have assisted countless companies with growing their internet presence, generating leads, and boosting revenue.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Digital Marketing - Way WeDesign</title>
        <meta name="description" content="Digital Marketing" />
      </Helmet>
      

      <Breadcrumbs pageurl="digital-marketing" subtitle="Digital Marketing" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="service-details__right">
              
                <div className="service-details__content">
                  <h3 className="service-details__title">DIGITAL MARKETING</h3>
                  <p className="service-details__text ">
                    The modern world around us has offered us new ways to live
                    and explore our lives. Businesses have started to invest
                    more time and resources into their marketing strategy to
                    take advantage of digital marketing tools and plans. By
                    doing this, they can connect with new and potential
                    customers online, generate leads, and sell their services
                    and products more efficiently. </p>
                    <p className="service-details__text ">

                    Waywedesign is a dynamic, versatile, and full-service
                    digital marketing company that is always in pursuit to offer
                    reliable and result-oriented digital marketing services. We
                    trust our own search engine optimization (SEO) and marketing
                    strategies to drive new customers to your website. With
                    out-of-the-box marketing solutions and strategies, we are
                    enabling our clientele to easily build brand awareness among
                    the targeted audience. We are not a static company and we
                    cater to all industries. Waywedesign has years of experience
                    and has a team of professionals to build a custom website
                    and use different digital marketing services to assist all
                    sized industries.
                  </p>
                  <h3 className="service-details__title">
                    Make the leap to Next-gen Digital Marketing
                  </h3>
                  <p className="service-details__text ">
                    We believe in the power of proven SEO and marketing
                    techniques to drive traffic and attract new clients. We
                    don't rely on gimmicks or smoke and mirrors to achieve
                    results. Instead, our team of experts use their extensive
                    knowledge and experience to craft custom digital marketing
                    strategies that deliver real, measurable results.We
                    understand that every business is unique, which is why we
                    don't limit ourselves to specific industries or niches. Our
                    dynamic and versatile approach enables us to provide
                    customized digital marketing services that are tailored to
                    the needs of any size company in any industry. You can count
                    on us to help you reach your business goals, no matter how
                    small or large your company is.Our team consists of
                    experienced professionals who are dedicated to staying
                    up-to-date with the latest trends and technologies in
                    digital marketing. We use a variety of techniques, including
                    SEO, PPC, social media marketing, content marketing, and
                    email marketing, to help you increase your online visibility
                    and drive more qualified traffic to your website.</p>
                    <p className="service-details__text ">
                    We pride ourselves on our commitment to transparency and
                    measurable results. We use advanced tools and analytics to
                    track the performance of your campaigns and provide you with
                    detailed reports that enable you to make informed decisions
                    about your digital marketing strategy.
                  </p>
                  <div className="service-details__img p-5">
                    <img
                      src="/assets/images/resources/digital-marketing-page-banner.jpg"
                      alt="digital-marketing"
                    />
                  </div>
                  <h3 className="service-details__title">
                    How Our Digital Marketing Service will Help you to Grow
                  </h3>
                  <p className="service-details__text ">
                    To help you increase your online presence and connect with
                    your target audience, our digital marketing company provides
                    a wide variety of digital marketing services. Our team of
                    specialists employs cutting-edge methods and tactics to
                    raise brand awareness, improve website traffic, and produce
                    leads that result in sales. You may anticipate gains in your
                    social media engagement, email marketing campaigns, search
                    engine rankings, and more with our digital marketing
                    services. Our customized solutions can assist you in
                    achieving your marketing objectives and staying one step
                    ahead of the competition, regardless of how big or little
                    your company is. To learn more about our digital marketing
                    services and how we can aid in the expansion of your
                    company, get in touch with us right away.
                  </p>
                  <h3 className="service-details__title">Our Features</h3>
                  <ol>
                    {list.map((item, index) => {
                      return (
                        <li>
                        <b style={{color:"#000"}}>{item.li}</b>  
                          {item.des}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div> */}
          </div>
        </div>
      </section>
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">
              Wide Range of Services
            </span>
            <h2 className="section-title__title">Services</h2>
          </div>
          <div className="row">
            {MarketingServices.map((data) => {
              return (
                <SingleService
                  link={data.link}
                  serviceTitle={data.serviceTitle}
                  serviceDesc={data.serviceDesc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
