import React from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
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
import App from './App';

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <>
    <Routes location={location} key={location.pathname}>
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
    </>
    )
}

export default AnimatedRoutes