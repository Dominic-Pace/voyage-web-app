import {
  FETCH_PACKAGE_FAILURE,
  FETCH_PACKAGE_REQUEST,
  FETCH_PACKAGE_SUCCESS,
} from './types'

import {
  singlePackageRef
} from '../../utils/firebase/firebase-refs'

export const fetchPackageById = id => (
  dispatch => {
    let currentPackage = {}
    dispatch({ type: FETCH_PACKAGE_REQUEST })
    return singlePackageRef(id).once('value', travelPackage => {
      currentPackage = travelPackage.val()
    }).then(res => {
      dispatch({ type: FETCH_PACKAGE_SUCCESS, currentPackage: currentPackage })
    }).catch(err => {
      dispatch({ type: FETCH_PACKAGE_FAILURE, error: err })
    })
  }
)
