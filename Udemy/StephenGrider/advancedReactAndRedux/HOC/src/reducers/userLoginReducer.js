import { TOGGLE_USER_LOGGIN } from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case TOGGLE_USER_LOGGIN:
      return action.payload;
    default:
      return state;
  }
}