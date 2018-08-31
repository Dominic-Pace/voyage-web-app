import { toast } from 'react-toastify'

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SET_WINDOW_DIMENSIONS_REQUEST,
  SET_WINDOW_DIMENSIONS_SUCCESS,
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
  authRef, singlePackageRef,
  userInfoRef,
} from '../../utils/firebase/firebase-refs'
import {isMobileView} from "../../utils/device";

export const fetchUser = () => dispatch => {
  let userData;
  const userId = localStorage.getItem('voyagoUser')
  dispatch({ type: FETCH_USER_REQUEST })

  if (userId) {
    return userInfoRef(userId).once('value', user => {
      userData = user.val()
    }).then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, user: userData })
    }).catch(err => {
      dispatch({ type: FETCH_USER_FAILURE, error: 'Failure' })
    })
  } else {
    return dispatch({ type: FETCH_USER_FAILURE, error: 'Not Logged in' })
  }
}

export const updateWindowDimensions = () => dispatch => {
  dispatch({ type: SET_WINDOW_DIMENSIONS_REQUEST })
  return dispatch({ type: SET_WINDOW_DIMENSIONS_SUCCESS, isMobileView: isMobileView() })
}

export const loginUser = userCreds => (
  dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    return authRef.signInWithEmailAndPassword(userCreds.email, userCreds.password)
      .then(res => {
        localStorage.setItem('voyagoUser', res.user.uid)
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
        localStorage.removeItem('voyagoUser')
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
