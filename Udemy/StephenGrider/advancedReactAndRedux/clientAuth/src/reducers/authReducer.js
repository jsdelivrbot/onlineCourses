import {
  AUTH,
  UNAUTH,
  AUTHERR,
  AUTH_REQUEST,
} from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH:
      return { ...state, authenticated: true};
    case UNAUTH:
      return { ...state, authenticated: false};
    case AUTH_REQUEST:
      return { ...state, message: action.payload};
    case AUTHERR:
      // console.log('AUTHERR: ', AUTHERR);
      // console.log('action.payload: ', action.payload);
      return { ...state, errMssg: action.payload };
    default:
      return state;
  }
}