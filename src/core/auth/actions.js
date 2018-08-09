import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from './types'

import {
  authRef,
} from '../../utils/firebase/firebase-refs'

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    dispatch({ type: FETCH_USER_REQUEST })
    if (user) {
      console.log(user)
      dispatch({ type: FETCH_USER_SUCCESS, user: user })
    } else {
      dispatch({ type: FETCH_USER_FAILURE, user: null })
    }
  })
}

export const loginUser = userCreds => (
  dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    return authRef.signInWithEmailAndPassword(userCreds.email, userCreds.password)
      .then(res => {
        dispatch({ type: USER_LOGIN_SUCCESS, user: res.user })
    }).catch(err => {
      dispatch({ type: USER_LOGIN_FAILURE, error: err })
    })
  }
)
