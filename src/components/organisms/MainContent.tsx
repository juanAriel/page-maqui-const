import Carousel from "./Carousel";
import imagePaths from "../../assets/imagePaths";

const MainContent = () => {
  return (
    <div className="container-fluid px-3 px-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0">
          <div className="w-100 d-flex flex-column flex-md-row">
            <h1 className="first-title m-0 text-center text-md-end col-12 col-md-6">
              MAQUI
            </h1>
            <h1 className="second-title text-black m-0 text-center text-md-start col-12 col-md-6">
              CONST
            </h1>
          </div>
          <div className="m-2 px-3 px-md-0 text-center text-md-start">
            <h4 className="fw-semibold text-black mx-0 mx-md-5">
              Ofrecemos alquiler y venta de maquinaria de equipos de
              construcción, garantizando calidad y soporte técnico
              especializado.
            </h4>
          </div>
        </div>

        {/* Imagen */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            className="image-logo img-fluid rounded-4 w-100"
            src="../../../public/images/images-tools/equipos-removebg-preview.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="mt-5">
        <section className="servicios text-center">
          <div className="container">
            <h1 className="title-section-tools mb-5 text-center">
              Nuestros Servicios
            </h1>
            <div className="row">
              <div className="col-md-4 servicio">
                <i className="bi bi-truck"></i>
                <h3 className="fw-bold text-black">Alquiler de maquinaria</h3>
                <p className="fw-bold">
                  Equipos modernos y seguros para tus proyectos.
                </p>
              </div>
              <div className="col-md-4 servicio">
                <i className="bi bi-tools"></i>
                <h3 className="fw-bold text-black">Venta de equipos</h3>
                <p className="fw-bold">
                  Amplia variedad de maquinaria nueva y usada.
                </p>
              </div>
              <div className="col-md-4 servicio">
                <i className="bi bi-gear"></i>
                <h3 className="fw-bold text-black">Servicio técnico</h3>
                <p className="fw-bold">
                  Mantenimiento y repuestos para tus equipos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-5">
        <h1 className="title-section-tools mb-1 text-center">
          Nuestros Productos
        </h1>
        <Carousel images={imagePaths} />
      </div>
    </div>
  );
};

export default MainContent;
