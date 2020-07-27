import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { inputChanged, createUrl } from "../actions";

const Home = (props) => {
  const { isLoading, shortUrl } = props;

  return (
    <div className="home--container">
      <h2 className="home--title">URL Shorteneter</h2>
      <h3>
        Paste the url you want to make short on the input bellow and hit
        'Create'
      </h3>
      <div className="home--content">
        {!shortUrl && <Input {...props} />}
        {shortUrl && <ShortUrl shortUrl={shortUrl} />}

        <div> {isLoading ? "Loading..." : ""}</div>
      </div>
    </div>
  );
};

const Input = ({ inputValue, handleChange, onClick, error }) => (
  <>
    <div className="uk-flex-inline">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => handleChange(event.target.value)}
        className={`uk-input uk-form-width-medium ${
          error ? "uk-form-danger" : ""
        }`}
      />
      <button onClick={onClick} className="uk-input">
        Create
      </button>
    </div>
    <div>{error}</div>
  </>
);

const ShortUrl = ({ shortUrl }) => (
  <div>
    Here's your short URL, you now can copy and share it: <br />
    {shortUrl}
  </div>
);

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  shortUrl: PropTypes.object,
};

const mapStateToProps = (state) => ({
  ...state.home,
});

export default withRouter(
  connect(mapStateToProps, {
    handleChange: inputChanged,
    onClick: createUrl,
  })(Home)
);
