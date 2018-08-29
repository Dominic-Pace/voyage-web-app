import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SAVE_REG_INFO_FAILURE,
  USER_SAVE_REG_INFO_REQUEST,
  USER_SAVE_REG_INFO_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from './types'

const INITIAL_STATE = {
  errorMessage: null,
  isRequesting: false,
  user: null,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, isRequestingUser: true }
    case FETCH_USER_SUCCESS:
      return { ...state, isAuthed: true, isRequestingUser: false, user: action.user }
    case FETCH_USER_FAILURE:
      return { ...state, errorMessage: action.error, isAuthed: false, isRequestingUser: false }
    case USER_LOGIN_REQUEST:
      return { ...state, isRequesting: true }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthed: true,
        isRequesting: false,
        user: {
          id: action.user.uid
        },
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isAuthed: false,
        isRequesting: false,
      }
    case USER_LOGOUT_REQUEST:
      return { ...state, isRequesting: true }
    case USER_LOGOUT_SUCCESS:
      return { ...state, isAuthed: false, isRequesting: false, user: null }
    case USER_LOGOUT_FAILURE:
      return { ...state, errorMessage: action.error, isAuthed: true, isRequesting: false }
    case USER_SAVE_REG_INFO_REQUEST:
      return { ...state, isRequesting: true }
    case USER_SAVE_REG_INFO_SUCCESS:
      return { ...state, isRequesting: false }
    case USER_SAVE_REG_INFO_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case REGISTER_USER_REQUEST:
      return { ...state, isRequesting: true }
    case REGISTER_USER_SUCCESS:
      return { ...state, isAuthed: true, isRequesting: false, user: action.user }
    case REGISTER_USER_FAILURE:
      return { ...state, errorMessage: action.error, isAuthed: false, isRequesting: false }
    default:
      return state
  }
}