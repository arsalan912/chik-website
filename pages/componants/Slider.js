// import Image from "next/image";
import React, { useState } from "react";
import Image from "next/image";
import { SliderData } from "./sliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };
  const prevSlide = () => {
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[1.5rem] translate-y-[-50%] text-white/70 text-2xl sm:text-3xl cursor-pointer select-none z-[2]"
                // size={25}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[1.5rem] translate-y-[-50%] text-white/70 text-2xl sm:text-3xl cursor-pointer select-none z-[2]"
                // size={25}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
