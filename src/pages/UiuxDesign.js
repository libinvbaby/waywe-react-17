import React from 'react'
import Breadcrumbs from "./../components/Breadcrumbs";
import ServiceSideMenu from "./../components/ServiceSideMenu";
import { Helmet } from "react-helmet";
import AccordionFaq from "../components/Accordion";


const UiuxDesign= () => {

  const faq=[
    {
      eventkey:0,
      title: "What is UI design",
      answer:" UI design focuses on the visual aspects of the user interface, including layout, typography, color schemes, and branding."
    },
    {
      eventkey:1,
      title: "What is UX design?",
      answer:"UX design focuses on the overall user experience, including usability, accessibility, and user engagement."
    },
    {
      eventkey:2,
      title: " How are UI and UX related?",
      answer:"UI and UX are interdependent terms. UI design deals with the interaction between users and computer systems, software and applications, while UX deals more generally with a user's overall experience with a brand, product, or service."
    },
    {
      eventkey:3,
      title: "What does a UI/UX designer do?",
      answer:"A UI/UX designer is responsible for overall user satisfaction with a product or service. They create intuitive, user-friendly interfaces that provide a seamless user experience"
    },
    {
      eventkey:4,
      title: " How do UI/UX designers improve user experience?",
      answer:"UI/UX designers improve user experience by continually looking for ways to improve the product experience, such as making the product faster, easier to use, or more fun."
    },
    {
      eventkey:5,
      title: " Why is UI/UX design important?",
      answer:"UI/UX design is important because it helps to create a positive user experience, which can increase user engagement, drive customer loyalty, and ultimately lead to higher conversion rates."
    },

    {
      eventkey:6,
      title: " How can a digital marketing company help with UI/UX design?",
      answer:"A digital marketing company can help with UI/UX design by providing the expertise and resources needed to create an effective UI/UX design strategy that meets the needs of both the client and their target audience"
    },
   
  ]
  return (
    <>
    <Helmet>
      <title>UI UX Design - Way WeDesign</title>
      <meta name="description" content="UI UX Design" />
    </Helmet>
   
    <Breadcrumbs pageurl="ui-ux-design" subtitle="UI UX Design" />

    <section className="service-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <img
                  src="/assets/images/resources/UI-UX design.jpg"
                  alt="uiux design"
                />
              </div>
              <div className="service-details__content">
                <h3 className="service-details__title">UI UX Design</h3>
                <p className="service-details__text ">
                As a service provided by a digital marketing company, UI/UX design is a critical component of creating a successful digital product or service. UI/UX designers work closely with clients to create intuitive, user-friendly interfaces that provide a seamless user experience.
</p>                    <p className="service-details__text ">

The UI design focuses on the visual aspects of the user interface, including layout, typography, color schemes, and branding. The UI designer's goal is to create an interface that is visually appealing and easy to navigate, while also reflecting the client's brand identity.
</p>                    <p className="service-details__text ">

The UX design, on the other hand, focuses on the overall user experience, including usability, accessibility, and user engagement. The UX designer's goal is to ensure that the product or service is easy to use and meets the needs of the target audience.
</p>                    <p className="service-details__text ">

To achieve these goals, UI/UX designers work closely with clients to understand their target audience, business objectives, and brand identity. They then use this information to create wireframes and prototypes that can be tested and refined to ensure a seamless user experience.

                </p>
              </div>
              <h3 className="service-details__title pt-3">FAQ</h3>

              {faq.map((data,index)=>{
                return(
                              <AccordionFaq
                              eventkey={data.eventkey}
                              title={data.title}
                              desc={data.answer}/>
                )
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
  )
}

export default UiuxDesign