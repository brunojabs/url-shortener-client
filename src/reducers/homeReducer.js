import * as actions from "../actions";

const homeInitialState = { inputValue: "", isLoading: false };
const homeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case actions.CREATE_URL_REQUESTED:
      return { ...state, isLoading: true };
    case actions.INPUT_CHANGED:
      return { ...state, inputValue: action.payload.value };
    case actions.CREATE_URL_SUCCESS:
      const url = action.payload.data.url;

      const shortUrl = `${window.location.protocol}//${window.location.host}/${url.slug}`;

      return { ...state, isLoading: false, shortUrl: shortUrl, error: null };
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
    default:
      return state;
  }
};

export default homeReducer;
