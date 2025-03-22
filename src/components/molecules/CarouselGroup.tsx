import React from "react";
import CarouselImage from "../atoms/CarouselImage";

interface ImageData {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}
interface CarouselGroupProps {
  images: ImageData[];
  className?: string;
}

const CarouselGroup: React.FC<CarouselGroupProps> = ({ images, className }) => {
  return (
    <div className={className}>
      <div className="row">
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image.src}
            alt={image.alt}
            name={image.name}
            description={image.description}
            price={image.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselGroup;
