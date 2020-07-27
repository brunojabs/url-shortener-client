import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUrl } from "../actions";

class Redirect extends Component {
  componentDidMount() {
    this.props.getUrl(this.props.match.params.slug);
  }
  render() {
    return <div>Redirecting...</div>;
  }
}

export default withRouter(connect(() => {}, { getUrl: getUrl })(Redirect));
