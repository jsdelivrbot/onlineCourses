import { TOGGLE_USER_LOGGIN } from './types'

export function toggleUserLogin(isUserLoggedIn) {
  return {
    type: TOGGLE_USER_LOGGIN,
    payload: !isUserLoggedIn
  }
}