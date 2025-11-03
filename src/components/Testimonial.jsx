import stars from "../Images/R.png"
import img1 from "../Images/027faf62-1585-470c-abb8-c9e99b9229a6.jpeg"
import img2 from "../Images/2653fdc6-0387-453c-8738-9f34d77a0014.jpeg"
import img3 from "../Images/Guy in sult.jpeg"
import React, { useEffect } from 'react'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const Testimonial = () => {

      gsap.registerPlugin(ScrollTrigger);

      useEffect(()=>{

        gsap.to(".testimonial", {
            y: 0,
            ease: "power1.out",
            stagger: 0.2,
            opacity:1,
            scrollTrigger:{
                trigger:".testimonial",
                start:"top 80%"
            }
    })
         gsap.to(".testHeading", {
            y: 0,
            opacity:1,
            ease: "power1.out",
            stagger: 0.2,
            scrollTrigger:{
                trigger:".testHeading",
                start:"top 80%",
            }
    })

      },[])

    return(
        <section className="overflow-x-hidden min-h-[120vh] mt-[12vh] flex bg-white justify-center items-center flex-col">
            <p className="p-12 opacity-0 translate-y-[122px]  testHeading text-md bg-gray-200 my-6 rounded-full px-4 py-2">What our customers say about us</p>          
            <div className="gap-12 p-6 md:p-20 flex-wrap lg:flex-nowrap flex justify-center items-center">
            <div className="py-12 testimonial opacity-0 translate-y-[122px] px-8 bg-black text-white rounded-lg t1">
                <img src={stars} loading="lazy" className="w-18 h-6 mb-2" alt="stars"/>
                <p className=" text-xl italic">"I had a major leak in my kitchen late at night, and they responded within minutes! The plumber arrived on time, was polite, and fixed the problem quickly. I was really impressed with their professionalism and fair pricing. Highly recommend them!” –</p>
                <div className="flex mt-4 items-center gap-2">
                    <img src={img1} className="rounded-full w-12 h-12" loading="lazy" alt="quote"/>
                    <div className="flex flex-col">
                    <p className="text-xl font-bold">Mensah Joe</p>
                    <p >House owner, Kumasi</p>
                    </div>
                </div>
            </div>
            <div className="py-12 testimonial opacity-0 translate-y-[122px] px-8 bg-black text-white rounded-lg">
                <img src={stars} loading="lazy" className="w-18 h-6 mb-2" alt="stars"/>
                <p className=" text-xl italic">"We’ve been using this company for all our plumbing maintenance, and they’ve never disappointed. From routine inspections to emergency repairs, their work is always top-notch. Reliable, skilled, and easy to work with.</p>
                <div className="flex mt-4 items-center gap-2">
                    <img src={img2} className="rounded-full object-fit w-12 h-12" loading="lazy" alt="quote"/>
                    <div className="flex  flex-col">
                        <p className="text-xl font-bold">Kwame Owusu</p>
                        <p >Manager, BlueWave Apartments</p>
                    </div>
                </div>
            </div>
             <div className="py-12 w-full sm:w-auto testimonial opacity-0 translate-y-[122px] px-8 bg-black text-white rounded-lg">
                <img src={stars} loading="lazy" className="w-18 h-6 mb-2" alt="stars"/>
                <p className=" text-xl italic">"Our restaurant had a blocked drain during peak hours, and they came through immediately. The technician explained everything clearly and got us back in business fast. Excellent service from start to finish!"</p>
                <div className="flex mt-4 items-center gap-2">
                    <img src={img3} className="rounded-full w-12 h-12" loading="lazy" alt="quote"/>
                    <div className="flex  flex-col">
                        <p className="text-xl font-bold">Hassan Ali</p>
                        <p > Restaurant Owner, Kumasi</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Testimonial;