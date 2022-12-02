import { ADD_CITY, DELETE_CITY } from 'constants/actionsTypes';

export const addCity = (city: string) => {
  return {
    type: ADD_CITY,
    payload: city,
  };
};

export const deleteCity = (city: string) => {
  return {
    type: DELETE_CITY,
    payload: city,
  };
};
