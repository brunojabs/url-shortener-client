import { SERVER_URL } from "../constants";

export const INPUT_CHANGED = "INPUT_CHANGED";
export const inputChanged = (value) => (dispatch, getState) => {
  return dispatch({
    type: INPUT_CHANGED,
    payload: {
      value: value,
    },
  });
};

export const CREATE_URL_REQUESTED = "CREATE_URL_REQUESTED";
export const createUrl = () => async (dispatch, getState) => {
  dispatch({
    type: CREATE_URL_REQUESTED,
  });

  const response = await fetch(`${SERVER_URL}/urls`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { target: getState().home.inputValue } }),
  });

  return dispatch(urlCreated(response));
};

export const CREATE_URL_SUCCESS = "CREATE_URL_SUCCESS";
export const CREATE_URL_FAILURE = "CREATE_URL_FAILURE";
export const urlCreated = (response) => async (dispatch, getState) => {
  if (response.ok) {
    return dispatch({
      type: CREATE_URL_SUCCESS,
      payload: {
        ...(await response.json()),
      },
    });
  } else {
    return dispatch({
      type: CREATE_URL_FAILURE,
      payload: {
        ...(await response.json()),
      },
    });
  }
};
export const REDIRECT_TO = "REDIRECT_TO";

export const getUrl = (slug) => async (dispatch, getState) => {
  const response = await fetch(`${SERVER_URL}/urls/${slug}`);

  if (response.ok) {
    const res = await response.json();
    const url = res.data.url;

    await fetch(`${SERVER_URL}/urls/${url.slug}/hit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return dispatch({
      type: REDIRECT_TO,
      payload: { target: url.target },
    });
  } else {
    return dispatch({
      type: REDIRECT_TO,
      payload: { target: "/" },
    });
  }
};

export const LOAD_URLS_SUCCESS = "LOAD_URLS_SUCCESS";
export const LOAD_URLS_FAILURE = "LOAD_URLS_FAILURE";
export const loadUrls = () => async (dispatch) => {
  const response = await fetch(`${SERVER_URL}/urls?limit=100`);
  if (response.ok) {
    const { data } = await response.json();

    const urlList = data.urls;

    return dispatch({
      type: LOAD_URLS_SUCCESS,
      payload: { urlList },
    });
  } else {
    return dispatch({
      type: LOAD_URLS_FAILURE,
    });
  }
};
