import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import packageImg from "../assets/supply.jpg";
import gearsImg from "../assets/bhives.jpg";
import productImg from "../assets/product.jpg";
import centrifugeImg from "../assets/extractor.jpeg";
import smokerImg from "../assets/smoker.jpeg";
import brushImg from "../assets/brush.jpeg";
import pressImg from "../assets/press.jpeg";
import filterImg from "../assets/buck&seaver.jpeg";
import beehiveImg from "../assets/langstrothmore.jpeg";
import veilImg from "../assets/harvestkit.jpeg";
import suitImg from "../assets/packed.jpeg";
import topbarImg from "../assets/topbar.mp4";
import combsImg from "../assets/combs.jpeg";

const Product = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { img: centrifugeImg, title: "Honey Extractor", description: "This honey extractor is a fantastic addition to any beekeeper's toolkit! Its simple design makes it easy to use and clean, and the durable construction ensures it will last for many harvests." },
    { img: smokerImg, title: "Bee Smoker", description: "This is an essential tool for hive maintenance and honey harvesting, making it safer and more enjoyable for both the beekeeper and the bees." },
    { img: brushImg, title: "Bee Brush", description: "These bee brushes are a must-have for any beekeeper who values the health and well-being of their bees." },
    { img: pressImg, title: "Honey Press", description: "This honey press is a fantastic tool for beekeepers looking to maximize their honey harvest!" },
    { img: filterImg, title: "Honey Filter", description: "This honey filter is a must-have for achieving a smooth, clean, and high-quality honey product." },
    { img: beehiveImg, title: "Langstroth Beehives", description: "This apiary is a testament to the dedication and care we put into our beekeeping practices." },
    { img: veilImg, title: "Beekeeping Veils", description: "These veils are easy to put on and take off, making them convenient for quick hive checks or longer inspections." },
    { img: suitImg, title: "Okla Honey", description: "This raw, unfiltered honey offers a pure, naturally sweet boost of essential nutrients and antioxidants straight from nature's hive." },
    { img: combsImg, title: "Raw Honeycomb", description: "This raw honeycomb is a true gift from nature! The golden honey is rich and flavorful, while the beeswax adds a delightful chewy texture." }
  ];

  return (
    <section id="products" className="p-6 md:p-12 text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-[#472c19] p-6 rounded-lg shadow-lg text-center">
          <img src={packageImg} alt="Beekeeping Supply" className="rounded-lg mb-4" />
          <p className="text-lg">We provide a one-stop shop for all essential beekeeping and harvesting tools.</p>
        </div>
        <div className="bg-[#f4ba05] p-6 rounded-lg shadow-lg text-center text-black">
          <img src={gearsImg} alt="Beehives" className="rounded-lg mb-4" />
          <p className="text-lg">This initiative makes beekeeping accessible by providing affordable, high-quality beehives.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#fbee15] text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-yellow-400 transition"
          >
            See More
          </button>
        </div>
        <div className="bg-[#472c19] p-6 rounded-lg shadow-lg text-center">
          <img src={productImg} alt="Bee Products" className="rounded-lg mb-4" />
          <p className="text-lg">We are committed to delivering exceptional, natural bee products to consumers.</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black  bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-[#462b1a] p-6 rounded-lg shadow-lg max-w-[900px] w-full h-[700px] md:w-[800px] md:h-[550px] overflow-y-auto relative">
            <div className="flex justify-between  items-center bg-white p-4 sticky mg-0 top-0 shadow-md z-10">
              <h3 className="text-2xl font-bold text-[#4a2d1b]">Okla Products</h3>
              <button 
                className="text-yellow  hover:bg-black rounded-full w-8 h-8 flex items-center bg-yellow-500 justify-center transition"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {products.map((product, index) => (
                <div key={index} className="bg-[#d79831] p-4 rounded-lg shadow-lg text-center text-[#4a2d1b]">
                  <img src={product.img} alt={product.title} className="w-full h-32 object-cover rounded-lg mb-2" />
                  <h4 className="text-lg font-semibold">{product.title}</h4>
                  <p className="text-sm">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
