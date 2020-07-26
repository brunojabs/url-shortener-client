import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Redirect from "../containers/Redirect";
import Top from "../containers/Top";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/top" component={Top} />
        <Route path="/:slug" component={Redirect} />
      </Switch>
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
