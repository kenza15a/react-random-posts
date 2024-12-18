import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../../schemas/contactFormSchema";
import Button from "../../components/Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ handleSubmit, ...props }) => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const sendEmail = async (data) => {
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      message: data.message,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("Email successfully sent!", result);
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("An error occurred while sending your message. Please try again.");
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token); // Update the reCAPTCHA token
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-[90vw] md:w-[60vw] justify-center items-center px-6 md:px-12"
        onSubmit={onSubmit(sendEmail)}
      >
        <input
          type="text"
          placeholder="Votre Nom"
          {...register("nom")}
          className={`input ${errors.nom ? "!border-red-500 border-2" : ""}`}
        />
        {errors.nom && <p className="text-red-600">{errors.nom.message}</p>}

        <input
          type="text"
          placeholder="Votre Prenom"
          {...register("prenom")}
          className={`input ${errors.prenom ? "!border-red-500 border-2" : ""}`}
        />
        {errors.prenom && (
          <p className="text-red-600">{errors.prenom.message}</p>
        )}

        <input
          type="email"
          placeholder="Votre Email"
          {...register("email")}
          className={`input ${errors.email ? "!border-red-500 border-2" : ""}`}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        <textarea
          placeholder="Message"
          {...register("message")}
          className={`input ${
            errors.message ? "!border-red-500 border-2" : ""
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-600">{errors.message.message}</p>
        )}

        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        />

        <Button
          buttonType="submit"
          buttonText="Envoyer"
          className="!w-full hover:!scale-70 transition duration-300 ease-in-out"
        />
      </form>
    </div>
  );
};

export default ContactForm;
