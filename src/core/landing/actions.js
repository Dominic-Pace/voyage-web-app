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
        let task = data.val()
        categories.push(task)
      })
    }).then(res => {
      dispatch({ type: FETCH_HOMEPAGE_CATEGORIES_SUCCESS })
    }).catch(err => {
      dispatch({ type: FETCH_HOMEPAGE_CATEGORIES_FAILURE })
    })
  }
)