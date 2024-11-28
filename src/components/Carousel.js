import React, { useState } from 'react';
import b17 from "../assets/b17.jpg";
import b4 from "../assets/b4.jpg";
import b7 from "../assets/b7.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: b17,
      alt: "Slide 1"
    },
    {
      url: b4,
      alt: "Slide 2"
    },
    {
      url: b7,
      alt: "Slide 3"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 sm:h-96 lg:h-128 overflow-hidden">
      {/* Slide */}
      <div
        className="w-full h-full flex transition-all duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide.url} alt={slide.alt} className="w-full h-full object-none" />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-red-500' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
