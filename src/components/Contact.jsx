
import img8 from "../Images/6234.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import gsap from "gsap"



const Contact = () => {

    gsap.registerPlugin(ScrollTrigger)

    return (
        <section id="contact" className="min-h-screen p-12 contact flex justify-center flex-col items-center">
            <p className="text-md bg-gray-200 rounded-full my-16 px-4 py-2">Contact us</p>
            <div className="h-full w-full rounded flex flex-col gap-4 sm:gap-6 lg:flex-row justify-center items-center">
                <div className="w-full relative z-10 h-full flex flex-col justify-center items-center">
                  <form  className="w-full h-full sm:px-32 lg:px-2 flex flex-col justify-center items-center gap-6 ">
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
                      <div className="pt-20 mt-[4em]">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 ">
                    <div className="rounded-md flex flex-col justify-center items-center p-6 w-[16em] h-[10em] bg-[#F5DEB3]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                        <p className="text-2xl">Kumasi, Achiase</p>
                    </div>
                    <div className="rounded-md w-[16em] flex flex-col justify-center items-center p-6 h-[10em] bg-[#F5DEB3]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                        <p className="text-xl">0547120811</p>
                    </div>
                    <div className="rounded-md w-[16em] flex flex-col justify-center items-center p-6 h-[10em] bg-[#F5DEB3]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                        <p className="text-xl p-2">fatawuabass@gmail.com</p>
                    </div>
                    <div className="rounded-md w-[16em] flex flex-col justify-center items-center p-6 h-[10em] bg-[#F5DEB3]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                        <p className="text-xl text-center">24/7 Emergency Service</p>
                    </div>
                </div>                
            </div>
            <div className="w-full h-full mt-20 flex justify-center items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.09852624669!2d-1.53054755!3d6.736313399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb95d183d11ca1%3A0xeedb144dae1a5346!2sUMMA%20ACADEMY!5e0!3m2!1sen!2sgh!4v1760743110364!5m2!1sen!2sgh" className="w-[40em] h-[30em] p-12 lg:w-full lg:h-[26em]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </section>
    )
}

export default Contact;