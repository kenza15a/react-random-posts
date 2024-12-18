import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-4 w-[90vw] md:w-[60vw] justify-center items-center px-6  md:px-12 ">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
