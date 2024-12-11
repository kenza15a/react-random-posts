import React from "react";

const Footer = () => {
  return (
    <footer
      name="footer"
      id="footer"
      className="bg-[#9333EA] text-black flex flex-col md:flex-row items-center justify-center py-6 h-16 max-h-[10vh] min-h-max"
    >
      <p className=" flex flex-col md:flex-row text-center text-sm mx-auto  gap-2">
        © Kenza Filali -
        <a
          href="mailto:kenza.filal.rahal@gmail.com"
          className="text-white hover:underline cursor-pointer"
        >
          kenza.filal.rahal@gmail.com
        </a>
        - Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
