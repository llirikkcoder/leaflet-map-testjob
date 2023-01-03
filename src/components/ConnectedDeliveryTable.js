// import { connect } from "react-redux";
// import DeliveryTable from "./DeliveryTable";
// import { setSelectedRouteIndex } from "../actions";

// const mapStateToProps = (state) => ({
//   data: state.deliveryData.data,
//   selectedRouteIndex: state.deliverySwitch.selectedRouteIndex,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setSelectedRouteIndex: (index) => dispatch(setSelectedRouteIndex(index)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DeliveryTable);


import React from "react";
import { connect } from "react-redux";
import DeliveryTable from "./DeliveryTable";
import { setSelectedRouteIndex } from "../actions";

const ConnectedDeliveryTable = ({ data, selectedRouteIndex, setSelectedRouteIndex }) => {
  return (
    <DeliveryTable
      data={data}
      selectedRouteIndex={selectedRouteIndex}
      setSelectedRouteIndex={setSelectedRouteIndex}
    />
  );
};

const mapStateToProps = (state) => ({
  data: state.deliveryData.data,
  selectedRouteIndex: state.deliverySwitch.selectedRouteIndex,
});

const mapDispatchToProps = {
  setSelectedRouteIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedDeliveryTable);


