import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  Polyline,
  TileLayer,
} from "react-leaflet";
import "./App.css";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import DeliveryTable from "./components/DeliveryTable";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// import DeliveryMap from "./components/_DeliveryMap";
import L from "leaflet";
import "leaflet-routing-machine";
// import Routing from "./components/RoutingMachine";
import Map from "./Map";

const data = [
  // {
  //   startPoint: {
  //     lat: 37.7749,
  //     lng: -122.4194,
  //   },
  //   endPoint: {
  //     lat: 34.0522,
  //     lng: -118.2437,
  //   },
  // },
  {
    startPoint: {
      lat: 40.7128,
      lng: -74.006,
    },
    endPoint: {
      lat: 41.8781,
      lng: -87.6298,
    },
  },
  // {
  //   startPoint: {
  //     lat: 47.6062,
  //     lng: -122.3321,
  //   },
  //   endPoint: {
  //     lat: 45.5122,
  //     lng: -122.6587,
  //   },
  // },
];

// function DeliveryMap(props) {
//   const map = useMap();
//   const { startPoint, endPoint } = props;

//   useEffect(() => {
//     const routingControl = L.Routing.control({
//       waypoints: [
//         L.latLng(startPoint.lat, startPoint.lng),
//         L.latLng(endPoint.lat, endPoint.lng),
//       ],
//     });

//     routingControl.addTo(map);

//     return (
//       <MapContainer center={[51.505, -0.09]} zoom={13}>
//         {routingControl}
//       </MapContainer>
//     );
//   }, [startPoint, endPoint]);
// }

function App() {
  const position = [40.7128, -74.006];

  const limeOptions = { color: "red" };
  return (
    <div className="App">
      <DeliveryTable data={data} />
      {/* <DeliveryMap
        data={data}
      /> */}

      {/* <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {data.map((delivery, index) => {
          const { startPoint, endPoint } = delivery;
          console.log("startPoint", startPoint);
          console.log("endPoint", endPoint);
          return (
            <Polyline
              key={index}
              pathOptions={limeOptions}
              positions={[
                [startPoint.lat, startPoint.lng],
                [endPoint.lat, endPoint.lng],
              ]}
            />
          );
        })}
        <LeafletGeocoder />
        <LeafletRoutingMachine />
      </MapContainer> */}

      {/* <DeliveryMap
        startPoint={{ lat: 37.7749, lng: -122.4194 }}
        endPoint={{ lat: 34.0522, lng: -118.2437 }}
      /> */}

      <Map />

    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default App;


