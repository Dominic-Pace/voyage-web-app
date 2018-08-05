import {
  FETCH_PACKAGE_FAILURE,
  FETCH_PACKAGE_REQUEST,
  FETCH_PACKAGE_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_PACKAGE_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_PACKAGE_SUCCESS:
      return {
        ...state,
        currentPackage: action.currentPackage,
        isRequesting: false,
      }
    case FETCH_PACKAGE_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}