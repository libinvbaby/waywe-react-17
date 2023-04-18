import React from 'react'
import { Link } from 'react-router-dom';

const CoreValue = () => {
  return (
    <div>
        {/*Help Start*/}
<section className="help">
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <ul className="help__box list-unstyled clearfix">
          <li  className="help__single help__box-one wow fadeInLeft" data-wow-delay="100ms">
            <div className="help__box-one-content">
              <h3 className="help__box-one-title">Our Core Values</h3>
            </div>
            <div className="help__box-one-img">
              <img src="assets/images/resources/help-box-one-img-1.jpg" alt="help box image" />
            </div>
          </li>
          <li data-aos="fade-up-right" className="help__single help__box-two wow fadeInLeft" data-wow-delay="300ms">
            <div className="help__box-two-content">
              <div className="help__box-two-icon">
                <span className="icon-learning" />
              </div>
              <h3 className="help__box-two-title"><Link href="it-consultancy.html">CAREFUL</Link></h3>
              <p className="help__box-two-text">We craft your brand with great care implementing inventive concepts and innovative approaches</p>
            </div>
          </li>
          <li data-aos="fade-up-right" className="help__single help__box-two wow fadeInLeft" data-wow-delay="600ms">
            <div className="help__box-two-content">
              <div className="help__box-two-icon">
                <span className="icon-verify" />
              </div>
              <h3 className="help__box-two-title"><Link href="cyber-security.html">COMMITTED

</Link>
              </h3>
              <p className="help__box-two-text">We are dedicated to serving you with the right digital solutions to take your brand to the next level

</p>
            </div>
          </li>
          <li data-aos="fade-up-right" className="help__single help__box-two help__box-last wow fadeInLeft" data-wow-delay="900ms">
            <div className="help__box-two-content">
              <div className="help__box-two-icon">
                <span className="icon-cloud" />
              </div>
              <h3 className="help__box-two-title"><Link href="cloud-computing.html">CREATIVE</Link>
              </h3>
              <p className="help__box-two-text">With unique graphic details that spark creativity, we enhance leads and sales for your business

</p>
            </div>
          </li>
          <li data-aos="fade-up-right" className="help__single help__box-two help__box-last wow fadeInLeft" data-wow-delay="900ms">
            <div className="help__box-two-content">
              <div className="help__box-two-icon">
                <span className="icon-cloud" />
              </div>
              <h3 className="help__box-two-title"><Link href="cloud-computing.html">COST-EFFECTIVE

</Link>
              </h3>
              <p className="help__box-two-text">We make your digital dreams a reality with our cost-effective & lucrative digital marketing packages

</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/*Help End*/}

    </div>
  )
}

export default CoreValue