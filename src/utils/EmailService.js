import emailjs from "@emailjs/browser";

/**
 * @param {{email: string, message: string}} templateParams
 * @returns {Promise<number>}
 */

const sendEmail = (templateParams) => {
  return new Promise((resolve, reject) => {
    emailjs
      .send(
        "service-alqui-const",
        "template_fsojkza",
        templateParams,
        "9D2pr5qQ3W2yJwH_p"
      )
      .then((response) => {
        console.log("email send successfully", response.status, response.text);
        resolve(response.status);
      })
      .catch((error) => {
        console.error("upp error", error);
        reject(error);
      });
  });
};

export default sendEmail;
