import axios from 'axios'

import {
  FETCH_PACKAGE_FAILURE,
  FETCH_PACKAGE_REQUEST,
  FETCH_PACKAGE_SUCCESS,
  FETCH_THINGS_TO_DO_FAILURE,
  FETCH_THINGS_TO_DO_REQUEST,
  FETCH_THINGS_TO_DO_SUCCESS,
  FETCH_YELP_TAGS_FAILURE,
  FETCH_YELP_TAGS_REQUEST,
  FETCH_YELP_TAGS_SUCCESS,
} from './types'

import {
  singlePackageRef,
  yelpTagsRef,
} from '../../utils/firebase/firebase-refs'

const yelpToken = 'Bearer DzOG5TNVYEC9NsBLSslQBBKGXBCjiP4gbmbqYqdSKIQwu95WBK-KrtTYfs2PzNp0qQwuVSqfbpFSZTdP0jt1Nxtmo2p_KFwUpouoTlNa8je4JT8p65e692h4bHpnW3Yx'

export const fetchPackageById = id => (
  dispatch => {
    let currentPackage = {}
    dispatch({ type: FETCH_PACKAGE_REQUEST })
    return singlePackageRef(id).once('value', travelPackage => {
      currentPackage = travelPackage.val()
    }).then(res => {
      dispatch({ type: FETCH_PACKAGE_SUCCESS, currentPackage: currentPackage })
    }).catch(err => {
      dispatch({ type: FETCH_PACKAGE_FAILURE, error: err })
    })
  }
)

export const fetchThingsToDo = (location, category) => (
  dispatch => {
    const urlProxy =
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=things+to+do&location=${location}&radius=32187&limit=50${category ? `&categories=${category}` : '' }`
    dispatch({type: FETCH_THINGS_TO_DO_REQUEST})
    return axios.get(urlProxy,
      {
        headers: {
          'Authorization': yelpToken,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
        }
      }).then(res => {
      dispatch({type: FETCH_THINGS_TO_DO_SUCCESS, thingsToDo: res.data.businesses })
    }).catch(err => {
      dispatch({type: FETCH_THINGS_TO_DO_FAILURE, error: err})
    })
  }
)

export const fetchYelpTags = () => (
  dispatch => {
    const tags = []
    dispatch({ type: FETCH_YELP_TAGS_REQUEST })
    return yelpTagsRef.once('value', snap => {
      snap.forEach(data => {
        tags.push(data.val())
      })
    }).then(res => {
      dispatch({ type: FETCH_YELP_TAGS_SUCCESS, yelpTags: tags })
    }).catch(err => {
      dispatch({ type: FETCH_YELP_TAGS_FAILURE, error: err })
    })
  }
)
