import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useEffect,useRef } from "react"
import imagePlumber from "../Images/ChatGPT Image Sep 25, 2025, 10_28_27 AM.png"

const Ceo  = () => {

    const ImgCircle = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        const ImgCircleAnim = gsap.to(ImgCircle.current,{
            clipPath:"circle(100% at 50% 50%)",
            ease:"power1.out",
            scrollTrigger:{
                trigger:ImgCircle.current,
                start:"top top",
                end:"center 30%",
                scrub:2,
                pin:true,
                invalidateOnRefresh:true
            }
        })
    },[])
    return(
        <section className="h-[160]">
            <div className="h-[120vh] w-full flex justify-center items-center">
            <img ref={ImgCircle} src={imagePlumber} alt="Plumber image" className="h-full w-full object-cover ceoImg" />
            </div>
        </section>
    )
}

export default Ceo;