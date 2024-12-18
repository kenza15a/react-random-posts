import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <main className="flex flex-grow flex-col w-full  items-center py-8 min-h-screen px-6">
        <div className="mt-16  flex flex-col gap-4 w-[90vw] md:w-[60vw] justify-center items-center px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-4 italic">Contact</h1>
          <p className="text-lg text-gray-700">
            Vous avez une idée, une suggestion ou un retour pour améliorer Rapo
            ? Faites-nous part de vos pensées et aidez-nous à perfectionner
            notre générateur d'articles
          </p>
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default ContactPage;
