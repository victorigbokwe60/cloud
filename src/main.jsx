import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import Feature from "./component/Feature.jsx"
import WorkFlow from './component/WorkFlow.jsx';
import Price from './component/Price.jsx';
import Testimonial from './component/Testimonial.jsx';
import Footer from './component/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <>
    <Navbar />
    <div className='max-w-7xl mx-auto pt-20 px-6'> <Hero /></div>
    <Feature />
    <WorkFlow />
    <Price />
    <Testimonial />
    <Footer />
    </>
  </StrictMode>,
)
