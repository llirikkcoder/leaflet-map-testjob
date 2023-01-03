import React from "react";
import "./App.css";
import L from "leaflet";
import "leaflet-routing-machine";
import Map from "./Map";
import ConnectedDeliveryTable from "./components/ConnectedDeliveryTable";

function App() {

  return (
    <div className="App">
      <ConnectedDeliveryTable />
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
