import React from 'react'

const ImproveSection = () => {
  return (
    <div>
         {/*Improve One Start*/}
         <section className="improve-one">
          <div
            className="improve-one-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/arrow-background.jpg)",
            }}
          />
          <div className="improve-one-bg-overly" />
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div   data-aos="fade-up-right"
                  className="improve-one__left wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="improve-one__img-box">
                    <div className="improve-one__img">
                      <img
                        src="assets/images/resources/missionandvision.png"
                        alt="mission and vision"
                      />
                    </div>
                    <div className="improve-one__project-complete">
                      <p>100+ Projects are completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="improve-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      IT Technology
                    </span>
                    <h2 className="section-title__title">
                      Mission and Vision
                    </h2>
                  </div>
                  <ul className="list-unstyled improve-one__points">
                    <li>
                      <div className="icon">
                        <span className="icon-artificial-intelligence" />
                      </div>
                      <div className="text">
                        <h3>MISSION</h3>
                        <p>
                        Delivering innovative and reliable solutions to fulfill the requirements of our clients with exceptional standards and uncompromising integrity
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-ai" />
                      </div>
                      <div className="text">
                        <h3>VISSION</h3>
                        <p className="pb-5">
                        To be leading Web Solutions Company in the IT industry, our goal is to continue to solidify our position in the market. We know that the success of our clients is directly tied to our own success, and we are committed to helping them achieve their business goals. We are committed to providing accurate, high-quality work. We strive to be recognized as a reliable, innovative and user-friendly service provider in the IT industry.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Improve One End*/}
    </div>
  )
}

export default ImproveSection