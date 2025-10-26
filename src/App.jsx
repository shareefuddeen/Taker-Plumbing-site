import React,{ useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedWorks from './components/FeaturedWorks'
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Lenis from "@studio-freight/lenis";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import ServicesDetails from './pages/ServicesDetails'
import ContactDetails from './pages/ContactDetails'


export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <main >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <Hero /> 
            <About/>  
            <FeaturedWorks/>  
            <Services/> 
            <Testimonial/> 
            <Contact/> 
            </>
          } />
          <Route path="/services" element={<ServicesDetails/>}/>
          <Route path="/contact" element={<ContactDetails/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </main>
  )
}