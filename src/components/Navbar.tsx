import React, { useState } from "react";
import img6 from "../Images/ChatGPT Image Oct 9, 2025, 01_29_11 PM.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const navLinks = [
    { name: "About", path: "#About" },
    { name: "Services", path: "#service" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full absolute z-20 overflow-x-hidden">
      <div className="w-[85vw] navbar relative rounded-full text-white flex justify-between items-center mx-auto p-3 mt-6 backdrop-blur-md bg-black/30 shadow-md">
        
        {/* Logo */}
        <Link to="/" className="flex gap-2 justify-center items-center">
          <img src={img6} alt="Logo" className="md:w-12 md:h-12 w-8 h-8 rounded-full" />
          <h1 className="text-xl sm:text-2xl font-bold italic tracking-[2px]">
            Takerflow
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-2 sm:text-[2.4vw] md:text-[3vw] lg:text-[2vw]">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
            >
              <a href={link.path} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="20"
                  width="20"
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
                </svg>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}

        <div className="sm:hidden block" onClick={() => setIsClicked(!isClicked)}>
          {
          isClicked ? (<span className="text-3xl cursor-pointer">X</span>) :(
          <svg
          
          className="w-10 h-10 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <rect width="156" height="156" fill="none" />
          <line
            x1="40"
            y1="64"
            x2="216"
            y2="64"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <line
            x1="40"
            y1="192"
            x2="216"
            y2="192"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </svg>
            )
        }
        </div>

        {/* Mobile Nav */}
        <ul
          className={`absolute top-full left-0 w-full bg-black/90 text-center transition-all duration-500 overflow-hidden ${
            isClicked ? "max-h-60 py-4" : "max-h-0"
          }`}
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="py-2 hover:bg-white hover:text-black transition"
              onClick={() => setIsClicked(false)}
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
