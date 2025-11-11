import React, { useState } from "react";
import Button from "../atoms/Button";
import Swal from "sweetalert2";
import sendEmail from "../../utils/EmailService";

const FormContact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    const templateParams = {
      email: email,
      message: message,
    };

    setIsLoading(true);

    try {
      const response = await sendEmail(templateParams);

      if (response === 200) {
        await Swal.fire({
          icon: "success",
          title: "Correo enviado",
          text: "Tu mensaje ha sido enviado con éxito.",
        }).then(() => {
          setEmail("");
          setMessage("");
        });
      }
    } catch (error) {
      console.error("Error al enviar Email", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <input
        id="email"
        className="form-control mt-2"
        name="email"
        placeholder="john@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <textarea
        id="message"
        className="form-control mt-2"
        name="message"
        placeholder="Message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isLoading}
      />
      <Button
        label="Enviar"
        className={`rounded-5 text-black fw-bold m-2 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        styles={{
          background: "#FFA500",
          height: 40,
          width: 100,
          padding: "revert",
        }}
        disabled={isLoading}
      />
    </form>
  );
};

export default FormContact;
