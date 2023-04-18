import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
const ProjectsSlider = () => {
  return (
    <div>
                {/*Project One Start*/}
                <section className="project-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our Case Studies</span>
              <h2 className="section-title__title">Explore Projects</h2>
            </div>
            <OwlCarousel
              className="project-one__carousel owl-theme owl-carousel"
              loop
              items={2}
              margin={10}
            >
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-1.jpg"
                    alt="project image"
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <Link href="project-details.html">Research &amp; Energy</Link>
                  </h2>
                  <div className="project-one__arrow">
                    <Link href="project-details.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-2.jpg"
                    alt="project image"
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <Link href="project-details.html">Research &amp; Energy</Link>
                  </h2>
                  <div className="project-one__arrow">
                    <Link href="project-details.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-3.jpg"
                    alt="project image"
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <Link href="project-details.html">Research &amp; Energy</Link>
                  </h2>
                  <div className="project-one__arrow">
                    <Link href="project-details.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-4.jpg"
                    alt="project image"
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <Link href="project-details.html">Research &amp; Energy</Link>
                  </h2>
                  <div className="project-one__arrow">
                    <Link href="project-details.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-1.jpg"
                    alt="project image"
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <Link href="project-details.html">Research &amp; Energy</Link>
                  </h2>
                  <div className="project-one__arrow">
                    <Link href="project-details.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Project One Single*/}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img
                    src="assets/images/resources/project-one-img-2.jpg"
                    alt="project image"
                  />
                </div>
                <div className="project-one__content">
                  <p className="project-one__tagline">Cloud Services</p>
                  <h2 className="project-one__title">
                    <Link href="project-details.html">Research &amp; Energy</Link>
                  </h2>
                  <div className="project-one__arrow">
                    <Link href="project-details.html">
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        {/*Project One End*/}
    </div>
  )
}

export default ProjectsSlider