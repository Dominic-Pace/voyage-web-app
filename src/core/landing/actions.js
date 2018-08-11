import {
  FETCH_FEATURED_LOCATIONS_FAILURE,
  FETCH_FEATURED_LOCATIONS_REQUEST,
  FETCH_FEATURED_LOCATIONS_SUCCESS,
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
  locationsRef,
} from '../../utils/firebase/firebase-refs'
import {toast} from "react-toastify";

export const fetchFeaturedLocations = () => (
  dispatch => {
    const featuredLocations = []
    dispatch({ type: FETCH_FEATURED_LOCATIONS_REQUEST })
    return locationsRef.once('value', snap => {
      snap.forEach(data => {
        const location = data.val()
        location.featured && featuredLocations.push(location)
      })
    }).then(res => {
      dispatch({ type: FETCH_FEATURED_LOCATIONS_SUCCESS, featuredLocations: featuredLocations })
    }).catch(err => {
      dispatch({ type: FETCH_FEATURED_LOCATIONS_FAILURE, error: err.message })
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
        toast.success('Contact Us Message Sent! Please check your email over the next 24 hours for a response.')
        dispatch({ type: SEND_CONTACT_US_SUCCESS })
      }).catch(err => {
        toast.error('Contact Us message did not send. Please check your form and try again')
        dispatch({ type: SEND_CONTACT_US_FAILURE, error: err.message })
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
        toast.success('Custom Vacation Request Sent! Please check your email over the next 24 hours for a response.')
        dispatch({ type: SEND_CUSTOM_EMAIL_SUCCESS })
      }).catch(err => {
        toast.error('Custom Vacation request did not send. Please check your form and try again')
        dispatch({ type: SEND_CUSTOM_EMAIL_FAILURE, error: err.message })
      })
  }
}

export const sendJoinEmailList = emailAddress => {
  return dispatch => {
    dispatch({ type: SEND_JOIN_EMAIL_LIST_REQUEST })
    return joinEmailListRef.push(emailAddress)
      .then(res => {
        toast.success('Thank you for joining our email list!')
        dispatch({ type: SEND_JOIN_EMAIL_LIST_SUCCESS })
      }).catch(err => {
        toast.success('Could not add you to the email list. Please try again shortly.')
        dispatch({ type: SEND_JOIN_EMAIL_LIST_FAILURE, error: err.message })
      })
  }
}

