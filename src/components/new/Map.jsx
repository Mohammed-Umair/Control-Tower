import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../new/Pagination/Map.css";
import markerIcon from "../assets/map.png";
function Map() {
  const markerData = [
    { position: [28.6139, 77.209], name: "R732", desc: "Delay from Vendor",add:"Fedmi,XI and Diomai" },
    {
      position: [19.076, 72.8777],
      name: "R696",
      desc: "Delay from Vendor",add:"Fedmi,XI and Diomai"
    },
    {
      position: [13.0827, 80.2707],
      name: "R987",
      desc: "Delay from Vendor",add:"Fedmi,XI and Diomai"
    },
  ];
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      className="map"
      center={[20.5937, 78.9629]}
      zoom={4.5}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      {markerData.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Tooltip className="custom-tooltip">
            <div>
              <strong>{marker.name}</strong>
            </div>
            <div style={{
                color:"red"
            }}> {marker.desc}</div>
            <div> {marker.add}</div>

          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
