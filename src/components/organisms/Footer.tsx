import Map from "../molecules/Map";

const Footer = () => {
  return (
    <div className="bg-black w-100 pb-2 pt-5">
      <div className="content-main d-flex justify-content-between ms-5 me-5 mb-5">
        <div className="w-50  contact flex flex-col items-center ms-5">
          <h5 className="text-white fw-bold">comunicate a los numeros</h5>
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
        <div className="Location flex flex-col items-center me-5 w-50 ">
          <h5 className="text-white fw-bold">nos ubicamos en</h5>
          <Map />
        </div>
      </div>

      <strong className="text-white">cochabamba-bolivia | Dev Juan</strong>
    </div>
  );
};

export default Footer;
