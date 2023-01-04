import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";
import { connect, useSelector } from "react-redux";

const DeliveryMap = () => {
  const selectedRouteIndex = useSelector(store => store.deliverySwitch.selectedRouteIndex);
  const data = useSelector(store => store.deliveryData.data);
  
  const [map, setMap] = useState(null);

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
      {data.map((route, index) => {
        if (index === selectedRouteIndex) {
          return <RoutingMachine testArray={route} key={index} />;
        }
      })}
    </MapContainer>
  );
};

const mapStateToProps = (state) => ({
  startPoint: state.deliveryData.startPoint,
  endPoint: state.deliveryData.endPoint,
});

export default connect(mapStateToProps)(DeliveryMap);
