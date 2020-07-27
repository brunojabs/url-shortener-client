const slugToUrl = ({ location, slug }) =>
  `${location.protocol}//${location.host}/${slug}`;

export default slugToUrl;
