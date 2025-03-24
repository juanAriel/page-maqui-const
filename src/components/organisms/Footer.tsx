import FormContact from "../molecules/FormContact";
import Map from "../molecules/Map";

const Footer = () => {
  return (
    <div className="bg-black w-100 pb-2 p-5 ">
      <div className="content-main row d-flex justify-content-between mb-4">
        <div className=" contact flex flex-col items-center  col-md-4">
          <h5 className="text-white fw-bold">Comunicate a los numeros</h5>
          <div className="content-number-1 mt-4 d-flex justify-content-center  align-items-center">
            <img
              style={{
                width: "40px",
                marginRight: "10px",
              }}
              src="../../../public/images/phone.png"
              alt="logo-phone"
            />
            <h4 className="text-white mb-0 fw-bold">700000001</h4>
          </div>
          <div className="content-number-2 mt-3 d-flex justify-content-center  align-items-center">
            <img
              style={{
                width: "40px",
                marginRight: "10px",
              }}
              src="../../../public/images/phone.png"
              alt="logo-phone"
            />
            <h4 className="text-white mb-0 fw-bold">700000001</h4>
          </div>
        </div>
        <div className="contact col-md-4" id="contactForm">
          <h5 className="text-white fw-bold">Contactanos</h5>
          <FormContact />
        </div>
        <div className="Location flex flex-col items-center col-md-4">
          <h5 className="text-white fw-bold">Nos ubicamos en</h5>
          <Map />
        </div>
      </div>

      <strong className="text-white">cochabamba-bolivia | Dev Juan</strong>
    </div>
  );
};

export default Footer;
