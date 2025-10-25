import React, { useEffect } from 'react'
import  gsap  from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImagePlumber from "../Images/professional-worker-fixing-bathroom.webp"
import HeroImage from "../Images/top-view-international-worker-s-day-with-engineer-tools.webp"


export default function Hero() {

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    
    document.fonts.ready.then(()=>{
        const Htext = new SplitText(".Htext", {
      type: "words",
      autoSplit: true,
      mask: "words",
  
    })
    const tl = gsap.timeline()
    tl.from(Htext.words, {
      y: 42,
      delay:1,
      ease: "power1.out",
      stagger: 0.1,
      duration: 1,
      opacity:0
    })
    

    gsap.to("#hero",{
      y:-1260,
      ease:"power2.out",
      scrollTrigger:{
        trigger:"#hero",
        start:"bottom 80%",
        end:"center top",
        scrub:2
      }
     })
    })

     return () =>{
      Htext.revert();
     }
  }, [])

  return (
    <section id='hero' className='h-screen relative hero overflow-hidden '>
      <img src={HeroImage} alt="hero image" className="-z-10 w-full h-full object-fit absolute"/>
      <h1 className="bottom-14 lg:text-[32vh] md:top-[48vh] sm:top-[52vh] sm:text-[18vh] md:text-[22vh] text-[12vh] text-white font-bold m-0 absolute lg:tracking-[20px] lg:top-[52vh] left-8">Takerflow</h1>
      <p className="bottom-12 md:text-[5vh] sm:top-[72vh] sm:text-[4.2vh] text-[3.6vh] lg:top-[88vh] lg:text-[6vh] Htext text-white font-bold  ml-9 md:m-0 absolute left-0 md:left-14">Reliable Plumbing Services You Can Trust</p>
    </section>
  )
}