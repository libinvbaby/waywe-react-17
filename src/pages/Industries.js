import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";

const Industries = () => {
  const IndustrieServices = [
    {
      service: " Education",
      image: "education.jpg"
    },
    {
      service: "Automotive",
      image: "automotive.jpg"
    },
    {
      service: "Ecommerce",
      image: "ecommerce.jpg"
    },
    {
      service: "Retail",
      image: "retail.jpg"
    },
    {
      service: "Legal ",
      image: "legal.jpg"
    },
    {
      service: "Transport & Logistics",
      image: "transport-and-logistics.jpg"
    },
    {
      service: "Banking and Financial Services",
      image: "banking-and-financial-services.jpg"
    },
    {
      service: "Healthcare and Lifesciences",
      image: "Healthcare -and- Lifesciences.jpg"
    },
    {
      service: "Manufacturing",
      image: "manufacturing.jpg"
    },
    {
      service: "Digital Content Engineering ",
      image: "Digital Content Engineering.jpg"
    },
    {
      service: "Travel and hospitality",
      image: "travel-hospitality.jpg"
    },
 
    {
      service: "Media & Entertainment",
      image: "media-entertaintment.jpg"
    },
    {
      service: " Technology Companies",
      image: "Technology-Companies.jpg"
    },
    {
      service: " Consumer Goods & Distribution ",
      image: "ConsumerGoodsDistribution.jpg"
    },
    {
      service: " Information & Services",
      image: "InformationServices.jpg"
    },
    
    
  ]
  const imgcontainer = {
    textAlign: "center",
    zIndex: "1",
    position: "relative"
  }
  const containerImg = {
    filter: "brightness(0.5)",
    width: "100%",
    boxShadow: "0px 0px 13px -3px rgba(18,47,117,1)"
  }
  const imgcontainerh5 = {
    textAlign: "center",
    position: "absolute",
    bottom: "10px",
    zIndex: "999",
    color: "white",
    left: "0",
    right: "0",
    margin: "auto"
  }
  return (
    <>
      <Helmet>
        <title>Industries - Way WeDesign</title>
        <meta name="description" content="Industries" />
      </Helmet>
      <Breadcrumbs pageurl="Industries" subtitle="INDUSTRIES" />
      <div className="container pt-5">
        <div className="section-title text-left">
          <h2 className="section-title__title">Some Of Our Services</h2>
        </div>
        <div className="row">
          {IndustrieServices.map((item, index) => {
            return (
              <div  className="col-md-3 py-3"  data-aos="slide-up" key={index}>
                <div style={imgcontainer}>
                  <img className='industrimage' style={containerImg} src={`/assets/images/industries/${item.image}`} alt="" />
                  <h5 style={imgcontainerh5}>{item.service}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Industries
