import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroImage from "../Images/top-view-international-worker-s-day-with-engineer-tools.webp";
import smallHero from "../Images/ChatGPT Image Sep 25, 2025, 10_28_27 AM.png";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(
    window.innerWidth < 600 ? smallHero : HeroImage
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setCurrentImage(smallHero);
      } else {
        setCurrentImage(HeroImage);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // check on mount

    gsap.registerPlugin(SplitText, ScrollTrigger);

    document.fonts.ready.then(() => {
      const Htext = new SplitText(".Htext", {
        type: "words",
        autoSplit: true,
        mask: "words",
      });

      gsap.matchMedia().add("(min-width: 481px)", () => {
        const tl = gsap.timeline();
        tl.from(Htext.words, {
          y: 42,
          delay: 1,
          ease: "power1.out",
          stagger: 0.1,
          duration: 1,
          opacity: 0,
        });
      });

      gsap.to("#hero", {
        y: -1260,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#hero",
          start: "bottom 80%",
          end: "center top",
          scrub: 2,
        },
      });
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      id="hero"
      className="overflow-x-hidden h-[90vh] md:h-[100vh] relative hero overflow-hidden"
    >
      <div className="absolute w-full h-full bg-black/40"></div>
      <img
        src={currentImage}
        alt="hero"
        className="image -z-10 w-full h-full object-cover absolute"
      />
      <h1 className="text-[17vw] tracking-[-0.2vw] bottom-[7vw] left-[2.6vw] text-white font-bold m-0 absolute">
        Takerflow
      </h1>
      <p className="text-[4vw] Htext text-white font-bold absolute left-[4.3vw] bottom-[7vw]">
        Reliable Plumbing Services You Can Trust
      </p>
    </section>
  );
}
