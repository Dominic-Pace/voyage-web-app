import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
  user: null,
}


export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_USER_SUCCESS:
      return { ...state, isRequesting: false, user: action.user }
    case FETCH_USER_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case USER_LOGIN_REQUEST:
      return { ...state, isRequesting: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, isRequesting: false, user: {
          id: action.user.uid
        } }
    case USER_LOGIN_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}