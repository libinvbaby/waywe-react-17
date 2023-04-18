import React from 'react'
import { Link } from 'react-router-dom';

const ServiceOne = () => {
  return (
    <div>
         {/*Services One Start*/}
         <section className="services-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Wide Range of Services
              </span>
              <h2 className="section-title__title">What We’re Offering</h2>
            </div>
            <div className="row">
              <div  data-aos="fade-up-right"
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-conversation" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="it-consultancy.html">
                      Software & Platform <br /> Development
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <Link href="it-consultancy.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="slide-up"
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-app-development" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="custom-software.html">
                      Digital <br /> Marketing
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <Link href="custom-software.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-left"
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-storage" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="cloud-computing.html">
                      Cloud  <br /> Service
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <Link href="cloud-computing.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-right"
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-storage" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="cloud-computing.html">
                      Retail &  <br /> Ecommerce
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <Link href="cloud-computing.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="slide-up"
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-storage" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="cloud-computing.html">
                     HRM
                     <br/>
                     <br/>
                     
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <Link href="cloud-computing.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-left"
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-storage" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="cloud-computing.html">
                      Digital Marketing  <br /> Institute
                    </Link>
                  </h3>
                  <p className="services-one__text">
                    There are many variations of passages of lorem im available,
                    but majority suffered.
                  </p>
                  <div className="services-one__arrow">
                    <Link href="cloud-computing.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Services One End*/}
    </div>
  )
}

export default ServiceOne