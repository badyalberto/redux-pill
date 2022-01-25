import initialState from "./state";
import { FETCH_PROPERTIES, LOGIN_USER } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return [...action.payload.data];
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
