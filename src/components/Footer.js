import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import IotDevelopment from './../pages/IotDevelopment';

const Footer = () => {
  return (
    <div>
         {/*Site Footer One Start*/}
         <footer className="site-footer">
          <div className="site-footer__top">
            <div className="container">
              <div className="site-footer__top-inner">
                <div
                  className="site-footer-map"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/footer-bg.png)",
                  }}
                />
                <div className="row">
                  <div data-aos="fade-up"
                    className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <a href="index.html">
                          <img width="130px"
                            src={logo}
                            alt="logo"
                          />
                        </a>
                      </div>
                      <p className="footer-widget__about-text">
                      Waywedesign specializes in offering Digital Marketing services such as Social Media Marketing (SMM), Paid Advertisements, Search Engine Marketing (SEM), Search Engine Optimization (SEO), Video Marketing, and other Online Promotions. Our customized solutions, cost-effective package, and customer-centric approach makes us the best internet marketing agency in Kochi, Kerala


                      </p>
                      <div className="footer-widget__about-social">
                      <Link target={"_blank"} to="https://wa.me/+917994643673">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link target={"_blank"} to="https://www.instagram.com/waywedesign/">
                          <i className="fab fa-instagram" />
                        </Link>
                       
                        <Link target={"_blank"} to="https://www.linkedin.com/company/13701254/">
                          <i className="fab fa-linkedin" />
                        </Link>
                        <Link target={"_blank"} to="https://www.behance.net/waywedesign">
                          <i className="fab fa-behance" />
                        </Link>
                        <Link target={"_blank"} to="https://twitter.com/waywedesign">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link target={"_blank"} to="https://www.facebook.com/contact.waywedesign/">
                          <i className="fab fa-facebook" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up-right"
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="footer-widget__column footer-widget__links clearfix">
                      <h3 className="footer-widget__title">Links</h3>
                      <ul className="footer-widget__links-list list-unstyled clearfix">
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/software-development-platform">Software Platform</Link>
                        </li>
                        <li>
                          <Link to="/digital-marketing">Digital Marketing</Link>
                        </li>
                        <li>
                          <Link to="/web-development">Web Development</Link>
                        </li>
                        <li>
                          <Link to="cloud-service">Cloud Service</Link>
                        </li>
                        <li>
                          <Link to="hrm">HRM</Link>
                        </li>
                        <li>
                          <Link to="ui-ux-design">UI UX Design</Link>
                        </li>
                        <li>
                          <Link to="digital-marketing-academy">Digital Academy</Link>
                        </li>
                      </ul>
                     
                    </div>
                  </div>
                  <div data-aos="fade-up-right"
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="footer-widget__column footer-widget__contact">
                      <h3 className="footer-widget__title">Contact</h3>
                      <h5 class="text-white">India</h5>
                      <p className="footer-widget__contact-text">
                      Way WeDesign,
47/1403A,Ivees, MRERA-69, Chalikkavattom, Vennala
Kochi, Kerala
682028
                      </p>
                      <ul className="list-unstyled footer-widget__contact-list">
                        <li>
                          <div className="icon">
                            <span className="icon-email" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="mailto:contact@waywedesign.com">
                              contact@waywedesign.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          
                          <div className="icon">
                            <span className="icon-telephone" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel:+917994643673">+91 799 464 3673</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <br></br>
                      <h5 class="text-white">UAE</h5>
                      <p className="footer-widget__contact-text">
                      Dusseldorf Business Point,
Al Barsha 1, Dubai, United Arab Emirates
P.O.BOX: 5003517
                      </p>
                      <ul className="list-unstyled footer-widget__contact-list">
                    
                        <li>
                          
                          <div className="icon">
                            <span className="icon-telephone" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel: +971544016452"> +971 544 016 452</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="site-footer__bottom-container">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__bottom-left">
                        <p className="site-footer__bottom-text">
                          © All Copyright <span className="dynamic-year"></span>
                          {/* /.dynamic-year */} by{" "}
                          <Link to="/">WayWeDesign</Link>
                        </p>
                      </div>
                      <div className="site-footer__bottom-right">
                        <ul className="list-unstyled site-footer__bottom-menu">
                          <li>
                            <Link to="terms-and-conditions">Terms &amp; Condition</Link>
                          </li>
                          
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Site Footer One End*/}
        {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src={logo}
                width={155}
                alt="logo"
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:contact@waywedesign.com">
              contact@waywedesign.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+91 799 464 3673">+91 799 464 3673</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
            <Link to="https://wa.me/+917994643673">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link to="https://www.instagram.com/waywedesign/">
                          <i className="fab fa-instagram" />
                        </Link>
                       
                        <Link to="https://www.linkedin.com/company/13701254/">
                          <i className="fab fa-linkedin" />
                        </Link>
                        <Link to="https://www.behance.net/waywedesign">
                          <i className="fab fa-behance" />
                        </Link>
                        <Link to="https://twitter.com/waywedesign">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="https://www.facebook.com/contact.waywedesign/">
                          <i className="fab fa-facebook" />
                        </Link>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
    </div>
  )
}

export default Footer