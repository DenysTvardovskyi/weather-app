import { ADD_CITY, DELETE_CITY } from 'constants/actionsTypes';

const initialState = {
  cityList: ['Lviv', 'Odesa', 'Kyiv'],
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CITY: {
      return { ...state, cityList: [...state.cityList, action.payload] };
    }
    case DELETE_CITY: {
      return {
        ...state,
        cityList: state.cityList.filter((city) => city !== action.payload),
      };
    }
  }
  return state;
};

export default appReducer;
