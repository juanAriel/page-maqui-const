import React, { useState, useEffect } from "react";
import CarouselGroup from "../molecules/CarouselGroup";

interface ImageData {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupSize = isMobile ? 1 : 3;
  const groupedImages: ImageData[][] = [];
  for (let i = 0; i < images.length; i += groupSize) {
    groupedImages.push(images.slice(i, i + groupSize));
  }

  return (
    <div
      id="carouselExample"
      className="carousel slide p-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {groupedImages.map((group, index) => (
          <CarouselGroup
            key={index}
            images={group}
            className={index === 0 ? "carousel-item active" : "carousel-item"}
          />
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
