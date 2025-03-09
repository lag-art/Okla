import React, { useEffect, useRef } from "react";
import bgVideo from "../assets/bg.mp4";
import honeyShot from "../assets/honeyshot.jpg";
import waxImg from "../assets/wax.jpeg";
import installImg from "../assets/install.jpg";
import harvestKitImg from "../assets/harvestkit.jpeg";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const loopVideo = () => {
        video.currentTime = 0;
        video.play();
      };
      
      video.addEventListener("timeupdate", () => {
        if (video.currentTime >= 14) {
          loopVideo();
        }
      });
    }
  }, []);

  return (
    <section id="home"className="relative flex flex-col md:flex-row items-center justify-between h-screen text-white text-center p-6 md:p-12">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      {/* Left Content */}
      <div className="relative top-26 z-10 max-w-lg text-left ml-0 sm:ml-1 bg-black-700 bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h4 className="text-3xl md:text-5xl font-bold mb-4">OKLA Natural Honey</h4>
        <p className="text-base text-xxs md:text-lg mb-6">
          We are committed to promoting sustainable beekeeping and empowering farmers in Cherangany, Trans Nzoia County. 
          Through our services.
        </p>
        <a 
          href="#services"
          className="bg-[#f4ba05] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Explore Service
        </a>
      </div>
      
      {/* Floating Images */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        {[honeyShot, waxImg, installImg, harvestKitImg].map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt="Beekeeping Product" 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-md hover:scale-110 transition-transform duration-300 ease-in-out" 
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

