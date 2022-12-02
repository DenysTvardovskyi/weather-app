import { ADD_CITY } from 'constants/actionsTypes';

export const addCity = (city: string) => {
  return {
    type: ADD_CITY,
    payload: city,
  };
};
