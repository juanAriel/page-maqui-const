import Button from "../atoms/Button";
import Logo from "../atoms/Logo";

const scrollToContactForm = () => {
  const element = document.getElementById("contactForm");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header className="header-container container-fluid py-3 px-2 px-md-5 mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <Logo />

        <Button
          label="Contactame"
          className="rounded-pill fw-bold"
          styles={{
            background: "#FFA500",
            height: 50,
            width: 120,
            padding: "revert",
            margin: 10,
          }}
          onClick={scrollToContactForm}
        />
      </div>
    </header>
  );
};

export default Header;
