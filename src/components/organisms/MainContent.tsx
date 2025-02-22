import Carousel from "./Carousel";
import imagePaths from "../../assets/imagePaths";
import CarouselImage from "../atoms/CarouselImage";

const MainContent = () => {
  return (
    <div className="justify-content-center">
      <div className="d-flex justify-content-center">
        <h1 className="first-title">MAQUI</h1>
        <h1 className="second-title text-dark"> CONST</h1>
      </div>
      <div>
        <h4 className="fw-bold text-dark">Ofrecemos alquiler y venta de maquinaria de equipos de construccion.</h4>
      </div>
      <div>
        <h1 className="title-section-tools mt-5 mb-5">Nuestro Productos</h1>
        <Carousel images={imagePaths}/>
      </div>
    </div>
  );
};

export default MainContent;
