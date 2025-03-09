import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import About from "./components/About";
import Location from "./components/Location";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="bg-[#4a2d1b] text-white min-h-screen">
        <Header />
        
          <Home />
          
          <Products />
          

          <Services />
          <About />
          <ContactUs />
          <Location/>
        
        <Footer />
        <ScrollToTop/>
      </div>
    </Router>
  );
};
export default App



