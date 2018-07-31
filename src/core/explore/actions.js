import {
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_PACKAGES_FAILURE,
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
} from './types'

import {
  locationsRef,
  packagesRef,
  singleLocationRef,
} from '../../utils/firebase/firebase-refs'

export const fetchLocations = () => (
  dispatch => {
    const locations = []
    dispatch({ type: FETCH_LOCATIONS_REQUEST })
    return locationsRef.once('value', snap => {
      snap.forEach(data => {
        const location = data.val()
        locations.push(location)
      })
    }).then(res => {
      dispatch({ type: FETCH_LOCATIONS_SUCCESS, locations: locations })
    }).catch(err => {
      dispatch({ type: FETCH_LOCATIONS_FAILURE, error: err })
    })
  }
)


export const fetchPackages = () => (
  dispatch => {
    const packages = []
    dispatch({ type: FETCH_PACKAGES_REQUEST })
    return packagesRef.once('value', snap => {
      snap.forEach(data => {
        packages.push(data.val())
      })
    }).then(res => {
      dispatch({ type: FETCH_PACKAGES_SUCCESS, packages: packages })
    }).catch(err => {
      dispatch({ type: FETCH_PACKAGES_FAILURE, error: err })
    })
  }
)
