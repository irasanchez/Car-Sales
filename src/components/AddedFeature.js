import React from "react";
import { connect } from "react-redux";
import { removeFeature, updatePrice } from "../actions/actions";

const AddedFeature = props => {
  return (
    <li>
      <button
        onClick={() => {
          props.removeFeature(props.feature);
          props.updatePrice(-props.feature.price);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature, updatePrice })(AddedFeature);
