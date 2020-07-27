import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadUrls } from "../actions";

class Top extends Component {
  componentDidMount() {
    this.props.loadUrls();
  }
  render() {
    const { isLoading, urlList } = this.props;

    return (
      <div className="home--container">
        <h2 className="home--title">Top Urls</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <UrlList urlList={urlList} />
          </div>
        )}
      </div>
    );
  }
}

const UrlList = ({ urlList }) => (
  <ul>
    {urlList.map((url) => (
      <UrlListItem url={url} />
    ))}
  </ul>
);

const UrlListItem = ({ url }) => (
  <li>
    Slug: {url.slug}
    <br /> Target: {url.target}
    <br /> Hits: {url.hits}
  </li>
);

Top.propTypes = {
  urlList: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...state.top,
});

export default withRouter(
  connect(mapStateToProps, { loadUrls: loadUrls })(Top)
);
