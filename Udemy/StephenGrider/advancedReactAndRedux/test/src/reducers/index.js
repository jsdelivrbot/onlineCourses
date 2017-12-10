import { combineReducers } from 'redux';

import comments from './reducerComment';

const rootReducer = combineReducers({
  comments
});

export default rootReducer;
