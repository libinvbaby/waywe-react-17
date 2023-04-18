import React,{useEffect} from 'react'
import './vendors/bootstrap/css/bootstrap.min.css'
import './vendors/animate/animate.min.css'
import './vendors/animate/custom-animate.css'
import './vendors/fontawesome/css/all.min.css'
import './vendors/jarallax/jarallax.css'
import './vendors/jquery-magnific-popup/jquery.magnific-popup.css'
import './vendors/nouislider/nouislider.min.css'
import './vendors/nouislider/nouislider.pips.css'
// import './vendors/odometer-theme-default.css'
import './vendors/izeetak-icons/style.css'
import './vendors/tiny-slider/tiny-slider.min.css'
import './vendors/reey-font/stylesheet.css'
import './vendors/twentytwenty/twentytwenty.css'
import './vendors/bootstrap-select/css/bootstrap-select.min.css'
import './vendors/jquery-ui/jquery-ui.css'
import './css/izeetak.css'
import './css/izeetak-responsive.css'

import {  Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css' 
import AnimatedRoutes from './AnimatedRoutes';
import Menu from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PhoneIcon from './components/FlottingButton'
import Home from './pages/Home'
import About from './pages/About';
import Service from './pages/Service';
import CloudService from './pages/CloudService'
import DigitalMarketingAcademy from './pages/DigitalMarketingAcademy';
import Hrm from './pages/Hrm';
import DigitalMarketing from './pages/DigitalMarketing'
import SEO from './pages/SEO'
import SMM from './pages/SMM';
import GoogleAds from './pages/GoogleAds'
import GraphicDesigning from './pages/GraphicDesigning';
import SoftwareDevelopmentPlatform from './pages/SoftwarePlatformDevelopment';
import DashboardReporting from './pages/DashboardReporting'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import PenTesting from './pages/PenTesting';
import WebDevelopment from './pages/WebDevelopment';
import IotDevelopment from './pages/IotDevelopment'
import Media from './pages/Media'
import RetailAndEcommerce from './pages/RetailAndEcommerce'
import AssessementPlatforms from './pages/AssessementPlatforms'
import PayrollManagementSoftwares from './pages/PayrollManagementSoftwares'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogDeatil from './pages/BlogDeatil';
import Industries from './pages/Industries';
import EmailMarketing from './pages/EmailMarketing';
import DataLabelingAndClassification from './pages/DataLabellingAndClassification';
import VideoProduction from './pages/VideoProduction';
import ContentDevelopment from './pages/ContentDevelopment';
import LogoDesign from './pages/LogoDesign';
import BrochureDesign from './pages/BrochureDesign';
import ProfessionalStaffing from './pages/ProfessionalStaffing';
import Outsourcing from './pages/Outsourcing';
import WebsiteDesign from './pages/WebsiteDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import UiuxDesign from './pages/UiuxDesign';
import ErpCrmSolution from './pages/ErpCrmSolution';
import TermsAndCondition from './pages/TermsAndCondition';


const App = () => {
  const helmetContext = {};

  useEffect(()=>{
    Aos.init({ duration:2000,
      easing: 'ease',
      delay: 100,
      duration: 1000 });
  },[])
  return (
    <div className="page-wrapper">
      
      <Router  >
        <ScrollToTop/>
        <PhoneIcon/>
      <Menu />
      <Routes >
    <Route path='/'  element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/cloud-service' element={<CloudService/>}/>
    <Route path='/digital-marketing-academy' element={<DigitalMarketingAcademy/>}/>
    <Route path='/hrm' element={<Hrm/>}/>
    <Route path='/digital-marketing' element={<DigitalMarketing/>} />
    <Route path='search-engine-optimization' element={<SEO/>}   />
    <Route path='social-media-marketing' element={<SMM/>}/>
    <Route path='google-ads' element={<GoogleAds/>}/>
    <Route path='graphic-designing' element={<GraphicDesigning/>}/>
    <Route path='/software-development-platform' element={<SoftwareDevelopmentPlatform/>}/>
    <Route path='dashboard-reporting' element={<DashboardReporting/>}/>
    <Route path='mobile-app-development' element={<MobileAppDevelopment/>}/>
    <Route path='pen-testing' element={<PenTesting/>}/>
    <Route path='/web-development' element={<WebDevelopment/>}/>
    <Route path='iot-development' element={<IotDevelopment/>}/>
    <Route path='media' element={<Media/>}/>
    <Route path='retail-and-ecommerce' element={<RetailAndEcommerce/>}/>
    <Route path='assessment-platforms' element={<AssessementPlatforms/>}/>
    <Route path='payroll-management-softwares' element={<PayrollManagementSoftwares/>}/>
    <Route path="/careers" element={<Careers/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/:slug" element={<BlogDeatil />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="email-marketing" element={<EmailMarketing />} />
    <Route path="video-production" element={<VideoProduction />} />
    <Route path="content-marketing" element={<ContentDevelopment    />} />
    <Route path="logo-design" element={<LogoDesign   />} />
    <Route path="brochure-design" element={<BrochureDesign   />} />
    <Route path="data-labeling" element={<DataLabelingAndClassification />} />
    <Route path="/professional-staffing" element={<ProfessionalStaffing />} />
    <Route path="/outsourcing" element={<Outsourcing />} />
    <Route path="/website-design" element={<WebsiteDesign />} />
    <Route path="/website-development" element={<WebsiteDevelopment />} />
    <Route path="/ui-ux-design" element={<UiuxDesign />} />
    <Route path="/erp-crm-solution" element={<ErpCrmSolution />} />
    <Route path="/terms-and-conditions" element={<TermsAndCondition />} />


    </Routes>
        <Footer/>
      </Router>
     
    </div>
  )
}

export default App