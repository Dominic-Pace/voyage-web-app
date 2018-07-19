import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_FEATURED_PACKAGES_FAILURE,
  FETCH_FEATURED_PACKAGES_REQUEST,
  FETCH_FEATURED_PACKAGES_SUCCESS
} from './types'

const INITIAL_STATE = {
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state,
        categories: action.categories,
        homepageCategories: action.homepageCategories,
        isRequesting: false,
      }
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case FETCH_FEATURED_PACKAGES_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_FEATURED_PACKAGES_SUCCESS:
      return { ...state,
        packages: action.packages,
        featuredPackages: action.featuredPackages,
        isRequesting: false,
      }
    case FETCH_FEATURED_PACKAGES_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}