import React from "react";
import Breadcrumbs from "./../components/Breadcrumbs";

import ServiceSideMenu from "./../components/ServiceSideMenu";
import AccordionFaq from "../components/Accordion";
import { Helmet } from "react-helmet";

const GoogleAds = () => {
  const GoogleAdsFaq = [
    {
      eventkey: 0,
      title: "What is Google Ads?",
      desc: "Google Ads is a platform that allows businesses to place advertisements on Google and its partner websites. Advertisers pay each time someone clicks on one of their ads, hence the name Pay-Per-Click (PPC).",
    },
    {
      eventkey: 1,
      title: "What is PPC advertising?",
      desc: "PPC advertising is a type of online advertising where advertisers pay each time someone clicks on one of their ads. The most popular PPC platform is Google Ads.",
    },
    {
      eventkey: 2,
      title: " How does Google Ads work?",
      desc: "Google Ads works by allowing businesses to create and place ads on Google and its partner websites. Advertisers bid on keywords related to their business, and their ads are displayed to users who search for those keywords.",
    },
    {
      eventkey: 3,
      title: "How much does Google Ads cost?",
      desc: "The cost of Google Ads varies depending on factors such as the competition for keywords, the target audience, and the quality of the ad campaign. Advertisers set a budget for their campaigns and bid on keywords, with the highest bidder usually appearing at the top of the search results.",
    },
    {
      eventkey: 4,
      title: "How do you measure the success of a Google Ads campaign?",
      desc: "The success of a Google Ads campaign can be measured using metrics such as click-through rate (CTR), cost-per-click (CPC), conversion rate, and return on investment (ROI).",
    },
    {
      eventkey: 5,
      title: "What are the benefits of using Google Ads?",
      desc: "The benefits of using Google Ads include increased visibility and traffic, the ability to reach a large and targeted audience, and the ability to measure and track the success of campaigns. PPC advertising can also provide a quick return on investment compared to other forms of advertising.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Google Ads - Way WeDesign</title>
        <meta name="description" content="Google Ads" />
      </Helmet>
 

      <Breadcrumbs pageurl="google-ads" subtitle="GOOGLE ADS/PPC" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/google-ads.jpg"
                    alt="GOOGLE ADS/PPC"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">GOOGLE ADS/PPC</h3>
                  <p className="service-details__text ">
                    Waywedesign is a leading digital marketing company dedicated
                    to helping businesses reach their sales goals and connect
                    with more potential customers through the power of Google
                    Ads. Our team of Google Ads specialists will manage your Pay
                    Per Click (PPC) campaign to help drive relevant traffic to
                    your website.
                    </p>  <p className="service-details__text ">
                    The first step in building a successful campaign is thorough
                    keyword research. Our experts will identify the keywords
                    that are most likely to be used by consumers searching for
                    your products or services, ensuring that your ads reach the
                    right audience. Our specialists will closely monitor the PPC
                    campaigns of your competitors, and use this information to
                    craft a strategy that will help you outrank them and
                    generate more leads.
                    </p>  <p className="service-details__text ">
                    At Waywedesign, we are dedicated to delivering results and
                    keeping you informed every step of the way. Our specialists
                    will provide a monthly report and consultation, so you can
                    stay updated on the progress and performance of your
                    campaign. Whether you're just starting out or looking to
                    improve your existing Google Ads strategy, we have the
                    expertise to help you succeed.
                  </p>
                </div>
                <br />
                <h3 className="service-details__title ">FAQ</h3>
                {GoogleAdsFaq.map((data) => {
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

export default GoogleAds;
