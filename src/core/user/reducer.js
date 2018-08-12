import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from './types'

const INITIAL_STATE = {
  errorMessage: null,
  isRequesting: false,
  user: null,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_DATA_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_USER_DATA_SUCCESS:
      return { ...state, isAuthed: true, isRequesting: false, user: action.user }
    case FETCH_USER_DATA_FAILURE:
      return { ...state, errorMessage: action.error, isAuthed: false, isRequesting: false }
    default:
      return state
  }
}