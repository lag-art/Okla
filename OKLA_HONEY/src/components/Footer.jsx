import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.jpeg";
import whatsappIcon from "../assets/whatsapp.png";
import instagramIcon from "../assets/ig.png";
import facebookIcon from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="p-6 md:p-8 bg-[#4a2d1b] text-white flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-center md:items-start">
        <img src={logo} alt="Okla Logo" className="h-12 md:h-16 w-auto rounded-lg" />
        <p className="mt-2 text-center md:text-left font-bold">Okla Natural Honey</p>
        <p className="mt-1 text-center md:text-left">Cherangany, Trans Nzoia County</p>
        <p className="mt-1 text-center md:text-left">0715827859 | 0732232364</p>
      </div>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="https://wa.me/254715827859" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="#">
          <img src={instagramIcon} alt="Instagram" className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="#">
          <img src={facebookIcon} alt="Facebook" className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="mailto:Oklahoney@outlook.com" className="text-white text-2xl hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="mt-6 md:mt-0 text-center md:text-right text-sm text-gray-300">
        &copy; 2025 Okla Natural Honey. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
