import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo-wwd.png";
const Menu = () => {
  return (
    <div class="full_width_nav">
      <header className="main-header clearfix">
        <div className="main-header__top clearfix">
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                <li>
                  <div className="icon">
                    <span className="icon-pin" />
                  </div>
                  <div className="text">
                      <a  href="https://goo.gl/maps/ag2TbuBVZkZ3oT9s5" target="blank">
                    <p>Way WeDesign, India</p>
                    </a>
                  </div>
                </li>
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
              </ul>
            </div>
            <div className="main-header__top-right">
              {/* <div className="main-header__top-right-text">
          <p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
        </div> */}
              <div className="main-header__top-right-social">
                <Link target={"_blank"} to="https://wa.me/+917994643673">
                  <i className="fab fa-whatsapp" />
                </Link>
                <Link
                  target={"_blank"}
                  to="https://www.instagram.com/waywedesign/"
                >
                  <i className="fab fa-instagram" />
                </Link>

                <Link
                  target={"_blank"}
                  to="https://www.linkedin.com/company/13701254/"
                >
                  <i className="fab fa-linkedin" />
                </Link>
                <Link
                  target={"_blank"}
                  to="https://www.behance.net/waywedesign"
                >
                  <i className="fab fa-behance" />
                </Link>
                <Link target={"_blank"} to="https://twitter.com/waywedesign">
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  target={"_blank"}
                  to="https://www.facebook.com/contact.waywedesign/"
                >
                  <i className="fab fa-facebook" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar fixed="top" sticky="top" className="main-menu clearfix">
          <div className="main-menu-wrapper clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo">
                  <Navbar.Brand>
                    <Link to="/">
                      <img width="170px" src={logo} alt="logo" />
                    </Link>
                  </Navbar.Brand>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <ul className="main-menu__list">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>

                      <li className="dropdown">
                        <Link> Our Services</Link>
                        <ul>
                          <li className="dropdown">
                            <Link to="/software-development-platform">
                              Software & Platform
                            </Link>
                            <ul>
                              <li>
                                <Link to="/mobile-app-development">
                                  Mobile App Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/retail-and-ecommerce">
                                  Retail And Ecommerce
                                </Link>
                              </li>
                              <li>
                                <Link to="/iot-development">
                                  IOT Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/payroll-management-softwares">
                                  Payroll Management Softwares
                                </Link>
                              </li>
                              <li>
                                <Link to="/erp-crm-solution">
                                  ERP & CRM Solutions{" "}
                                </Link>
                              </li>

                              <li>
                                <Link to="/assessment-platforms">
                                  Assessment Platforms
                                </Link>
                              </li>
                              <li>
                                <Link to="/dashboard-reporting">
                                  Dashboard Reporting
                                </Link>
                              </li>
                              <li>
                                <Link to="/data-labeling">
                                  Data Labelling & Classification
                                </Link>
                              </li>
                              <li>
                                <Link to="/pen-testing">
                                  Pen Testing
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown">
                            <Link to="/digital-marketing">
                              Digital Marketing
                            </Link>
                            <ul>
                              <li>
                                <Link to="/search-engine-optimization">
                                  Search Engine Optimization (SEO)
                                </Link>
                              </li>
                              <li>
                                <Link to="/social-media-marketing">
                                  Social Media Marketing(SMM)
                                </Link>
                              </li>
                              <li>
                                <Link to="/google-ads">
                                  Google Ads
                                </Link>
                              </li>
                              <li>
                                <Link to="/email-marketing">
                                  Email Marketing
                                </Link>
                              </li>

                              <li>
                                <Link to="/graphic-designing">
                                  Digital Branding
                                </Link>
                              </li>
                              <li>
                                <Link to="/video-production">
                                  Video Production
                                </Link>
                              </li>
                              <li>
                                <Link to="/content-marketing">
                                  Content Marketing
                                </Link>
                              </li>
                              {/* <li>
                                <Link to="/digital-marketing/logo-design">
                                  Logo Design
                                </Link>
                              </li>
                              <li>
                                <Link to="/digital-marketing/brochure-design">
                                  Brochure Design
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                          <li>
                            <Link to="/web-development ">Web Development </Link>
                          </li>
                          <li>
                            <Link to="/cloud-service ">Cloud Service </Link>
                          </li>
                          <li className="dropdown">
                            <Link to="/hrm">HRM</Link>
                            <ul>
                              <li>
                                <Link to="/professional-staffing">
                                  Professional Staffing
                                </Link>
                              </li>
                              <li>
                                <Link to="/outsourcing">Outsourcing</Link>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="dropdown">
                            <Link to="">Web Design & Development</Link>
                            <ul>
                              <li>
                                <Link to="/website-design">
                                Website  Design
                                </Link>
                              </li>
                              <li>
                                <Link to="/website-development">
                                Website Development
                                </Link>
                              </li>
                              </ul>
                          </li>
                          */}
                          <li>
                            <Link to="/ui-ux-design">UI/UX Design </Link>
                          </li>

                          <li>
                            <Link to="/digital-marketing-academy">
                              Digital Academy
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/industries">Industries</Link>
                      </li>
                      <li>
                        <Link to="/careers">Careers</Link>
                      </li>

                      <li>
                        <Link to="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <button className="btn btn-primary"><Link class="getquotelink" to="/contact">Get  Quote</Link></button>
                      </li>
                      {/* <li style={{border:"1px solid blue",backgroundColor:"blue",height:'80px'}}>
                        <Link to="/contact">Get A Quote</Link>
                      </li> */}
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </div>
              {/* <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <img src="assets/images/shapes/phone-icon.png" alt />
              </div>
              <div className="main-menu-wrapper__call-number">
                <p>Have any questions?</p>
                <h5>
                  <a href="tel:926668880000">Free: + 92 666 888 0000</a>
                </h5>
              </div>
            </div>
            <div className="main-menu-wrapper__search-box-cart-box">
              <a
                href="#"
                className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
              />

              <a
                href="contact.html"
                className="main-menu-wrapper__cart icon-avatar"
              />
            </div>
          </div> */}
            </div>
          </div>
        </Navbar>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
        {/* /.sticky-header__content */}
      </div>
      {/* /.stricky-header */}

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
                src="assets/images/resources/footer-logo.png"
                width={155}
                alt="footer-logo"
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">
                needhelp@izeetak.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Menu;
