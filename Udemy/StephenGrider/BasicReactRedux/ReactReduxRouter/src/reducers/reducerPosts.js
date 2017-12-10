import { FETCH_POST, FETCH_POSTS, POST_ONE_POST, DELETE_POST, GET_WITH_THUNK } from '../actions/index';

import _ from 'lodash';

module.exports = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POST:
      return { [action.payload.data.id]: action.payload.data, ...state };
		case GET_WITH_THUNK:
			console.log('here ?')
			// console.log('action.payload: ', action.payload);
			// console.log('_.mapKeys(action.payload): ', _.mapKeys(action.payload, 'id'));
			return _.mapKeys(action.payload, 'id');
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
};
