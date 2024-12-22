"use client"
import React, { useState } from "react";
import slider0 from '../../public/slider-0.jpg'

const Carousel = () => {
  const slides = [
   

    {
      id: 1,
      image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
      label: "Second slide label",
      text: "Some representative placeholder content for the second slide.",
    },
  
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative" id="carouselExampleCaptions">
      {/* Carousel Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 opacity-50 transition-opacity duration-[600ms] ${
              activeSlide === index ? "opacity-100" : ""
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative float-left w-full transition-transform duration-[600ms] ${
              activeSlide === index ? "block" : "hidden"
            }`}
          >
            <img src={slide.image} className="block w-full min-h-96" alt={slide.label} />
          
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 hover:opacity-90"
        type="button"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 hover:opacity-90"
        type="button"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
