import * as actions from "../actions";

const topInitialState = { isLoading: true };
const topReducer = (state = topInitialState, action) => {
  switch (action.type) {
    case actions.LOAD_URLS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        urlList: action.payload.urlList,
      };

    case actions.LOAD_URLS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Could not fetch the list. Try again later",
      };
    default:
      return state;
  }
};

export default topReducer;
