import Carousel from "./Carousel";
import imagePaths from "../../assets/imagePaths";
import Button from "../atoms/Button";

const MainContent = () => {
  return (
    <div className="justify-content-center">
      <div className="row m-5">
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <div className="w-100 d-flex">
            <h1 className="first-title col-6 m-0 text-end">MAQUI</h1>
            <h1 className="second-title text-black col-6 m-0 text-start">
              CONST
            </h1>
          </div>
          <div className="m-2">
            <h4 className="fw-bold text-black">
              Ofrecemos alquiler y venta de maquinaria de equipos de
              construccion.
            </h4>
            <Button
              label="Contactame"
              className="rounded-5 text-white bg-black fw-bold m-2 "
            />
          </div>
        </div>
        <div className="col-6">
          <img
            className="image-logo h-100 w-100 rounded-4"
            src="../../../public/images/images-tools/equipos-removebg-preview.png"
            alt="Logo"
          />
        </div>
      </div>

      <div>
        <h1 className="title-section-tools mt-5 mb-5">Nuestro Productos</h1>
        <Carousel images={imagePaths} />
      </div>
    </div>
  );
};

export default MainContent;
