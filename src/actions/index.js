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

  const response = await fetch("http://localhost:3000/urls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { target: getState().inputValue } }),
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
