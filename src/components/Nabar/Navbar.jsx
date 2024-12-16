// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="  bg-[#9333EA] shadow-md text-white flex flex-row justify-around  md:justify-between gap-2  px-2 md:px-6 ">
      <Link to="/" className="style-none cursor-pointer">
        <img
          src="/assets/logo random posts blanc.png"
          alt="logo"
          className=" w-28 h-28 mx-auto"
        />
      </Link>
      <ul className=" list-none flex flex-row gap-2 md:gap-4 items-center justify-center  text-white font-semibold">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="#posts">Actualités</Link>
        </li>
        <li>
          <Link to="#footer">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
