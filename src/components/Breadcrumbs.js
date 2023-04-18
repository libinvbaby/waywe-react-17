import React from 'react'
import { Link } from 'react-router-dom'
const Breadcrumbs = (props) => {
  return (
    <div>
        {/*Page Header Start*/}
<section className="page-header">
  <div className="page-header-bg" style={{backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)'}}>
  </div>
  <div className="page-header-bg-overly" />
  <div data-aos="slide-left" className="page-header-shape wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms" />
  <div className="container">
    <div className="page-header__inner">
      <ul className="thm-breadcrumb list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><span>/</span></li>
        <li>{props.pageurl}</li>
      </ul>
      <h1>{props.subtitle}</h1>
    </div>
  </div>
</section>
{/*Page Header End*/}

    </div>
  )
}

export default Breadcrumbs