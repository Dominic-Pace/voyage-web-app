import {
  FETCH_USER_PROFILE_FAILURE,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
} from './types'

const INITIAL_STATE = {
  errorMessage: null,
  isRequesting: false,
  profileData: null,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, isAuthed: true, isRequesting: false, profileData: action.user }
    case FETCH_USER_PROFILE_FAILURE:
      return { ...state, errorMessage: action.error, isAuthed: false, isRequesting: false }
    case UPDATE_USER_PROFILE_REQUEST:
      return { ...state, isRequesting: true }
    case UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, isAuthed: true, isRequesting: false }
    case UPDATE_USER_PROFILE_FAILURE:
      return { ...state, errorMessage: action.error, isAuthed: false, isRequesting: false }
    default:
      return state
  }
}
