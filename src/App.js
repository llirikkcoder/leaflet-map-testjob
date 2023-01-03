import React, {useEffect} from "react";
import "./App.css";
import L from "leaflet";
import "leaflet-routing-machine";
import Map from "./Map";
import ConnectedDeliveryTable from "./components/ConnectedDeliveryTable";
import { useDispatch } from "react-redux";
// import { fetchDeliveryData } from "./actions";
// import { fetchDeliveryDataSuccess } from "./actions";
// import DeliveryTable from "./components/DeliveryTable";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchDeliveryData());
  // }, []);

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
