import {
  FETCH_FILTERS_FAILURE,
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SUCCESS,
  FETCH_PACKAGES_FAILURE,
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
} from './types'

import { sortAlphabeticallyByName } from '../../utils/sort'

const INITIAL_STATE = {
  isRequesting: false,
}

const filterActivePackages = travelPackages => {
  const dateToday = new Date()
  const activePackages = travelPackages.filter(travelPackage => {
    const validUntilDate = new Date(travelPackage.validUntil)
    if (validUntilDate > dateToday) {
      return travelPackage
    }
  })
  return activePackages
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_FILTERS_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        filters: [
          ...[
            {
              coverImageUrl: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
              id: 'all',
              name: 'Show All',
            },
            {
              coverImageUrl: 'https://images.pexels.com/photos/163688/hiker-travel-trip-wander-163688.jpeg',
              id: undefined,
              name: 'Show Featured',
            },
            {
              coverImageUrl: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg',
              id: 'act',
              name: 'Ending Soon',
            }
          ],
          ...action.filters.sort(sortAlphabeticallyByName)
        ],
        isRequesting: false,
      }
    case FETCH_FILTERS_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case FETCH_PACKAGES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_PACKAGES_SUCCESS:
      return {
        ...state,
        packages: filterActivePackages(action.packages),
        isRequesting: false,
      }
    case FETCH_PACKAGES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}