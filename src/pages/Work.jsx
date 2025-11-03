import React from "react";
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
import img1 from "../Images/ChatGPT Image Sep 25, 2025, 10_28_27 AM.webp"


const images = [
  { src: img1, span: "col-span-2 row-span-2" },
  { src: img2, span: "col-span-1 row-span-1" },
  { src: img3, span: "col-span-1 row-span-1" },
  { src: img4, span: "col-span-2 row-span-2" },
  { src: img5, span: "col-span-1 row-span-2" },
  { src: img6, span: "col-span-1 row-span-2" },
  { src: img7, span: "col-span-1 row-span-2" },
  { src: img8, span: "col-span-1 row-span-2" },
  { src: img9, span: "col-span-1 row-span-1" },
  { src: img10, span: "col-span-1 row-span-2" },
  { src: img11, span: "col-span-1 row-span-2" },
];

export default function Work() {
  return (
    <section className="overflow-x-hidden px-8 py-16 bg-gray-50">
      <div className="grid grid-cols-3 auto-rows-[200px] mt-20 gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-md group ${img.span}`}
          >
            <img
              src={img.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

