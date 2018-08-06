import {
  FETCH_PACKAGE_FAILURE,
  FETCH_PACKAGE_REQUEST,
  FETCH_PACKAGE_SUCCESS,
  FETCH_THINGS_TO_DO_FAILURE,
  FETCH_THINGS_TO_DO_REQUEST,
  FETCH_THINGS_TO_DO_SUCCESS,
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
    case FETCH_THINGS_TO_DO_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_THINGS_TO_DO_SUCCESS:
      return {
        ...state,
        thingsToDo: action.thingsToDo,
        isRequesting: false,
      }
    case FETCH_THINGS_TO_DO_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}