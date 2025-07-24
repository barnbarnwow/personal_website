"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  size?: number;
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-square" style={{ width: "400px" }}>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
