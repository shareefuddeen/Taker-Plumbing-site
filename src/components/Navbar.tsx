import React from 'react'
import img6 from "../Images/ChatGPT Image Oct 9, 2025, 01_29_11 PM.webp"
import { Link } from "react-router-dom"

export default function Navbar() {
  
  return (
    <nav className='w-[100vw] absolute z-20 h-32 md:h-14'>
      <div className='w-full md:w-[34em] md:w-[45em] h-full navbar relative rounded md:rounded-full mx-auto text-white bg-black/40 flex flex-col md:flex-row justify-between items-center p-4 md:p-2 gap-1 mt-0 md:mt-6'>
        <Link to="" className="flex gap-2 justify-center items-center">
          <img src={img6} className="md:w-12 md:h-12 w-6 h-6  rounded-full"/>
          <h1 className="text-2xl font-bold mt-1 italic tracking-[2px]">Takerflow</h1>
        </Link>
        <ul className='flex flex-end gap-1 text-xl '>
          <li className='cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition'><Link to="" className="flex justify-center items-center gap-1"> <svg
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
            </svg>About</Link></li>
          <li className='cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition'><Link to="/services" className="flex justify-center items-center gap-1"> <svg
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
            </svg>Services</Link></li>
          <li className='cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition'><Link to="/contact" className="flex justify-center items-center gap-1"> <svg
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
            </svg>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}