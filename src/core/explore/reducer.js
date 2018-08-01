import {
  FETCH_FILTERS_FAILURE,
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SUCCESS,
  FETCH_PACKAGES_FAILURE,
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_FILTERS_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        filters: action.filters,
        isRequesting: false,
      }
    case FETCH_FILTERS_FAILURE:
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