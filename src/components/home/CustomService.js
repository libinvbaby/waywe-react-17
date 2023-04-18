import React from 'react'
import { Link } from 'react-router-dom';

const CustomService = () => {
  return (
    <div>
    {/*Services One Start*/}
    <section className="services-one" >
     <div className="container">
       <div className="section-title text-center">
         {/* <span className="section-title__tagline">
          
         </span> */}
         <h2 className="section-title__title"> Wide Range of Services</h2>
       </div>
       <div className="row">
         <div  data-aos="fade-up-right"
           className="col-xl-4 col-lg-4 wow fadeInLeft"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
             <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/app-development.png" alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link to="/software-development-platform">
                 Software & Platform <br /> Development
               </Link>
             </h3>
             <p className="services-one__text">
             Unlock the full potential of your business with customized software development solutions tailored to your unique needs and requirements
             </p>
             
           </div>
         </div>
         <div data-aos="slide-up"
           className="col-xl-4 col-lg-4 wow fadeInUp"
           data-wow-delay="200ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/social-media.png" alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link to="/digital-marketing">
                 Digital <br /> Marketing
               </Link>
             </h3>
             <p className="services-one__text">
              Your Partner for Reliable Digital Marketing Solutions
             </p>
           
           </div>
         </div>
         <div data-aos="fade-up-left"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/migrating.png" alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link to="cloud-service">
                 Cloud  <br /> Service
               </Link>
             </h3>
             <p className="services-one__text">
            Your Reliable Cloud Services Provider for Seamless Business Operations
             </p>

           </div>
         </div>
         <div data-aos="fade-up-right"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/uiuxdesign.png" alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link to="/ui-ux-design">
               UI UX <br></br>Design

               </Link>
             </h3>
             <p className="services-one__text">
             Unlock the potential of your digital products with our bespoke UI/UX design services, ensuring optimal user engagement and brand loyalty
             </p>

           </div>
         </div>
         <div data-aos="slide-up"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/hrm.png" alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link to="hrm">
                HRM
                <br/>
                <br/>
                
               </Link>
             </h3>
             <p className="services-one__text">
             Efficient Talent Acquisition for On-Time Project Delivery and Budget Compliance             </p>

           </div>
         </div>
         <div data-aos="fade-up-left"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" style={{background:"url(/assets/images/icons/blobone.svg)"}}>
            <img class="service-custom-icon" width="60px" src="/assets/images/icons/academy.png" alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link to='digital-marketing-academy'>
                 Digital Marketing  <br /> Academy
               </Link>
             </h3>
             <p className="services-one__text">
              Empowering Individuals to Excel in Digital Marketing with Our Academy
             </p>

           </div>
         </div>
       </div>
     </div>
     
   </section>
   {/*Services One End*/}
</div>
  )
}

export default CustomService