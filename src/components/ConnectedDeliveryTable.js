import { connect } from "react-redux";
import DeliveryTable from "./DeliveryTable";

const mapStateToProps = (state) => ({
  data: state.deliveryData.data,
});

const ConnectedDeliveryTable = connect(mapStateToProps)(DeliveryTable);

export default ConnectedDeliveryTable;

