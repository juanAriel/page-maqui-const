import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt,
  name,
  description,
  price,
}) => {
  return (
    <div className="card-flip-main col-md-4">
      <div className="card-flip ">
        <div className="card-flip-inner">
          {/* Frente de la tarjeta - muestra imagen y nombre */}
          <div className="card-flip-front bg-black d-flex justify-content-center">
            <div className="align-content-center">
              <h1 className="text-white">{name}</h1>
              <img src={src} alt={alt} className="d-block" />
            </div>
          </div>

          {/* Reverso de la tarjeta - muestra precio y descripción */}
          <div className="card-flip-back bg-black text-white">
            <div className="card-body  align-content-center">
              <h5 className="card-title fw-bold">{name}</h5>
              {/* <h2>{name}</h2> */}
              <p className="mt-3  card-text">{description}</p>
              <a href="#" className="card-link btn bg-warning m-2">
                Alquiler: {price.toLocaleString()} Bs
              </a>
              <a href="#" className="card-link btn bg-warning m-2">
                Venta: {price.toLocaleString()} Bs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselImage;
