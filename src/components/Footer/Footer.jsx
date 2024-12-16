import React from "react";

const Footer = () => {
  return (
    <footer
      name="footer"
      id="footer"
      className="bg-[#9333EA] text-black flex flex-col md:flex-row items-center justify-center py-4  md:py-12  min-h-max  md:h-20   w-full static bottom-0"
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
