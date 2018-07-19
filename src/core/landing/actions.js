import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_FEATURED_PACKAGES_FAILURE,
  FETCH_FEATURED_PACKAGES_REQUEST,
  FETCH_FEATURED_PACKAGES_SUCCESS
} from './types'

import { packagesRef, travelCategoriesRef } from '../../utils/firebase/firebase-refs'

export const fetchFeaturedCategories = () => (
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
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories: categories, homepageCategories: homepageCategories })
    }).catch(err => {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, error: err })
    })
  }
)

export const fetchFeaturedPackages = () => (
  dispatch => {
    const packages = []
    const featuredPackages = []
    dispatch({ type: FETCH_FEATURED_PACKAGES_REQUEST })
    return packagesRef.once('value', snap => {
      snap.forEach(data => {
        const travelPackage = data.val()
        packages.push(travelPackage)
        travelPackage.featured && featuredPackages.push(travelPackage)
      })
    }).then(res => {
      dispatch({ type: FETCH_FEATURED_PACKAGES_SUCCESS, packages: packages, featuredPackages: featuredPackages })
    }).catch(err => {
      dispatch({ type: FETCH_FEATURED_PACKAGES_FAILURE, error: err })
    })
  }
)