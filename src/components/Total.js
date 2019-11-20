import React from 'react';
import { connect } from "react-redux"; 
import { updateTotal } from "../actions/index"; 

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStatePriceToTotalProps = state => {
  return {
    total: state.total
  };
}; 

export default connect(
  mapStatePriceToTotalProps,
    {updateTotal}
)(Total);
