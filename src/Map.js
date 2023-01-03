import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import { connect, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { fetchDeliveryDataSuccess } from "./actions";

const DeliveryMap = () => {

  // const dispatch = useDispatch();
  const data = useSelector(store => store.deliveryData.data)
  console.log("data:", data)
  
  const [map, setMap] = useState(null);
  

  // useEffect(() => {
  //   dispatch(fetchDeliveryDataSuccess())
  // }, [data]);

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
        return <RoutineMachine testArray={route} key={index} />;
      })}
    </MapContainer>
  );
};

const mapStateToProps = (state) => ({
  startPoint: state.deliveryData.startPoint,
  endPoint: state.deliveryData.endPoint,
});

export default connect(mapStateToProps)(DeliveryMap);
