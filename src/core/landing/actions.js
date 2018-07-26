import {
  FETCH_FEATURED_PACKAGES_FAILURE,
  FETCH_FEATURED_PACKAGES_REQUEST,
  FETCH_FEATURED_PACKAGES_SUCCESS,
  SEND_CONTACT_US_FAILURE,
  SEND_CONTACT_US_REQUEST,
  SEND_CONTACT_US_SUCCESS,
  SEND_CUSTOM_EMAIL_FAILURE,
  SEND_CUSTOM_EMAIL_REQUEST,
  SEND_CUSTOM_EMAIL_SUCCESS,
  SEND_JOIN_EMAIL_LIST_FAILURE,
  SEND_JOIN_EMAIL_LIST_REQUEST,
  SEND_JOIN_EMAIL_LIST_SUCCESS,
} from './types'

import {
  contactUsRef,
  customVacationRef,
  joinEmailListRef,
  packagesRef,
} from '../../utils/firebase/firebase-refs'

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

export const sendContactUs = contactInfo => {
  const contactMessage = {
    comments: contactInfo.comments,
    email: contactInfo.email,
    name: contactInfo.name,
    subject: contactInfo.subject,

  }

  return dispatch => {
    dispatch({ type: SEND_CONTACT_US_REQUEST })
    return contactUsRef.push(contactMessage)
      .then(res => {
        dispatch({ type: SEND_CONTACT_US_SUCCESS })
      }).catch(err => {
        dispatch({ type: SEND_CONTACT_US_FAILURE, error: err })
      })
  }
}

export const sendCustomVacationEmail = customPackage => {
  const vacationRequestInfo = {
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
    return customVacationRef.push(vacationRequestInfo)
      .then(res => {
        dispatch({ type: SEND_CUSTOM_EMAIL_SUCCESS })
      }).catch(err => {
        dispatch({ type: SEND_CUSTOM_EMAIL_FAILURE, error: err })
      })
  }
}

export const sendJoinEmailList = emailAddress => {
  return dispatch => {
    dispatch({ type: SEND_JOIN_EMAIL_LIST_REQUEST })
    return joinEmailListRef.push(emailAddress)
      .then(res => {
        dispatch({ type: SEND_JOIN_EMAIL_LIST_SUCCESS })
      }).catch(err => {
        dispatch({ type: SEND_JOIN_EMAIL_LIST_FAILURE, error: err })
      })
  }
}

