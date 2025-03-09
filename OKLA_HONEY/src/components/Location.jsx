import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Location = () => {
  const sinendetPosition = [1.0174244, 35.0351852];

  return (
    <section className="p-6 md:p-12 bg-[#4a2d1b] text-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Okla Natural Honey</h2>
      <h3 className="text-lg md:text-2xl mb-6">Sinendet Along Kitale-Cherangany Route</h3>
      
      <div className="w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg border-4 border-[#d79831]">
        <MapContainer center={sinendetPosition} zoom={16} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={sinendetPosition}>
            <Popup>
              Sinendet<br />
              Location: Kitale - Cherangany Road, Kitale, Kenya
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Location;
