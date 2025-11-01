import img4 from "../Images/ChatGPT Image Oct 17, 2025, 07_44_15 AM.webp";
import img5 from "../Images/ChatGPT Image Oct 17, 2025, 07_33_55 AM.webp";
import img6 from "../Images/ChatGPT Image Oct 22, 2025, 12_37_49 PM.webp";
import img7 from "../Images/Gemini_Generated_Image_w0bo4dw0bo4dw0bo-removebg-preview.webp";
import img8 from "../Images/Gemini_Generated_Image_96vy2296vy2296vy-removebg-preview.webp";
import img9 from "../Images/Gemini_Generated_Image_5ddayj5ddayj5dda-removebg-preview.webp";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  

  useEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".service", {
            y: 0,
            opacity:1,
            ease: "power1.out",
            stagger: 0.2,
            scrollTrigger:{
                trigger:".service",
                start:"top 80%",
            }
    })

      },[])

  return (
    <section id="service" className="min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-14 -mt-[16vw]">
      <p className="text-md -mt-20 mb-12 bg-gray-200 rounded-full px-4 py-2">What we offer</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 p-6">
        <div className="service opacity-0 translate-y-[122px] flex rounded justify-center w-[20em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col">
          <div className="px-4 py-2 w-full">
            <img src={img5} alt="Emergency Plumbing" className="w-full mx-auto" loading="lazy" />
          </div>
          <div className="px-6 py-4 w-full">
            <h2 className="md:text-2xl text-xl font-bold">Emergency Plumbing</h2>
            <p className="md:text-lg text-md mt-1">24/7 quick response to leaks, bursts, and clogs.</p>
          </div>
        </div>

        <div className="service opacity-0 translate-y-[122px] flex rounded justify-center w-[20em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col">
          <div className="px-4 py-2 w-full">
            <img src={img4} alt="Repairs & Maintenance" className="w-full mx-auto" loading="lazy" />
          </div>
          <div className="px-6 py-4 w-full">
            <h2 className="md:text-2xl text-xl font-bold">Repairs & Maintenance</h2>
            <p className="md:text-lg text-md mt-1">Fixing faucets, toilets, sinks, and water heaters.</p>
          </div>
        </div>

        <div className="service opacity-0 translate-y-[122px] flex rounded justify-center w-[20em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col">
          <div className="px-4 py-2 w-full">
            <img src={img6} alt="Commercial Plumbing" className="w-full mx-auto" loading="lazy" />
          </div>
          <div className="px-6 py-4 w-full">
            <h2 className="md:text-2xl text-xl font-bold">Commercial Plumbing</h2>
            <p className="md:text-lg text-md mt-1">Tailored solutions for offices, restaurants, and businesses.</p>
          </div>
        </div>
        <div className="service opacity-0 translate-y-[122px] flex rounded justify-center w-[20em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col">
          <div className="px-4 py-2 w-full">
            <img src={img7} alt="Commercial Plumbing" className="w-full mx-auto" loading="lazy" />
          </div>
          <div className="px-6 py-4 w-full">
            <h2 className="md:text-2xl text-xl font-bold">Pipe Replacement & Leak Detection</h2>
            <p className="md:text-lg text-md mt-1">Modern tools to detect and fix hidden leaks.</p>
          </div>
        </div>
        <div className="service opacity-0 translate-y-[122px] flex rounded justify-center w-[20em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col">
          <div className="px-4 py-2 w-full">
            <img src={img9} alt="Commercial Plumbing" className="w-full mx-auto" loading="lazy" />
          </div>
          <div className="px-6 py-4 w-full">
            <h2 className="md:text-2xl text-xl font-bold">Residential Plumbing</h2>
            <p className="md:text-lg text-md mt-1">Full-service plumbing for your home.</p>
          </div>
        </div>
        <div className="service opacity-0 translate-y-[122px] flex rounded justify-center w-[20em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col">
          <div className="px-4 py-2 w-full">
            <img src={img8} alt="Commercial Plumbing" className="w-full mx-auto" loading="lazy" />
          </div>
          <div className="px-6 py-4 w-full">
            <h2 className="md:text-2xl text-xl font-bold">Bathroom & Kitchen Installations</h2>
            <p className="md:text-lg text-md mt-1">New fittings, renovations, and upgrades.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <a
          href="#contact"
          className="btn text-lg flex mt-8 justify-center items-center gap-1 w-fit bg-black hover:bg-black/70 px-6 py-3 rounded-md text-white transition"
        >
          reach out now <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default Services;
