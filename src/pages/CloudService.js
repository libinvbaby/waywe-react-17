import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ServiceSideMenu from "../components/ServiceSideMenu";
import AccordionFaq from "../components/Accordion";
import { Helmet } from "react-helmet";

const CloudService = () => {
  const CloudServiceData = [
    {
      eventkey: 0,
      title: "What is cloud computing?",
      desc: "Cloud computing is a model of delivering IT services over the internet, where computing resources and data are stored on remote servers and accessed via the internet.",
    },
    {
      eventkey: 1,
      title: "What are the benefits of using cloud services?",
      desc: "The benefits of using cloud services include cost savings, increased scalability and flexibility, and improved security and disaster recovery.",
    },
    {
      eventkey: 2,
      title: "What types of services are offered in the cloud?",
      desc: "Common cloud services include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    },
    {
      eventkey: 3,
      title:
        "How does cloud computing differ from traditional IT infrastructure?",
      desc: "Cloud computing differs from traditional IT infrastructure in that it is delivered over the internet, and users do not need to manage physical hardware or software. This allows for greater scalability and flexibility, as well as reduced costs.",
    },
    {
      eventkey: 4,
      title: "What are the security concerns with cloud computing?",
      desc: "Some of the security concerns with cloud computing include data privacy, data security, and the possibility of service disruptions.",
    },
    {
      eventkey: 5,
      title: "How do you choose a cloud service provider?",
      desc: "When choosing a cloud service provider, it is important to consider factors such as the provider's security and privacy policies, the level of support and reliability offered, and the cost and scalability of the services offered. It is also important to carefully evaluate the provider's reputation and track record in the industry.",
    },
  ];
  return (
    < >
      <Helmet>
        <title>Cloud Service - Way WeDesign</title>
        <meta name="description" content="Cloud Service" />
      </Helmet>
    

      <Breadcrumbs pageurl="cloud-service" subtitle="Cloud Service" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <img
                    src="/assets/images/resources/cloud.jpg"
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h3 className="service-details__title">CLOUD SERVICE</h3>
                  <p className="service-details__text ">
                    Way WeDesign is a leading provider of cloud services,
                    offering optimized technology and association with top
                    providers such as AWS, Microsoft Azure, and Google. Our
                    expert team in Cloud Management provides premium services
                    that help businesses reduce IT costs, scale, maintain
                    continuity, improve collaboration, and access automatic
                    updates in a secure environment. Whether you're a small or
                    large business, our services can help you overcome
                    scalability obstacles and achieve successful cloud
                    strategies.</p>                    <p className="service-details__text ">

                    Way WeDesign’s cloud experts are one of the best in business
                    and provide optimized cloud technology associating with the
                    right cloud partners. With the best supporting team in Cloud
                    Management, we provide premium cloud services too. Our cloud
                    system offers you with reduced IT cost, scalability,
                    business continuity, collaboration efficiency and access to
                    automatic updates, all in a secured environment. At its
                    core, cloud technology is about developing applications and
                    services.</p>                    <p className="service-details__text ">

                    Way WeDesign provides a variety of cloud services in
                    association with AWS, Microsoft Azure, Google, and other
                    leading providers. Our services are popular among businesses
                    of all sizes across the globe.</p>                    <p className="service-details__text ">

                    To overcome obstacles related to scalability, we recommend
                    switching to our cloud platform. With the latest
                    technological advancements and a great team, we are
                    confident in our ability to provide successful cloud
                    strategies.
                  </p>
                </div>

                <div className="py-5">
                  <h3 className="service-details__title ">FAQ</h3>
                  {CloudServiceData.map((data) => {
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

export default CloudService;
