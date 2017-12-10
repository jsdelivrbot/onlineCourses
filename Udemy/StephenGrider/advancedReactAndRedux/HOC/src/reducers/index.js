import { combineReducers } from 'redux';

import userLoginReducer from './userLoginReducer'

const rootReducer = combineReducers({
  isLoggedIn: userLoginReducer
});

export default rootReducer;
