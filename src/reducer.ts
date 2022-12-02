import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import common from './reducers/common';

export default combineReducers({
  common,
  router: routerReducer,
});
