import { combineReducers } from 'redux';

import BooksReducer from './reducer_book';
import ActiveBook from './reducer_active_book';

// const redux = require('redux');
// const combineReducers = redux.combineReducers;
// const BooksReducer = require('./reducer_book');

// console.log(BooksReducer);

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

module.exports = rootReducer;
