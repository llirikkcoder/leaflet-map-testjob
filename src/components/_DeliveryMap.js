import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";


function DeliveryMap(props) {
  const { data } = props;
  const position = [37.7749, -118.2437];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((delivery) => {
        const { startPoint, endPoint } = delivery;
        return (
          <Polyline
            positions={[
              [startPoint.lat, startPoint.lng],
              [endPoint.lat, endPoint.lng],
            ]}
            color="#0000FF"
            weight={2}
          />
        );
      })}
    </MapContainer>
  );
}

export default DeliveryMap;
