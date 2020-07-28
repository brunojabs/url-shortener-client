import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { inputChanged, createUrl } from "../actions";

const Home = ({ handleChange, value, error, onClick, isLoading, url }) => (
  <div className="home--container">
    <h2 className="home--title">URL Shorteneter</h2>
    <h3>
      Paste the url you want to make short on the input bellow and hit 'Create'
    </h3>
    <div className="home--content">
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        />
        <button onClick={onClick}>Create</button>
      </div>
      <div>{error}</div>
      <div> {isLoading ? "Loading..." : ""}</div>
      {url && <div>{url.slug}</div>}
    </div>
  </div>
);

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  url: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  handleChange: state.handleChange,
  value: state.inputValue,
  isLoading: state.isLoading,
  url: state.url,
  error: state.error,
});

export default withRouter(
  connect(mapStateToProps, {
    handleChange: inputChanged,
    onClick: createUrl,
  })(Home)
);
