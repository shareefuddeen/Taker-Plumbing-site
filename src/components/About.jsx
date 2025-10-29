import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from "react";

const About = () => {
  const TextRef = useRef(null);
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useEffect(() => {
    let missionText, AnimText, tl;

    document.fonts.ready.then(() => {
      AnimText = new SplitText(TextRef.current, {
        type: "lines",
        linesClass: "line++",
        mask:"lines"
      });
      missionText = new SplitText(".mission", {
        type: "words",
        wordsClass: "word++",
      });

      gsap.from(AnimText.lines, {
        y: 62,
        ease: "power1.out",
        opacity: 0,
        scrollTrigger: {
          trigger: AnimText.lines,
          start: "top 80%",
          end: "top center",
          scrub: 2,
        },
      });

      gsap.to(TextRef.current, {
        y: -1260,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: TextRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // gsap.from(".missionHeading", {
      //   x: -160,
      //   ease: "power1.out",
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: ".missionHeading",
      //     start: "top 80%",
      //     end:"bottom 80%",
      //     scrub: 2,
      //     markers:true
      //   },
      // })
      // gsap.from(".mission", {
      //   opacity: 0,
      //   ease: "power1.out",
      //   scrollTrigger: {
      //     trigger: ".mission",
      //     start: "top 80%",
      //     end: "top center",
      //     scrub: 2,
      //   },
      // });
    });

  }, []);

  return (
    <section id="About" className="h-[140vh] relative flex flex-col justify-center items-center">
      <div className="absolute top-[-12vw]">
        <p ref={TextRef} className="text-[4vw] leading-[3.6vw] px-[4vw] text-white max-w-[56ch]">
          Takerflow is a trusted plumbing company serving Kumasi and surrounding areas. With over 10 years of experience, we specialize in delivering top-quality plumbing solutions for homes and businesses.
        </p>
      </div>
      <div className="flex About2 relative justify-center gap-16 mt-[16em] h-screen w-full items-center missionBg">
        <div className='w-full h-full bg-black/30 absolute'></div>
        <div className='flex flex-col justify-center px-6 py-4 gap-6'>
          <h1 className='tracking-[-1px] leading-[8vw] text-[10vw] font-bold text-white z-10 p-2 missionHeading'>Our mission is simple.</h1>
          <p className='text-[2.6vw] text-white font-bold z-10 p-2 max-w-[41ch] mission'>
            We provide reliable, affordable, and long-lasting plumbing services while treating every customer like family.
          </p>
          <a href="#" className='btn py-2 px-2 bg-black hover:bg-black/80 ml-4 text-white text-center rounded text-xl max-w-[6em] transition duration-300 hover:scale-105'>More &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default About;
