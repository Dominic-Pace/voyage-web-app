import {
  FETCH_FILTERS_FAILURE,
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SUCCESS,
  FETCH_PACKAGES_FAILURE,
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
} from './types'

import {
  locationsRef,
  packagesRef,
  travelCategoriesRef,
} from '../../utils/firebase/firebase-refs'

export const fetchFilters = () => (
  dispatch => {
    const filters = []
    dispatch({ type: FETCH_FILTERS_REQUEST })

    return travelCategoriesRef.once('value', snap => {
      snap.forEach(data => {
        const category = data.val()
        category.filterable && filters.push(category)
      })
    }).then(res => {
      return locationsRef.once('value', snap => {
        snap.forEach(data => {
          const location = data.val()
          filters.push(location)
        })
      })
    }).then(res => {
      dispatch({ type: FETCH_FILTERS_SUCCESS, filters: filters })
    }).catch(err => {
      dispatch({ type: FETCH_FILTERS_FAILURE, error: err })
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
