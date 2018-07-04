import {
  FETCH_HOMEPAGE_CATEGORIES_FAILURE,
  FETCH_HOMEPAGE_CATEGORIES_REQUEST,
  FETCH_HOMEPAGE_CATEGORIES_SUCCESS
} from './types'

import { travelCategoriesRef } from '../../utils/firebase/firebase-refs'

export const fetchHomepageCategories = () => (
  dispatch => {
    const categories = []
    dispatch({ type: FETCH_HOMEPAGE_CATEGORIES_REQUEST })
    return travelCategoriesRef.once('value', snap => {
      snap.forEach(data => {
        const category = data.val()
        category.onHomepage && categories.push(category)
      })
    }).then(res => {
      dispatch({ type: FETCH_HOMEPAGE_CATEGORIES_SUCCESS, categories: categories })
    }).catch(err => {
      dispatch({ type: FETCH_HOMEPAGE_CATEGORIES_FAILURE, error: err })
    })
  }
)