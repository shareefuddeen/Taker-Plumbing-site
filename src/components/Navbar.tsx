import React from 'react'
import img6 from "../Images/ChatGPT Image Oct 9, 2025, 01_29_11 PM.webp"

export default function Navbar() {
  
  return (
    <nav className='w-[100vw] absolute z-20 h-14'>
      <div className='w-[34em] md:w-[40em] h-full navbar relative rounded-full mx-auto text-white bg-black flex justify-between items-center p-2 mt-6'>
        <div className="flex gap-2 justify-center items-center">
          <img src={img6} className="md:w-12 md:h-12 w-6 h-6  rounded-full"/>
          <h1 className="text-xl mt-1 italic tracking-[2px]">Takerflow</h1>
        </div>
        <ul className='flex flex-end gap-1 text-md md:text-xl '>
          <li className='cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition'><a href="#" className="flex justify-center items-center gap-1"> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="stroke-white">
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M9 11L12 14L15 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>About</a></li>
          <li className='cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition'><a href="#" className="flex justify-center items-center gap-1"> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="stroke-white"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11L12 14L15 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>Services</a></li>
          <li className='cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition'><a href="#" className="flex justify-center items-center gap-1"> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="stroke-white"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11L12 14L15 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}