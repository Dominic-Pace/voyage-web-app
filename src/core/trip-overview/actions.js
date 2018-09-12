import {
  FETCH_UPCOMING_TRIP_BY_ID_FAILURE,
  FETCH_UPCOMING_TRIP_BY_ID_REQUEST,
  FETCH_UPCOMING_TRIP_BY_ID_SUCCESS,
} from './types'

import { upcomingTripRef } from '../../utils/firebase/firebase-refs'

export { fetchPackages } from '../explore/actions'

export const fetchUpcomingTripById = (userId, tripId) => (
  dispatch => {
    let trip = {}
    dispatch({ type: FETCH_UPCOMING_TRIP_BY_ID_REQUEST })
    return upcomingTripRef(userId, tripId).once('value', snap => {
      trip = snap.val()
    }).then(res => {
        dispatch({ type: FETCH_UPCOMING_TRIP_BY_ID_SUCCESS, currentTrip: trip })
      }).catch(err => {
        dispatch({ type: FETCH_UPCOMING_TRIP_BY_ID_FAILURE, error: err })
      })
  }
)
