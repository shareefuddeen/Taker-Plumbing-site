import img1 from "../Images/6234.webp"
import img2 from "../Images/plumbing-professional-doing-his-job.webp"
import img4 from "../Images/ChatGPT Image Oct 17, 2025, 07_44_15 AM.png"
import img5 from "../Images/ChatGPT Image Oct 17, 2025, 07_33_55 AM.png"
import img6 from "../Images/ChatGPT Image Oct 22, 2025, 12_37_49 PM.png"
import React, { useEffect } from 'react'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Services = () => {
   
      gsap.registerPlugin(ScrollTrigger);

      useEffect(()=>{

        const cardAnim = gsap.from(".service", {
            y: 122,
            ease: "power1.out",
            stagger: 0.1,
            opacity:0,
            scrollTrigger:{
                trigger:".service",
                start:"top bottom",
                end:"top center",
                scrub:1
            }
    })
          gsap.from(".btn", {
            y: 62,
            opacity:0,
            ease: "power4.out",
            scrollTrigger:{
                trigger:".btn",
                start:"top 80%",
                end:"bottom 80%",
                scrub:1
            }
    })
          return () => {
            cardAnim.revert()
          }

      },[])

    return (
        <section className="min-h-[140vh] -mt-[12em] flex flex-col justify-center p-14 items-center">
            <p className="text-xl mb-12 bg-gray-200 rounded-full px-4 py-2 ">What we offer</p>
            <div className="grid md:grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-20 md:gap-x-20 md:gap-y-12 p-16">
                <div className="flex rounded shadow-lg hover:shadow-xl transition justify-center w-[16em] lg:w-[16em] md:w-[16em] items-center bg-[#F5DEB3] flex-col service">
                    <div className="px-4 py-2 w-full ">
                        <img src={img5} alt="24/7 illustration" className="w-full mx-auto" loading="lazy" />
                    </div>
                    <div className="px-6 py-4 w-full">
                         <h2 className="md:text-2xl text-xl font-bold">Emergency Plumbing </h2>
                        <p className="md:text-lg text-md mt-1 ">24/7 quick response to leaks, bursts, and clogs.</p>
                     </div>
                </div>
                <div className="flex rounded justify-center w-[16em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col service">
                    <div className="px-4 py-2 w-full">
                        <img src={img4} alt="24/7 illustration" className="w-full mx-auto" loading="lazy" />
                    </div>
                    <div className="px-6 py-4 w-full">
                         <h2 className="md:text-2xl text-xl font-bold">Repairs & Maintenance </h2>
                        <p className="md:text-lg text-md mt-1 ">Fixing faucets, toilets, sinks, and water heaters.</p>
                     </div>
                </div>
                  <div className="flex rounded justify-center w-[16em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col service">
                    <div className="px-4 py-2 w-full">
                        <img src={img4} alt="24/7 illustration" className="w-full mx-auto" loading="lazy" />
                    </div>
                    <div className="px-6 py-4 w-full">
                         <h2 className="md:text-2xl text-xl font-bold">Residential Plumbing </h2>
                        <p className="md:text-lg text-md mt-1 ">Full-service plumbing for your home.</p>
                     </div>
                </div>
                  <div className="flex rounded justify-center w-[16em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col service">
                    <div className="px-4 py-2 w-full">
                        <img src={img6} alt="24/7 illustration" className="w-full mx-auto" loading="lazy" />
                    </div>
                    <div className="px-6 py-4 w-full">
                         <h2 className="md:text-2xl text-xl font-bold">Commercial Plumbing </h2>
                        <p className="md:text-lg text-md mt-1 ">Tailored solutions for offices, restaurants, and businesses.</p>
                     </div>
                </div>
                  <div className="flex rounded justify-center w-[16em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col service">
                    <div className="px-4 py-2 w-full">
                        <img src={img4} alt="24/7 illustration" className="w-full mx-auto" loading="lazy" />
                    </div>
                    <div className="px-6 py-4 w-full">
                         <h2 className="text-2xl font-bold">Bathroom & Kitchen Installations</h2>
                        <p className="text-lg mt-1 ">New fittings, renovations, and upgrades.</p>
                     </div>
                </div>
                  <div className="flex rounded justify-center w-[16em] lg:w-[16em] md:w-[16em] shadow-lg hover:shadow-xl transition items-center bg-[#F5DEB3] flex-col service">
                    <div className="px-4 py-2 w-full">
                        <img src={img4} alt="24/7 illustration" className="w-full mx-auto" loading="lazy" />
                    </div>
                    <div className="px-6 py-4 w-full">
                         <h2 className="text-2xl font-bold">Pipe Replacement & Leak Detection</h2>
                        <p className="text-lg mt-1 ">Modern tools to detect and fix hidden leaks.</p>
                     </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <a href="" className="btn text-lg flex mt-8 justify-center items-center gap-1 w-full bg-black hover:bg-black/40 px-4 py-2 rounded-md text-white transition ">reach out now<span>&rarr;</span></a>
            </div>


            {/*<div className="w-full z-20 flex flex-col justify-center items-center h-full">
                <p className="text-xl mb-6 bg-gray-200 rounded-full px-4 py-2 ">What we offer</p>
                <div className="space-y-4 flex flex-col justify-center items-center text-center w-full text-2xl text-white">
                    <div className="h-[1px] w-[100%] bg-white "></div>
                    <div className="service group">
                        <h2 className="">🚰 Emergency Plumbing </h2>
                        <p className="text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">24/7 quick response to leaks, bursts, and clogs.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white "></div>

                    <div className="service group">
                        <h2 className="">🔧 Repairs & Maintenance </h2>
                        <p className="text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">Fixing faucets, toilets, sinks, and water heaters.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white "></div>

                    <div className="service group">
                        <h2 className="">🏠 Residential Plumbing </h2>
                        <p className="text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">Full-service plumbing for your home.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white "></div>

                    <div className="service group">
                        <h2 className="">🏢 Commercial Plumbing </h2>
                        <p className="text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">Tailored solutions for offices, restaurants, and businesses.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white "></div>

                    <div className="service group">
                        <h2 className="">🚿 Bathroom & Kitchen Installations </h2>
                        <p className="text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">New fittings, renovations, and upgrades.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white "></div>

                    <div className="service group">
                        <h2 className="">💧  Pipe Replacement & Leak Detection </h2>
                        <p className="text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">Modern tools to detect and fix hidden leaks.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white "></div>

                    <div className="service group">
                        <h2 className="">🌊 Water Heater Installation & Repair </h2>
                        <p className=" text-lg max-h-0 mt-1 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">Gas, electric, and tankless systems.</p>
                    </div>
                    <div className="h-[1px] w-[100%] bg-white ">
                    </div>
                </div>
            </div>*/}
        </section>
    )
}

export default Services;