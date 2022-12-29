import React, {useEffect} from "react";
import "./App.css";
import DeliveryTable from "./components/DeliveryTable";
import L from "leaflet";
import "leaflet-routing-machine";
import Map from "./Map";
import { useDispatch } from "react-redux";
import { fetchDeliveryData } from "./actions";
import ConnectedDeliveryTable from "./components/ConnectedDeliveryTable";

const data = [
  {
    startPoint: {
      lat: 59.84660399,
      lng: 30.29496392,
    },
    endPoint: {
      lat: 59.82934196,
      lng: 30.42423701,
    },
  },
  // {
  //   startPoint: {
  //     lat: 59.82934196,
  //     lng: 30.42423701,
  //   },
  //   endPoint: {
  //     lat: 59.82761295,
  //     lng: 30.41705607,
  //   },
  // },
];



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDeliveryData());
  }, []);

  return (
    <div className="App">
      {/* <ConnectedDeliveryTable /> */}
      <DeliveryTable data={data} />
      <Map data={data} />
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
