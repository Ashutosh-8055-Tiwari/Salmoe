import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Detailed data for Jammu and Kashmir districts with more precise coordinates and bounds
const districts = [
  { name: "Anantnag", coordinates: [33.73, 75.15], bounds: [[33.65, 75.05], [33.85, 75.25]], description: "Known for its scenic beauty and historical significance" },
  { name: "Bandipora", coordinates: [34.42, 74.66], bounds: [[34.35, 74.55], [34.50, 74.77]], description: "A district with picturesque landscapes and rich cultural heritage" },
  { name: "Budgam", coordinates: [34.0, 74.75], bounds: [[33.90, 74.65], [34.10, 74.85]], description: "Central district with diverse geographical features" },
  { name: "Baramulla", coordinates: [34.2, 74.36], bounds: [[34.10, 74.26], [34.30, 74.46]], description: "Known for its historical and strategic importance" },
  { name: "Srinagar", coordinates: [34.08, 74.8], bounds: [[34.00, 74.70], [34.16, 74.90]], description: "The summer capital of Jammu and Kashmir" },
  { name: "Kupwara", coordinates: [34.53, 74.26], bounds: [[34.43, 74.16], [34.63, 74.36]], description: "A district with lush green landscapes" },
  { name: "Ganderbal", coordinates: [34.23, 74.78], bounds: [[34.13, 74.68], [34.33, 74.88]], description: "Known for its natural beauty and water resources" },
];

export default function EnlargedJKMap() {
  const [isClient, setIsClient] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Create map with a wider view focused on Jammu and Kashmir
      const map = L.map("map", {
        zoomControl: true, // Enable zoom controls
        scrollWheelZoom: true, // Enable scroll wheel zoom
        doubleClickZoom: true, // Enable double click zoom
        boxZoom: true, // Enable box zoom
        dragging: true,
        touchZoom: true,
      }).setView([34.15, 74.75], 9); // Adjusted zoom and center to better show all districts

      // Add more detailed map tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 12, // Increased max zoom
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Create district layers with more interactive features
      districts.forEach((district) => {
        const polygon = L.polygon(district.bounds, {
          color: "blue",
          fillColor: "#3388ff",
          fillOpacity: 0.3,
          weight: 3,
        }).addTo(map);

        // Add popup with district information
        polygon.bindPopup(`
          <div>
            <h3>${district.name}</h3>
            <p>${district.description}</p>
            <small>Coordinates: ${district.coordinates.join(', ')}</small>
          </div>
        `);

        // Interactive hover and click effects
        polygon.on('mouseover', () => {
          polygon.setStyle({
            fillOpacity: 0.5,
            color: 'red'
          });
        });

        polygon.on('mouseout', () => {
          polygon.setStyle({
            fillOpacity: 0.3,
            color: 'blue'
          });
        });

        polygon.on('click', () => {
          setSelectedDistrict(district);
        });
      });
    }
  }, [isClient]);

  return (
    <div className="container" style={{ 
      display: "flex", 
      height: "600px", // Increased height
      width: "100%",
      border: "2px solid #ddd",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <div className="sidebar" style={{ 
        width: "300px", 
        padding: "15px", 
        background: "#f9f9f9", 
        overflowY: "auto" 
      }}>
        <h2>Jammu and Kashmir Districts</h2>
        {selectedDistrict && (
          <div className="selected-district">
            <h3>{selectedDistrict.name}</h3>
            <p>{selectedDistrict.description}</p>
          </div>
        )}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {districts.map((district) => (
            <li 
              key={district.name}
              style={{ 
                padding: "10px", 
                margin: "5px 0", 
                backgroundColor: selectedDistrict?.name === district.name ? "#e0e0e0" : "transparent",
                cursor: "pointer",
                borderRadius: "5px"
              }}
              onClick={() => setSelectedDistrict(district)}
            >
              {district.name}
            </li>
          ))}
        </ul>
      </div>
      {isClient && <div id="map" style={{ flex: 1 }}></div>}
    </div>
  );
}