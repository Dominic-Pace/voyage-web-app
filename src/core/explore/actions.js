import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from './types'

import {
  travelCategoriesRef
} from '../../utils/firebase/firebase-refs'

export const fetchCategories = () => (
  dispatch => {
    const categories = []
    const homepageCategories = []
    dispatch({ type: FETCH_CATEGORIES_REQUEST })
    return travelCategoriesRef.once('value', snap => {
      snap.forEach(data => {
        const category = data.val()
        categories.push(category)
        category.onHomepage && homepageCategories.push(category)
      })
    }).then(res => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories: categories, featuredCategories: homepageCategories })
    }).catch(err => {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, error: err })
    })
  }
)
