import {
  FETCH_FEATURED_CATEGORIES_FAILURE,
  FETCH_FEATURED_CATEGORIES_REQUEST,
  FETCH_FEATURED_CATEGORIES_SUCCESS,
} from './types'

import { travelCategoriesRef } from '../../utils/firebase/firebase-refs'

export { fetchPackages } from '../explore/actions'

export const fetchFeaturedCategories = () => (
  dispatch => {
    const categories = []
    dispatch({ type: FETCH_FEATURED_CATEGORIES_REQUEST })

    return travelCategoriesRef.once('value', snap => {
      snap.forEach(data => {
        const category = data.val()
        category.featured && categories.push(category)
      })
    }).then(res => {
        dispatch({ type: FETCH_FEATURED_CATEGORIES_SUCCESS, categories: categories })
      }).catch(err => {
        dispatch({ type: FETCH_FEATURED_CATEGORIES_FAILURE, error: err })
      })
  }
)
