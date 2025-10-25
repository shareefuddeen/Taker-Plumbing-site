import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import { useEffect,useRef } from "react";


const Footer = () => {

    const fheading = useRef(null)
    gsap.registerPlugin(ScrollTrigger,SplitText)

    useEffect(()=>{


        document.fonts.ready.then(()=>{
            const fHeadingText = new SplitText(fheading.current,{
            type:"lines",
            autoSplit:true,
            mask:"lines"
        })

        const AnimFHeading = gsap.from(fHeadingText.lines,{
            y:-62,
            ease:"power1.out",
            duration:2,
            scrollTrigger:{
                trigger:fHeadingText.lines,
                start:"top 80%",
                end:"center 80%",
                scrub:4
            }
        })

        })
     
        return () => {
            AnimFHeading.revert();
            parallaxAnim.revert();
        }
    },[])
    return (
        <footer className="h-[110vh]">
            <div className="footer h-[70vh] transition relative">
                <div className="w-full h-full absolute bg-black/40"></div>
            </div>
            <div className="flex justify-between items-center p-6">
                <div className="flex-start">
                    <p ref={fheading} className="md:text-7xl text-4xl overflow-hidden font-bold text-white">Let's Work.</p>
                    <p className="text-lg text-white mt-1 ml-[5px]">Need a plumber today?</p>
                    <a href="" className="text-lg flex justify-center items-center mt-6 gap-1 bg-black w-[9em] hover:bg-black/40 px-6 py-2 rounded-md text-white transition duration-300 hover:scale-105"><span>Get</span><span>in</span><span>touch</span><span>&rarr;</span></a>
                </div>
{/*                <div className="p-12">
                            <p className="text-xl text-white leading-relaxed tracking-wide">Ahcease, Kumasi</p>
                            <p className="text-xl text-white leading-relaxed tracking-wide">0547120811</p>
                            <p className="text-xl text-white leading-relaxed tracking-wide">fatawuabass@gmail.com</p>
                            <p className="text-xl text-white leading-relaxed tracking-wide">24/7 Emergency Service</p>
                        </div>*/}
                <div className="flex-end">
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
    )
}
export default Footer;