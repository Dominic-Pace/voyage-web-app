import { toast } from 'react-toastify'

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SAVE_REG_INFO_FAILURE,
  USER_SAVE_REG_INFO_REQUEST,
  USER_SAVE_REG_INFO_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from './types'

import {
  authRef,
  userInfoRef,
} from '../../utils/firebase/firebase-refs'

export const fetchUser = () => dispatch => {
  return new Promise(authRef.onAuthStateChanged(user => {
    dispatch({ type: FETCH_USER_REQUEST })
    if (user) {
      dispatch({ type: FETCH_USER_SUCCESS, user: user })
    } else {
      dispatch({ type: FETCH_USER_FAILURE, user: null })
    }
  }))
}

export const loginUser = userCreds => (
  dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    return authRef.signInWithEmailAndPassword(userCreds.email, userCreds.password)
      .then(res => {
        toast.success('Successfully Logged In! Bon Voyago!')
        dispatch({ type: USER_LOGIN_SUCCESS, user: res.user })
      }).catch(err => {
        toast.error('Invalid Email or Password. Please try again!')
        dispatch({ type: USER_LOGIN_FAILURE, error: 'Invalid Email or Password. Please try again!' })
      })
  }
)

export const logoutUser = () => (
  dispatch => {
    dispatch({ type: USER_LOGOUT_REQUEST })
    return authRef.signOut()
      .then(res => {
        toast.success('Successfully Logged Out! Please come back soon!')
        dispatch({ type: USER_LOGOUT_SUCCESS })
      }).catch(err => {
        dispatch({ type: USER_LOGOUT_FAILURE, error: err })
      })
  }
)

export const registerUser = user  => (
  dispatch => {
    dispatch({ type: REGISTER_USER_REQUEST })
    return authRef.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        toast.success('Welcome to Voyago')
        dispatch({ type: REGISTER_USER_SUCCESS, user: res.user })
        return res.user
      }).catch(err => {
        dispatch({ type: REGISTER_USER_FAILURE, error: err })
      }).then(user => {
        dispatch({ type: USER_SAVE_REG_INFO_REQUEST })
        userInfoRef(user.uid).set({
          birthday: '',
          email: user.email,
          firstName: '',
          homeAirport: {},
          id: user.uid,
          lastName: '',
          location: {
            address: '',
            coords: {}
          },
        })
      }).then(() => {
        dispatch({ type: USER_SAVE_REG_INFO_SUCCESS})
      }).catch(err => {
        dispatch({type: USER_SAVE_REG_INFO_FAILURE, error: err})
      })
  }
)
