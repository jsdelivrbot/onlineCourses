import { SAVE_COMMENT } from '../actions/types';

export default function reducerComment(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state];
    default:
      return state;
  }
}