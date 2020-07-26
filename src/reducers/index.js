import * as actions from "../actions";

const reducer = (state = { inputValue: "", isLoading: false }, action) => {
  switch (action.type) {
    case actions.CREATE_URL_REQUESTED:
      return { ...state, isLoading: true };
    case actions.INPUT_CHANGED:
      return { ...state, inputValue: action.payload.value };
    case actions.CREATE_URL_SUCCESS:
      const url = action.payload.data.url;
      return { ...state, isLoading: false, url: url };
    case actions.CREATE_URL_FAILURE:
      const errors = action.payload.errors;

      if (errors && errors.some(({ type }) => type === "Invalid")) {
        return {
          ...state,
          isLoading: false,
          error:
            "This is not a valid URL 🙁  (Hint: make sure it starts with 'http://' or 'https://')",
        };
      } else {
        return {
          ...state,
          isLoading: false,
          error:
            "Something went wrong and it was not possible to create. Try again please",
        };
      }
    case actions.REDIRECT_TO:
      window.location.assign(action.payload.target);

      break;
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

const rootReducer = reducer;

export default rootReducer;
