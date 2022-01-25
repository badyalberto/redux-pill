import axios from "axios";
import { FETCH_PROPERTIES, LOGIN_USER } from "./types";

export const setProperties = (value) => ({
  type: FETCH_PROPERTIES,
  payload: value,
});

export const fetchProperties = (state, url) => {
  return async (dispatch) => {
    const properties = await axios({
      method: "GET",
      url: `http://localhost:8100/api/search${url}`,
      headers: { Authorization: `Bearer 28|RlRZQNCmYj2PM9ud1A2OGvpDrjRd6o5JN0ZuSa72` },
    });
    //console.log(properties.data)
    dispatch(setProperties(properties.data));
  };
};

export const setUserLogin = (value) =>({
  type: LOGIN_USER,
  payload: value,
})
