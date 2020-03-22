import React from "react";
import { connect } from "react-redux";
import { buyItem, updatePrice } from "../actions/actions";

const AdditionalFeature = props => {
  return (
    <li>
      <button
        onClick={() => {
          props.buyItem(props.feature);
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

export default connect(null, { buyItem, updatePrice })(AdditionalFeature);
