import { toast } from 'react-toastify'

import {
  FETCH_USER_PROFILE_FAILURE,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
} from './types'

import {
  userInfoRef,
} from '../../utils/firebase/firebase-refs'

export { fetchUser } from '../auth/actions'

export const fetchUserProfile = uid => (
  dispatch => {
    let userProfile
    dispatch({ type: FETCH_USER_PROFILE_REQUEST })
    return userInfoRef(uid).once('value', user => {
      userProfile = user.val()
    }).then(res => {
      dispatch({ type: FETCH_USER_PROFILE_SUCCESS, user: userProfile })
    }).catch(err => {
      dispatch({ type: FETCH_USER_PROFILE_FAILURE, error: err.message })
    })
  }
)

export const updateUserData = (uid, user, location)  => (
  dispatch => {
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST })
    return userInfoRef(uid).update({
      birthday: user.birthday || '',
      email: user.email || '',
      firstName: user.firstName || '',
      homeAirport: user.homeAirport || {},
      lastName: user.lastName || '',
      location,
    })
      .then(res => {
        toast.success('Updated User Successfully')
        dispatch({ type: UPDATE_USER_PROFILE_SUCCESS })
        return res.user
      }).catch(err => {
        dispatch({ type: UPDATE_USER_PROFILE_FAILURE, error: err })
      })
  }
)
