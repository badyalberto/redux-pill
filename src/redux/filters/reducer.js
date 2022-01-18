import { parse } from "query-string";
import initialState from "./state";
import { TYPE_OF_HOME, CONDITION, BEDROOMS, PRICE_RANGE, BATHROOMS, PUBLICATION_DATE, EQUIPAMENT, MORE_FILTERS, LOAD_FILTERS } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_OF_HOME:
      if (action.payload) {
        changeToArray(state);
        let found = state.type.find((item) => item === action.payload);

        if (found) {
          let updatedArray = state.type.filter((item) => item !== found);
          return { ...state, type: [...updatedArray] };
        } else {
          return { ...state, type: [...state.type, action.payload] };
        }
      }
      return state;
    case CONDITION:
      if (action.payload) {
        changeToArray(state);
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
        changeToArray(state);
        let found = state.room.find((item) => item === Number(action.payload));

        if (found) {
          let updatedArray = state.room.filter((item) => item !== found);
          return { ...state, room: [...updatedArray] };
        } else {
          return { ...state, room: [...state.room, Number(action.payload)] };
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
        changeToArray(state);
        let found = state.bath.find((item) => item === Number(action.payload));

        if (found) {
          let updatedArray = state.bath.filter((item) => item !== found);
          return { ...state, bath: [...updatedArray] };
        } else {
          return { ...state, bath: [...state.bath, Number(action.payload)] };
        }
      }
      return state;
    case PUBLICATION_DATE:
      return { ...state, publication_date: action.payload };
    case EQUIPAMENT:
      return { ...state, equipament: action.payload };
    case MORE_FILTERS:
      if (action.payload) {
        changeToArray(state);
        let found = state.more_filters.find((item) => item === action.payload);

        if (found) {
          let updatedArray = state.more_filters.filter((item) => item !== found);
          return { ...state, more_filters: [...updatedArray] };
        } else {
          return { ...state, more_filters: [...state.more_filters, action.payload] };
        }
      }
      return state;
    case LOAD_FILTERS:
      return { ...state, ...parse(action.payload) };
    default:
      return state;
  }
};


function changeToArray(state){
  if(!(state.type instanceof Array)){
    state.type = [state.type];
  } 
  return state;
}

export default reducer;
