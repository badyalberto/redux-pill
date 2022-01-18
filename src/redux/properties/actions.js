import axios from "axios";
import { FETCH_PROPERTIES } from "./types";

export const setProperties = (value) => ({
  type: FETCH_PROPERTIES,
  payload: value,
});

export const fetchProperties = (state,url) => {
  return async (dispatch) => {
    const properties = await axios.get(`http://localhost:4000/properties${url}`);
    dispatch(setProperties(properties.data));
  };
};