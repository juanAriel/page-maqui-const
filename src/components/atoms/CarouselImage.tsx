import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
  return (
    <div className=" col-md-4 ">
      <div className="content-card-image bg-black  d-flex align-items-center justify-content-center ">
        <img src={src} alt={alt} className="d-block  " />
      </div>
    </div>
  );
};

export default CarouselImage;
