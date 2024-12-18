import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "../../schemas/contactFormSchema";
import Button from "../../components/Button/Button";

const ContactForm = ({ handleSubmit, ...props }) => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange", // Enable real-time validation
  });

  const onFormSubmit = (data) => {
    handleSubmit(data);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-[90vw] md:w-[60vw] justify-center items-center px-6 md:px-12"
        onSubmit={onSubmit(onFormSubmit)}
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
