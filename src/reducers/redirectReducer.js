import * as actions from "../actions";

const redirectReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.REDIRECT_TO:
      window.location.assign(action.payload.target);

      break;
    default:
      return state;
  }
};

export default redirectReducer;
