import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const handleFormSubmit = (data) => {
    alert("Form Submitted Data:", data);
  };

  return (
    <>
      <div className="mt-4 md:mt-16 flex flex-col gap-4 w-[90vw] md:w-[60vw] justify-center items-center px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-4 italic">Contact</h1>
        <p className="text-lg text-gray-700">
          Vous avez une idée, une suggestion ou un retour pour améliorer Rapo ?
          Faites-nous part de vos pensées et aidez-nous à perfectionner notre
          générateur d'articles.
        </p>
        {/* Pass handleFormSubmit to ContactForm */}
        <ContactForm handleSubmit={handleFormSubmit} />
      </div>
    </>
  );
};

export default ContactPage;
