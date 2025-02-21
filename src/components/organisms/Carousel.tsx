// src/components/organisms/Carousel.tsx
import React from 'react';
import CarouselGroup from '../molecules/CarouselGroup';
import CarouselImage from '../atoms/CarouselImage';

// Actualiza la interfaz para reflejar que `images` es un array de objetos con `src` y `alt`
interface ImageData {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const groupedImages: ImageData[][] = [];
    for (let i = 0; i < images.length; i += 3) {
        groupedImages.push(images.slice(i, i + 3));
    }
    
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {groupedImages.map((group, index) => (
          <CarouselGroup 
            key={index} 
            images={group} 
            className={index === 0 ? "carousel-item active" : "carousel-item"} // Agregar clase active solo al primer grupo
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
