import Logo from "../atoms/Logo";
import Button from "../atoms/Button";

const Header = () => {
  return (
    <div className="w-100 d-flex justify-content-between">
      <Logo />
      <Button styles="btn-contact" label="fw-bold " />
    </div>
  );
};

export default Header;
