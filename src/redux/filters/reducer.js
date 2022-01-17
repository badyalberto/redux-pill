import initialState from "./state";
import { TYPE_OF_HOME, CONDITION, BEDROOMS, PRICE_RANGE, BATHROOMS, PUBLICATION_DATE, EQUIPAMENT, MORE_FILTERS } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_OF_HOME:
      if (action.payload) {
        let found = state.type_of_home.find((item) => item === action.payload);

        if (found) {
          let updatedArray = state.type_of_home.filter((item) => item !== found);
          return { ...state, type_of_home: [...updatedArray] };
        } else {
          return { ...state, type_of_home: [...state.type_of_home, action.payload] };
        }
      }
      return state;
    case CONDITION:
      if (action.payload) {
        let found = state.condition.find((item) => item === action.payload);

        if (found) {
          let updatedArray = state.condition.filter((item) => item !== found);
          return { ...state, condition: [...updatedArray] };
        } else {
          return { ...state, condition: [...state.condition, action.payload] };
        }
      }
      return state;
    case BEDROOMS:
      if (action.payload) {
        let found = state.bedrooms.find((item) => item === Number(action.payload));

        if (found) {
          let updatedArray = state.bedrooms.filter((item) => item !== found);
          return { ...state, bedrooms: [...updatedArray] };
        } else {
          return { ...state, bedrooms: [...state.bedrooms, Number(action.payload)] };
        }
      }
      return state;
    case PRICE_RANGE:
      if (action.payload.min) {
        return { ...state, price_range: { ...state.price_range, min: Number(action.payload.min) } };
      } else {
        return { ...state, price_range: { ...state.price_range, max: Number(action.payload.max) } };
      }
    case BATHROOMS:
      if (action.payload) {
        let found = state.bathrooms.find((item) => item === Number(action.payload));

        if (found) {
          let updatedArray = state.bathrooms.filter((item) => item !== found);
          return { ...state, bathrooms: [...updatedArray] };
        } else {
          return { ...state, bathrooms: [...state.bathrooms, Number(action.payload)] };
        }
      }
      return state;
    case PUBLICATION_DATE:
      return { ...state, publication_date: action.payload };
    case EQUIPAMENT:
      return { ...state, equipament: action.payload };
    case MORE_FILTERS:
      if (action.payload) {
        let found = state.more_filters.find((item) => item === action.payload);

        if (found) {
          let updatedArray = state.more_filters.filter((item) => item !== found);
          return { ...state, more_filters: [...updatedArray] };
        } else {
          return { ...state, more_filters: [...state.more_filters, action.payload] };
        }
      }
      return state;
    default:
      return state;
  }
}

export default reducer;
