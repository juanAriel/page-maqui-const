import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[-17.392694, -66.269257]} // initial coordinates
      zoom={15}
      style={{ width: "100%", height: "150px" }} // map size
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-17.392694, -66.269257]}>
        <Popup>
          More info here.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
