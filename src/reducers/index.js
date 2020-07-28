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
    default:
      return state;
  }
};

const rootReducer = reducer;

export default rootReducer;
