import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
// import { useMap } from "react-leaflet";

const createRoutineMachineLayer = (props) => {
  
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.testArray.startPoint.lat, props.testArray.startPoint.lng),
      L.latLng(props.testArray.endPoint.lat, props.testArray.endPoint.lng)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    useZoomParameter: true
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
