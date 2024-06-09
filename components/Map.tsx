"use client"

import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import marketIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: marketIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: number[];
  zoomLevel?: number; // Añadido para permitir un nivel de zoom personalizado
}

const Map: React.FC<MapProps> = ({ center, zoomLevel }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [4.7110, -74.0721]} // Coordenadas por defecto de Bogotá
      zoom={zoomLevel || (center ? 13 : 10)} // Nivel de zoom predeterminado ajustado
      scrollWheelZoom={false}
      className={`h-full rounded-lg`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  );
};

export default Map;
