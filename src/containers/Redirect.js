import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { getUrl } from "../actions";

class Redirect extends Component {
  componentDidMount() {
    this.props.getUrl(this.props.match.params.slug);
  }
  render() {
    return <div>Redirecting.. </div>;
  }
}

Redirect.propTypes = {
  store: PropTypes.object.isRequired,
  askForSlug: PropTypes.func,
};

export default withRouter(connect(() => {}, { getUrl: getUrl })(Redirect));
