import {
  FETCH_FEATURED_CATEGORIES_FAILURE,
  FETCH_FEATURED_CATEGORIES_REQUEST,
  FETCH_FEATURED_CATEGORIES_SUCCESS,
} from './types'

import { sortAlphabeticallyByName } from '../../utils/sort'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_FEATURED_CATEGORIES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_FEATURED_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories.sort(sortAlphabeticallyByName),
        isRequesting: false,
      }
    case FETCH_FEATURED_CATEGORIES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}