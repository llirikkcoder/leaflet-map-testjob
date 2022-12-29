import { connect } from "react-redux";
import DeliveryTable from "./DeliveryTable";

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(DeliveryTable);
