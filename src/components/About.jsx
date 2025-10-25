import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from "react";

const About = () => {
    const TextRef = useRef(null)
    gsap.registerPlugin(SplitText, ScrollTrigger)
    useEffect(() => {
        document.fonts.ready.then(()=>{
            const AnimText = new SplitText(TextRef.current, {
            type: "lines",
            autoSplit: true,
            mask: "lines",
            linesClass: "line++"
        })
        const missionText = new SplitText(".mission", {
            type: "words",
            autoSplit: true,
            wordsClass: "word++"
        })
        gsap.from(AnimText.lines, {
            y: 62,
            ease: "power1.out",
            opacity: 0,
            scrollTrigger: {
                trigger: AnimText.lines,
                start: "top 80%",
                end: "top center",
                scrub: 2,
            }
        })

        gsap.to(TextRef.current, {
            y: -1260,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: TextRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 2
            }
        })

        const tl = gsap.timeline()
        tl.from(".missionHeading", {
            x: -160,
            ease: "power1.out",
            opacity:0,
            scrollTrigger: {
                trigger: ".missionHeading",
                start: "top 60%",
                end: "center 60%",
                scrub: 2,
            }
        }).from(".mission", {
            opacity: 0,
            ease:"power1.out",
            scrollTrigger:{
                trigger:".mission",
                start:"top 80%",
                end:"top center",
                scrub:2
            }
        })
        })

        return () => {
            missionText.revert()
            AnimText.revert()
            tl.revert()
        }
    }, [])
    return (
        <section id="About" className="h-[140vh] relative flex flex-col justify-center items-center">
            <div className="absolute top-[-12%] md:top-[-14%]">
                <p ref={TextRef} className="text-3xl sm:text-4xl md:text-5xl text-white px-6 md:px-12 md:max-w-full max-w-[56ch]">Takerflow is a trusted plumbing company serving Kumasi and surrounding areas. With over 10 years of experience, we specialize in delivering top-quality plumbing solutions for homes and businesses. </p>
            </div>
            <div className="flex relative justify-center gap-16 mt-[16em] h-screen w-full items-center missionBg">
                <div className='w-full h-full bg-black/30 absolute'></div>
                <div className='flex flex-col justify-center px-6 py-4 gap-6'>
                    <h1 className='tracking-[-1px] md:text-7xl lg:text-9xl text-6xl sm:text-6xl font-bold text-white z-10 p-2 missionHeading max-w-full lg:max-w-[19ch]'>Our mission is simple.</h1>
                    <p className='md:text-4xl sm:text-2xl text-3xl lg:text-3xl max-w-[29ch] text-white font-bold z-10 p-2 max-w-[41ch] mission'>We provide reliable, affordable, and long-lasting plumbing services while treating every customer like family.</p>
                    <a href="#" className='py-2 px-2 bg-black hover:bg-black/80 ml-4 z-10 text-white text-center rounded text-xl max-w-[6em] transition font-bold transition duration-300 hover:scale-105'>More &rarr;</a>
                </div>
            </div>
        </section>
    )
}

export default About;