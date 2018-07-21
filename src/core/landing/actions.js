import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_FEATURED_PACKAGES_FAILURE,
  FETCH_FEATURED_PACKAGES_REQUEST,
  FETCH_FEATURED_PACKAGES_SUCCESS,
  SEND_CUSTOM_EMAIL_FAILURE,
  SEND_CUSTOM_EMAIL_REQUEST,
  SEND_CUSTOM_EMAIL_SUCCESS,
} from './types'

import { customVacationRef, packagesRef, travelCategoriesRef } from '../../utils/firebase/firebase-refs'

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

export const sendCustomVacationEmail = customPackage => {
  const emailMessage = {
    name: customPackage.name,
    email: customPackage.email,
    destinations: customPackage.destination,
    areDatesFlexible: customPackage.flexible,
    homeAirport: customPackage.homeAirport,
    numberOfTravelers: customPackage.numberOfPeople,
    budget: customPackage.totalBudget,
    whatWouldTheyLoveInNextGetaway: customPackage.tags,
    additionalComments: customPackage.comments,
  }

  return dispatch => {
    dispatch({ type: SEND_CUSTOM_EMAIL_REQUEST })
    return customVacationRef.push(emailMessage)
      .then(res => {
        dispatch({ type: SEND_CUSTOM_EMAIL_SUCCESS })
      }).catch(err => {
        dispatch({ type: SEND_CUSTOM_EMAIL_FAILURE, error: err })
      })
  }
}
