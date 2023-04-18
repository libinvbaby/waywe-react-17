import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
  const options={
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1024: {
        items: 1,
      },
      1200: {
        items: 1.6,
      },
    }
  }
  return (
    <div>
         {/*Testimonial One Start*/}
         <section className="testimonial-one">
          <div  />
          <div/>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="testimonial-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Customers Feedbacks
                    </span>
                    <h2 className="section-title__title">
                      What They’re Talking About Company
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="testimonial-one__right">
                  <OwlCarousel
                 
                    loop
                    margin={50}
                    
                    autoplay={true}
                    {...options}
                    className="testimonial-one__carousel owl-theme owl-carousel"
                  >
                    {/*Testimonial One Single*/}
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          {/* <img
                            src="assets/images/testimonial/testimonial-one-img-1.png"
                            alt="cover image"
                          /> */}
                        </div>
                        <div className="testimonial-one__client-details">
                          <h5 className="testimonial-one__client-name">
                            Kevin Martin
                          </h5>
                          <p className="testimonial-one__client-title">
                            Customer
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-one__text">
                      "Way WeDesign has exceeded our expectations in every way. Their team is innovative, proactive, and always willing to go above and beyond."
                      </p>
                      <div className="testimonial-one__quote">
                        <span className="icon-right-quote" />
                      </div>
                    </div>
                    {/*Testimonial One Single*/}
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          {/* <img
                            src="assets/images/testimonial/testimonial-one-img-2.png"
                            alt="cover image"
                          /> */}
                        </div>
                        <div className="testimonial-one__client-details">
                          <h5 className="testimonial-one__client-name">
                            Christine Eve
                          </h5>
                          <p className="testimonial-one__client-title">
                            Customer
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-one__text">
                      "Their attention to detail and commitment to quality is evident in the final product. We were blown away by the level of care and thought put into our project."
                      </p>
                      <div className="testimonial-one__quote">
                        <span className="icon-right-quote" />
                      </div>
                    </div>
                    {/*Testimonial One Single*/}
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-img">
                          {/* <img
                            src="assets/images/testimonial/testimonial-one-img-3.png"
                            alt="cover image"
                          /> */}
                        </div>
                        <div className="testimonial-one__client-details">
                          <h5 className="testimonial-one__client-name">
                            Jon Smith
                          </h5>
                          <p className="testimonial-one__client-title">
                            Customer
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-one__text">
                      "The team's professionalism and attention to detail have been instrumental in the success of our project. They're a pleasure to work with and I highly recommend them."
                      </p>
                      <div className="testimonial-one__quote">
                        <span className="icon-right-quote" />
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Testimonial One End*/}
    </div>
  )
}

export default Testimonial