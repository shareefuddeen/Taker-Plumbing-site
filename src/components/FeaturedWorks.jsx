import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom";


import img5 from "../Images/24+ Photos You Should See If You Want To Install….webp"
import img2 from "../Images/p12.webp"
import img4 from "../Images/Common Plumbing Mistakes.webp"
import img6 from "../Images/Enhance.webp"
import img11 from "../Images/p2.webp"
import img3 from "../Images/p6.webp"
import img7 from "../Images/pl.webp"
import img8 from "../Images/p4.webp"
import img9 from "../Images/plumbing work for concealed wall mixer with all details.webp"
import img10 from "../Images/The Biggest Construction Mistakes The World Has Ever Seen.webp"
import img1 from "../Images/ChatGPT Image Sep 25, 2025, 10_28_27 AM.png"


gsap.registerPlugin(ScrollTrigger)

const FeaturedWorks = () => {
  const scrollContainer = useRef(null)
  const scrollContent = useRef(null)

  useEffect(() => {
    const container = scrollContainer.current
    const content = scrollContent.current
    const totalScrollWidth = content.scrollWidth - window.innerWidth

    const tween = gsap.to(content, {
      x: -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `${content.scrollWidth}`,
        scrub: 1,
        pin: ".featured-works",
        anticipatePin: 1,
        invalidateOnRefresh: true
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section className="h-[130vh] overflow-hidden flex relative featured-works">
      <div className="flex items-center justify-center w-full absolute top-[6em]">
        <p className="text-md bg-gray-200 rounded-full px-4 py-2">Our featured works</p>
      </div>
      <div
        ref={scrollContainer}
        className="horizontal-scroll-container w-full h-[100vh] relative "
      >
        <div
          ref={scrollContent}
          className="horizontal-scroll-content flex gap-6 flex-nowrap py-12 px-4 translate-y-[10em]"
        >
          {[img1, img2, img3, img4, img5, /*img6,img7,img8,img9,img10,img11*/].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Service ${i + 1}`}
              className="w-[60vw] md:w-[40vw] lg:w-[30vw] h-[50vh] object-cover rounded-xl shadow-lg"
            />
          ))}
          <div className="flex justify-center items-center p-6">
            <Link to="/work" className="text-lg flex justify-center items-center gap-1 w-full bg-black hover:bg-black/40 px-4 py-2 rounded-md text-white transition duration-300 hover:scale-105">More<span>&rarr;</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWorks;
