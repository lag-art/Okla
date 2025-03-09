import React, { useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../assets/menu.png"; // Menu icon
import logo from "../assets/logo.jpeg"; // Okla Natural Honey Logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full bg-[#462b1a] shadow-md z-50 py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ml-2 md:ml-4">
          <img src={logo} alt="Okla Natural Honey" className="h-10 w-10 md:h-12 md:w-12 mr-2 rounded-full" />
          <h1 className="text-lg .lg:text-xl font-bold text-yellow-400 ">Okla Natural Honey</h1>
        </div>

        {/* Menu Icon for Small Screens */}
        <button
          className="lg:hidden p-2 focus:outline-none bg-yellow-500 text-gray-100"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="Menu" className="h-8 w-8 bg-yellow-500" />
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="home" smooth={true} duration={500} className="hover:border-b-2 border-yellow-400 text-white transition cursor-pointer">
            Home
          </Link>
          <Link to="products" smooth={true} duration={500} className="hover:border-b-2 border-yellow-400 text-white transition cursor-pointer">
            Products
          </Link>
          <Link to="services" smooth={true} duration={500} className="hover:border-b-2 border-yellow-400 text-white transition cursor-pointer">
            Services
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:border-b-2 border-yellow-400 text-white transition cursor-pointer">
            About
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:border-b-2 border-yellow-400 text-white transition cursor-pointer">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Toggle Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-28 flex flex-col items-end space-y-2 bg-transparent">
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500">
            Home
          </Link>
          <Link to="products" smooth={true} duration={500} onClick={toggleMenu} className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500">
            Products
          </Link>
          <Link to="services" smooth={true} duration={500} onClick={toggleMenu} className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500">
            Services
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500">
            About
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="w-32 text-center cursor-pointer text-black bg-yellow-400 py-2 rounded-md shadow-lg transition hover:bg-yellow-500">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
