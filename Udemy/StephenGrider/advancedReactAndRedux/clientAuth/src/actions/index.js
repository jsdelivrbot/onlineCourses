
import axios from 'axios';
import {
  AUTH,
  UNAUTH,
  AUTHERR,
  AUTH_REQUEST,
} from './types'

// Action creator always return object with type and payload
// when we pass reduxThunk then 
// action creator can return function 

const ROOT_URL = 'http://localhost:3090';

export function signupUser({ email, password }, history) {

  // this function is how we get direct access to dispatch 
  // dispatch is like a funnel that all actions goes through and
  // pass down to reducers

  // With redux thunk, wecan handle multiple actions
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then((response) => {
        // if req is good
        // update state to indicate user is updated
        dispatch({
          type: AUTH
        });
        // save the jwt token into localStorage
        localStorage.setItem('token', response.data.token);
        // redirect to /feature
        history.push('/feature');
      })
      .catch((err) => {
        // If req is bad
        // send err
        dispatch(authErr('already exist'));
        console.log('err: ', err);
      });
  }

}


export function signinUser({email, password}, history) {
  
  // this function is how we get direct access to dispatch 
  // dispatch is like a funnel that all actions goes through and
  // pass down to reducers

  // With redux thunk, wecan handle multiple actions
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // if req is good
        // update state to indicate user is updated
        dispatch({
          type: AUTH
        });
        // save the jwt token into localStorage
        localStorage.setItem('token', response.data.token);
        // redirect to /feature
        history.push('/feature');
      })
      .catch((err) => {
        // If req is bad
        // send err
        dispatch(authErr('bad login info'));
        // console.log('err: ', err);
      });
  }

}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH
  }
}

export function authErr(errMssg) {
  return {
    type: AUTHERR,
    payload: errMssg,
  };
}


export function authRequest() {
  return function(dispatch) {
    // axios.get(ROOT_URL, {
    //   header: { authentication: localStorage.getItem('token')}
    // })
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then((response) => {
        console.log('response: ', response);
        dispatch({
          type: AUTH_REQUEST,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log('err: ', err);
        dispatch({
          type: AUTH_REQUEST
        });
      });
  }
}