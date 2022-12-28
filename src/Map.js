import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";

//   const data = [
//     {
//       startPoint: {
//         lat: 37.7749,
//         lng: -122.4194,
//       },
//       endPoint: {
//         lat: 34.0522,
//         lng: -118.2437,
//       },
//     },
//     {
//       startPoint: {
//         lat: 40.7128,
//         lng: -74.006,
//       },
//       endPoint: {
//         lat: 41.8781,
//         lng: -87.6298,
//       },
//     },
//     {
//       startPoint: {
//         lat: 47.6062,
//         lng: -122.3321,
//       },
//       endPoint: {
//         lat: 45.5122,
//         lng: -122.6587,
//       },
//     },
//   ];

const Map = (props) => {
  const [map, setMap] = useState(null);
  const routingMachineRef = useRef();
  const pluginRef = useRef();

  useEffect(() => {
    if (!map) return;
    const controlContainer = routingMachineRef.current.onAdd(map);
    pluginRef.current.appendChild(controlContainer);
  }, [map]);

  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={15}
      center={[59.82934196, 30.42423701]}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.data.map((route, index) => {
        return <RoutineMachine ref={routingMachineRef} testArray={route} key={index} />;
      })}
    </MapContainer>
  );
};

export default Map;
