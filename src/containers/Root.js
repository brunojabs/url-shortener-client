import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../containers/Home";
import Redirect from "../containers/Redirect";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:slug" component={Redirect} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
