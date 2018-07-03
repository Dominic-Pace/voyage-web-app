import {
  FETCH_HOMEPAGE_CATEGORIES_FAILURE,
  FETCH_HOMEPAGE_CATEGORIES_REQUEST,
  FETCH_HOMEPAGE_CATEGORIES_SUCCESS
} from './types'

const INITIAL_STATE = {
  errorMessage: '',
  isRequesting: false,
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_HOMEPAGE_CATEGORIES_REQUEST:
      return { ...state }
    case FETCH_HOMEPAGE_CATEGORIES_SUCCESS:
      return { ...state }
    case FETCH_HOMEPAGE_CATEGORIES_FAILURE:
      return { ...state }
    default:
      return state
  }
}