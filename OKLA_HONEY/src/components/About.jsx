import React from "react";
import aboutImg from "../assets/aboutall.jpg";

const About = () => {
  return (
    <section id="about" className="p-6 md:p-12 text-white bg-[#4a2d1b]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Okla Natural Honey</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Okla Natural Honey empowers farmers in Cherangany, Trans Nzoia County to thrive through sustainable beekeeping.
          We mobilize and train farmers, providing affordable beehives with free setup and initial harvesting assistance.
          We offer long-term support with 5-year contracts for purchasing honey and bee products at fair prices, along with
          expert consultation on best practices and hive management. We also supply beekeeping tools and sell premium natural
          bee products like honey, beeswax, propolis, and royal jelly.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <img src={aboutImg} alt="About Okla Natural Honey" className="rounded-lg shadow-lg w-full md:w-1/2" />
        <div className="text-white max-w-lg">
          <h3 className="text-2xl font-bold bg-yellow-500 text-white px-4 py-2 rounded-lg mb-4 inline-block">Vision</h3>
          <p className="text-lg italic mb-4">“To be the leading provider of high-quality, natural bee products in Kenya while empowering farmers through sustainable beekeeping, environmental conservation, and economic growth.”</p>
          
          <h3 className="text-2xl font-bold bg-yellow-500 text-white px-4 py-2 rounded-lg mb-4 inline-block">Mission</h3>
          <p className="text-lg mb-4">“At Okla Natural Honey, we are committed to promoting sustainable beekeeping by providing high-quality beehives, training, and market access to farmers. We strive to produce and supply pure, natural bee products while enhancing environmental conservation and improving livelihoods through fair trade and economic empowerment.”</p>
        </div>
      </div>

      <div className="mt-8 bg-[#4a2d1b] text-black p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold bg-yellow-500 text-white px-4 py-2 rounded-lg mb-4 inline-block">Goals & Objectives</h3>
        <ul className="list-disc text-white pl-6 text-lg space-y-2">
          <li><span className="font-semibold">Promote Sustainable Beekeeping:</span> Mobilize and train farmers to adopt beekeeping as a profitable and eco-friendly venture.</li>
          <li><span className="font-semibold">Enhance Honey Production & Quality:</span> Ensure the production of high-quality, natural honey and other bee products through proper training and quality control.</li>
          <li><span className="font-semibold">Expand Market Access:</span> Create a reliable market for farmers by purchasing their bee products and connecting them to buyers.</li>
          <li><span className="font-semibold">Support Farmers with Resources & Training:</span> Provide beehives, harvesting tools, and continuous education.</li>
          <li><span className="font-semibold">Drive Environmental Conservation:</span> Promote tree planting and sustainable land management practices.</li>
          <li><span className="font-semibold">Diversify Agricultural Activities:</span> Integrate beekeeping with other agricultural ventures to maximize productivity.</li>
          <li><span className="font-semibold">Secure Funding & Partnerships:</span> Attract investors and NGOs to support beekeeping expansion.</li>
          <li><span className="font-semibold">Ensure Business Growth & Sustainability:</span> Scale operations by increasing honey production and expanding market reach.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
