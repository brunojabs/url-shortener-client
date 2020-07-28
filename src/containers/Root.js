import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
