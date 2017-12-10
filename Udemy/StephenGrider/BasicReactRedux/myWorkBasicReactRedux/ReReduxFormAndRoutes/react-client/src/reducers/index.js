import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import NinjaReducer from '../reducers/reducerNinja';

const rootReducers = combineReducers({
  // state: {}
  // state: (state = {}) => state,
  ninjas: NinjaReducer,
  form: formReducer
});

module.exports = rootReducers;
