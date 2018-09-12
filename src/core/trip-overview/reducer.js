import {
  FETCH_UPCOMING_TRIP_BY_ID_FAILURE,
  FETCH_UPCOMING_TRIP_BY_ID_REQUEST,
  FETCH_UPCOMING_TRIP_BY_ID_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_UPCOMING_TRIP_BY_ID_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_UPCOMING_TRIP_BY_ID_SUCCESS:
      return {
        ...state,
        currentTrip: action.currentTrip,
        isRequesting: false,
      }
    case FETCH_UPCOMING_TRIP_BY_ID_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}