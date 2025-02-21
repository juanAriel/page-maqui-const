import React from "react";
import CarouselImage from "../atoms/CarouselImage";

interface ImageData {
  src: string;
  alt: string;
}
interface CarouselGroupProps {
  images: ImageData[];
  className?: string;
}

const CarouselGroup: React.FC<CarouselGroupProps> = ({ images, className }) => {
  console.log(images[0].src);
  return (
    <div className={className}>
      <div className="row">
        {images.map((image, index) => (
          <CarouselImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default CarouselGroup;
