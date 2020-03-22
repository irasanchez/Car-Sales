import React from "react";
import { connect } from "react-redux";
import { buyItem, updatePrice } from "../actions/actions";

const AdditionalFeature = props => {
  return (
    <li>
      <button
        onClick={() => {
          console.log(`ONCLICK TRIGGERED`);
          console.log(`trigger buyItem`);
          props.buyItem(props.feature);
          console.log(`trigger updatePrice`);
          props.updatePrice(props.feature.price);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// null is here because MSTP is not needed
export default connect(null, { buyItem, updatePrice })(AdditionalFeature);
