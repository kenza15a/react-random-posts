// components/Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="  bg-[#9333EA] shadow-md text-white flex flex-row justify-around  md:justify-between gap-2  px-2 md:px-6 ">
      <a href="/" className="style-none cursor-pointer">
        <img
          src="/assets/logo random posts blanc.png"
          alt="logo"
          className=" w-28 h-28 mx-auto"
        />
      </a>
      <ul className=" list-none flex flex-row gap-2 md:gap-4 items-center justify-center  text-white font-semibold">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="#posts">Actualités</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
