import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        featuredCategories: action.featuredCategories,
        isRequesting: false,
      }
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}