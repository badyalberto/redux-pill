import initialState from "./state";
import { FETCH_PROPERTIES } from "./types";

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_PROPERTIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
