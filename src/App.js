import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

const App = props => {
  return (
    <div>
      {props.message && <p>{props.message}</p>}
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, {})(App);
