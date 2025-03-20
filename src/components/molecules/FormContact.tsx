import React from "react";
import Button from "../atoms/Button";

const FormContact = () => {
  return (
    <div>
      <input
        className="form-control mt-2"
        name="myInput"
        placeholder="john@gmail.com"
      />
      <textarea
        className="form-control mt-2"
        name="postContent"
        placeholder="Message here"
      />
      <Button
        label="Enviar"
        className="rounded-5 text-black fw-bold m-2 "
        styles={{
          background: "#FFA500",
          height: 30,
          padding: "revert",
        }}
      />
    </div>
  );
};

export default FormContact;
