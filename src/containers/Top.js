import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadUrls } from "../actions";
import slugToUrl from "../helpers/slugToUrl";

class Top extends Component {
  componentDidMount() {
    this.props.loadUrls();
  }
  render() {
    const { isLoading, urlList } = this.props;

    return (
      <div className="home--container">
        <h2 className="home--title">Top 100 URL's</h2>
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
  <table class="uk-table uk-table-striped">
    <caption></caption>
    <thead>
      <tr>
        <th>Short Url</th>
        <th>Target</th>
        <th>Hits Count</th>
      </tr>
    </thead>
    <tbody>
      {urlList.map((url) => (
        <UrlListItem {...url} />
      ))}
    </tbody>
  </table>
);

const UrlListItem = ({ slug, target, hits }) => {
  const url = slugToUrl({ location: window.location, slug: slug });
  return (
    <tr>
      <td>
        <a href={url}>{url}</a>
      </td>
      <td>
        <a href={target}>{target}</a>
      </td>
      <td>{hits}</td>
    </tr>
  );
};

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
