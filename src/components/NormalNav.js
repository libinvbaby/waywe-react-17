import React from 'react'

const NormalNav = () => {
  return (
    <div>
        <div>
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
                <p>66 Road Broklyn Golden Street. New York</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-email" />
              </div>
              <div className="text">
                <p><a href="mailto:needhelp@company.com">needhelp@company.com</a></p>
              </div>
            </li>
          </ul>
        </div>
        <div className="main-header__top-right">
          <div className="main-header__top-right-text">
            <p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
          </div>
          <div className="main-header__top-right-social">
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-pinterest-p" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
    </div>
    <nav className="main-menu clearfix">
      <div className="main-menu-wrapper clearfix">
        <div className="main-menu-wrapper-inner clearfix">
          <div className="main-menu-wrapper__left clearfix">
            <div className="main-menu-wrapper__logo">
              <a href="index.html"><img src="assets/images/resources/logo-1.png" alt="logo" /></a>
            </div>
            <div className="main-menu-wrapper__main-menu">
              <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars" /></a>
              <ul className="main-menu__list">
                <li className="dropdown current">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li><a href="index2.html">Home Two</a></li>
                    <li className="dropdown">
                      <a href="#">Header Styles</a>
                      <ul>
                        <li><a href="index.html">Header One</a></li>
                        <li><a href="index.html">Header Two</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="managed-it.html">Managed It</a></li>
                    <li><a href="it-support.html">IT Support</a></li>
                    <li><a href="it-consultancy.html">IT Consultancy</a></li>
                    <li><a href="cloud-computing.html">Cloud Computing</a></li>
                    <li><a href="cyber-security.html">Cyber Security</a></li>
                    <li><a href="custom-software.html">Custom Software</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Projects</a>
                  <ul>
                    <li><a href="project.html">Projects</a></li>
                    <li><a href="project-details.html">Project Details</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">News</a>
                  <ul>
                    <li><a href="news.html">News</a></li>
                    <li><a href="news-details.html">News Details</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <img src="assets/images/shapes/phone-icon.png" alt="logo" />
              </div>
              <div className="main-menu-wrapper__call-number">
                <p>Have any questions?</p>
                <h5><a href="tel:926668880000">Free: + 92 666 888 0000</a></h5>
              </div>
            </div>
            <div className="main-menu-wrapper__search-box-cart-box">
              <a href="#" className="main-menu-wrapper__search search-toggler icon-magnifying-glass" />
              <a href="contact.html" className="main-menu-wrapper__cart icon-avatar" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div className="stricky-header stricked-menu main-menu">
    <div className="sticky-header__content" />{/* /.sticky-header__content */}
  </div>{/* /.stricky-header */}
</div>

    </div>
  )
}

export default NormalNav