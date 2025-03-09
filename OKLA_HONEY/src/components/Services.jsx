import React from "react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.jpeg";
import trainingImg from "../assets/training.jpg";
import installImg from "../assets/install.jpg";
import consultantsImg from "../assets/consultants.jpg";
import harvestImg from "../assets/harvest.jpg";
import contractImg from "../assets/contract.jpg";

const Service = () => {
  return (
    <section id="services" className="p-6 md:p-12 text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[ 
          { img: logoImg, title: "Igniting the Spark: Farmer Mobilization and Education", desc: "We actively engage with local farmers, showcasing the transformative potential of beekeeping. We demonstrate how apiculture offers a dual benefit: a sustainable income stream and a vital contribution to environmental health. Our workshops and outreach programs highlight the low barrier to entry, the potential for high returns, and the positive impact on local biodiversity." },
          { img: trainingImg, title: "Continuous Learning and Development: Training and Seminars", desc: "We foster a culture of continuous learning through regular training sessions and seminars. These programs cater to both beginner and experienced beekeepers, covering topics ranging from advanced hive management techniques and honey extraction best practices to value-added product development and sustainable beekeeping methods." },
          { img: installImg, title: "Setting the Foundation: Accessible Beekeeping Infrastructure", desc: "We remove the hurdles to starting a beekeeping operation by providing high-quality, locally-sourced beehives at competitive prices. But we don't just sell hives; we invest in our farmers' success. Every beehive purchase includes free setup and comprehensive training, equipping new beekeepers with the fundamental knowledge and practical skills to manage their colonies effectively from day one." },
          { img: consultantsImg, title: "Expert Guidance Every Step of the Way: Beekeeping Consultation", desc: "Our team of experienced apiculture specialists provides ongoing consultation services. We offer personalized guidance on a range of topics, including optimal hive management techniques, disease prevention and treatment, colony health monitoring, and strategies for maximizing honey production." },
          { img: harvestImg, title: "Empowering the First Harvest: Free Extraction Services", desc: "We understand the excitement and potential challenges of the first harvest. To ensure a smooth and successful start, we offer free honey extraction services for the initial yield. This hands-on support allows farmers to gain confidence in the extraction process, learn best practices, and maximize the quality and quantity of their first harvest." },
          { img: contractImg, title: "Building Long-Term Partnerships: Guaranteed Market Access", desc: "We believe in fostering sustainable growth for our beekeepers. That's why we offer secure, 5-year contracts to purchase honey and other bee products at fair market prices. This commitment provides farmers with financial stability, predictable income, and a reliable market for their products, encouraging long-term investment in their apiaries." }
        ].map((service, index) => (
          <motion.div key={index} className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <img src={service.img} alt={service.title} className="rounded-lg w-64 h-64 object-cover" />
            <h3 className="text-xl font-bold text-center bg-yellow-500 p-2 rounded-md">{service.title}</h3>
            <p className="text-lg text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
