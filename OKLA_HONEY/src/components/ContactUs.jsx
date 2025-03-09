import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <section id="contact" className="p-6 md:p-12 bg-[#462b1a]] flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
      <p className="text-[#d79831]  text-lg mb-6 text-center">We'd love to hear from you! Reach out anytime.</p>
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg p-6 md:p-12 rounded-lg">
        <div className="flex-1 space-y-4 text-left">
          <div className="flex items-center space-x-3 text-black">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-600" />
            <p>Oklahoney@outlook.com</p>
          </div>
          <div className="flex items-center space-x-3 text-black">
            <FontAwesomeIcon icon={faPhone} className="text-green-600" />
            <p>0715827859 | 0732232364</p>
          </div>
          <div className="flex items-center space-x-3 text-black">
            <FontAwesomeIcon icon={faLocationDot} className="text-green-600" />
            <p>Cherangany, Trans Nzoia County</p>
          </div>
        </div>
        <form className="flex-1 space-y-4" action="mailto:Oklahoney@outlook.com" method="post" encType="text/plain">
          <div>
            <label className="block text-green-700 font-medium">Name</label>
            <input type="text" className="w-full text-black p-2 border rounded" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block text-green-700 font-medium">Phone</label>
            <input type="tel" className="w-full text-black p-2 border rounded" placeholder="Enter your phone number" required />
          </div>
          <div>
            <label className="block text-green-700 font-medium">Message</label>
            <textarea className="w-full p-2 text-black border rounded" placeholder="Type your message" required></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded font-bold w-full">Become A Beekeper</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
