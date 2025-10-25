
import img8 from "../Images/6234.jpg"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import gsap from "gsap"



const Contact = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
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
    },[])

    return (
        <section className="min-h-screen p-12 contact flex justify-center flex-col items-center">
            <p className="text-md bg-gray-200 rounded-full my-16 px-4 py-2">Contact us</p>
            <div className="h-full w-full rounded flex flex-col gap-4 sm:gap-6 lg:flex-row justify-center items-center">
                <div className="w-full relative z-10 h-full flex flex-col justify-center items-center">
                  <form className="w-full h-full sm:px-32 lg:px-2 flex flex-col justify-center items-center gap-6 ">
                        <div className="relative w-2/3">
                            <input id="phone" name="phonenumber" type="tel" placeholder="Enter Phonenumber" className="w-full border-b border-white py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit text-xl text-white"/>
                        </div>
                        <div className="relative w-2/3">
                            <textarea id="message" name="message" placeholder="Message" className="w-full border-b border-white py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit text-xl text-white"/>
                        </div>

                        <div>
                            <button type="submit" className="btn transition bg-black hover:bg-black/40 transition duration-300 hover:scale-105 text-white px-3 py-2 text-lg rounded-md">
                                Send Message
                            </button>
                        </div>

                    </form>
                </div> 

            <div className="w-full flex justify-center items-center">
                <img src={img8} alt="The plumber"  className="rounded w-2/3 h-2/3"/>
            </div>
            </div>
        </section>
    )
}

export default Contact;