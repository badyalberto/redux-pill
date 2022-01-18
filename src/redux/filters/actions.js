import { TYPE_OF_HOME, CONDITION, BEDROOMS, PRICE_RANGE, BATHROOMS, PUBLICATION_DATE, EQUIPAMENT, MORE_FILTERS,LOAD_FILTERS } from "./types";

export const changeTypeOfHome = (value) => ({
  type: TYPE_OF_HOME,
  payload: value,
});
export const changeCondition = (value) => ({
  type: CONDITION,
  payload: value,
});
export const changeBedrooms = (value) => ({
  type: BEDROOMS,
  payload: value,
});
export const changeRangePrice = (value) => ({
  type: PRICE_RANGE,
  payload: value,
});
export const changeBathrooms = (value) => ({
  type: BATHROOMS,
  payload: value,
});
export const changePublicationDate = (value) => ({
  type: PUBLICATION_DATE,
  payload: value,
});
export const changeEquipament = (value) => ({
  type: EQUIPAMENT,
  payload: value,
});
export const changeMoreFilters = (value) => ({
  type: MORE_FILTERS,
  payload: value,
});

export const loadFilters = (value) => ({
  type: LOAD_FILTERS,
  payload: value,
});

