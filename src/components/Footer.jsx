import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

const Footer = () => {
  const fheading = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useEffect(() => {
    let AnimFHeading;

    document.fonts.ready.then(() => {
      const fHeadingText = new SplitText(fheading.current, {
        type: "lines",
        mask: "lines",
      });

      gsap.matchMedia().add("(min-width:481px)", () => {
        AnimFHeading = gsap.from(fHeadingText.lines, {
          y: -62,
          ease: "power1.out",
          duration: 2,
          scrollTrigger: {
            trigger: fHeadingText.lines,
            start: "top 80%",
            end: "top center",
            scrub: 4,
          },
        });
      });
    });

    return () => {
      if (AnimFHeading) AnimFHeading.revert?.();
    };
  }, []);

  return (
    <footer className="h-[110vh]">
      <div className="footer h-[70vh] relative">
        <div className="w-full h-full absolute bg-black/40"></div>
      </div>
      <div className="flex justify-between items-center p-6">
        <div>
          <p ref={fheading} className="md:text-7xl text-4xl overflow-hidden font-bold text-white">Let's Work.</p>
          <p className="text-lg text-white mt-1 ml-[5px]">Need a plumber today?</p>
          <a href="#" className="text-lg flex justify-center items-center mt-6 gap-1 bg-black w-[12vw] hover:bg-black/40 px-6 py-2 rounded-md text-white transition duration-300 hover:scale-105">
            <span>Get</span><span>in</span><span>touch</span><span>&rarr;</span>
          </a>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-2xl text-white">Facebook</a></li>
            <li><a href="#" className="text-2xl text-white">WhatsApp</a></li>
            <li><a href="#" className="text-2xl text-white">Instagram</a></li>
            <li><a href="#" className="text-2xl text-white">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-white mx-auto"></div>
      <p className="text-lg text-center mt-6 text-white">Fatawu Abass &copy; {new Date().getFullYear()}. All rights reserved</p>
    </footer>
  );
};

export default Footer;
