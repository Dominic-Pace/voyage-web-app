import {
  FETCH_FEATURED_PACKAGES_FAILURE,
  FETCH_FEATURED_PACKAGES_REQUEST,
  FETCH_FEATURED_PACKAGES_SUCCESS,
  SEND_CONTACT_US_FAILURE,
  SEND_CONTACT_US_REQUEST,
  SEND_CONTACT_US_SUCCESS,
  SEND_CUSTOM_EMAIL_FAILURE,
  SEND_CUSTOM_EMAIL_REQUEST,
  SEND_CUSTOM_EMAIL_SUCCESS,
  SEND_JOIN_EMAIL_LIST_FAILURE,
  SEND_JOIN_EMAIL_LIST_REQUEST,
  SEND_JOIN_EMAIL_LIST_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_FEATURED_PACKAGES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_FEATURED_PACKAGES_SUCCESS:
      return {
        ...state,
        featuredPackages: action.featuredPackages,
        isRequesting: false,
      }
    case FETCH_FEATURED_PACKAGES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case SEND_CONTACT_US_REQUEST:
      return { ...state, isRequesting: true }
    case SEND_CONTACT_US_SUCCESS:
      return { ...state, isRequesting: false }
    case SEND_CONTACT_US_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case SEND_CUSTOM_EMAIL_REQUEST:
      return { ...state, isRequesting: true }
    case SEND_CUSTOM_EMAIL_SUCCESS:
      return { ...state, isRequesting: false }
    case SEND_CUSTOM_EMAIL_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case SEND_JOIN_EMAIL_LIST_REQUEST:
      return { ...state, isRequesting: true }
    case SEND_JOIN_EMAIL_LIST_SUCCESS:
      return { ...state, isRequesting: false,}
    case SEND_JOIN_EMAIL_LIST_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}