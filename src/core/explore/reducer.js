import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_PACKAGES_FAILURE,
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations,
        isRequesting: false,
      }
    case FETCH_LOCATIONS_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case FETCH_PACKAGES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: action.packages,
        isRequesting: false,
      }
    case FETCH_PACKAGES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}