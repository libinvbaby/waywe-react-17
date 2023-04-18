import React from 'react'
import { Link } from 'react-router-dom'
const ServiceSideMenu = () => {
  return (
    
    
//    
<>
<div className="service-details__sidebar mt-3">
          <div className="service-details__sidebar-service">
            <h4 className="service-details__sidebar-title">Our Services</h4>
            <ul className="service-details__sidebar-service-list list-unstyled">
              <li><Link to="/software-development-platform">Software & Platform  <span className="icon-right-arrow" /></Link>
              </li>
              <li><Link to="/digital-marketing">Digital Marketing <span className="icon-right-arrow" /></Link>
              </li>
              <li><Link to="/web-development">Web Development <span className="icon-right-arrow" /></Link>
              </li>
              <li><Link to="/cloud-service">Cloud Service<span className="icon-right-arrow" /></Link></li>
              <li><Link to="/hrm">HRM <span className="icon-right-arrow" /></Link></li>
              <li><Link to="/ui-ux-design">UI UX Design <span className="icon-right-arrow" /></Link></li>
              <li><Link to="/digital-marketing-academy"> Digital Academy<span className="icon-right-arrow" /></Link></li>
            </ul>
          </div>
          <div className="service-details__need-help">
            <div className="service-details__need-help-bg" style={{backgroundImage: 'url(/assets/images/backgrounds/service-details-need-help-bg.webp)'}}>
            </div>
            <div className="service-details__need-help-bg-overly" />
            <div className="service-details__need-help-icon">
              <img src="/assets/images/shapes/phone-icon.png" alt="phone icon" />
            </div>
            <h2 className="service-details__need-help-text-box">Get Professional Help to Solve <br /> IT
              Software Problems</h2>
            <div className="service-details__need-help-contact">
              <a href="tel:+91 7994643673">+91 799 464 3673</a>
             
            </div>
          </div>
        </div></>
  )
}

export default ServiceSideMenu