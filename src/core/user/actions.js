import { toast } from 'react-toastify'

import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from './types'

import {
  userInfoRef,
} from '../../utils/firebase/firebase-refs'

export const fetchUserData = uid => dispatch => {
  dispatch({ type: FETCH_USER_DATA_REQUEST })
  return userInfoRef(uid).once(user => {
    if (user) {
      dispatch({ type: FETCH_USER_DATA_SUCCESS, user: user })
    } else {
      dispatch({ type: FETCH_USER_DATA_FAILURE, user: null })
    }
  })
}

export const updateUserData = uid => dispatch => {
  dispatch({ type: FETCH_USER_DATA_REQUEST })
  return userInfoRef(uid).once(user => {
    if (user) {
      dispatch({ type: FETCH_USER_DATA_SUCCESS, user: user })
    } else {
      dispatch({ type: FETCH_USER_DATA_FAILURE, user: null })
    }
  })
}