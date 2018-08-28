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
  FETCH_ACCOMMODATIONS_FAILURE,
  FETCH_ACCOMMODATIONS_REQUEST,
  FETCH_ACCOMMODATIONS_SUCCESS,
} from './types'

import { sortAlphabeticallyByDisplayName } from '../../utils/sort'

const INITIAL_STATE = {
  isRequesting: false,
  selectedActivities: [],
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_PACKAGE_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_PACKAGE_SUCCESS:
      return {
        ...state,
        currentPackage: action.currentPackage,
        isRequesting: false,
      }
    case FETCH_PACKAGE_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case FETCH_THINGS_TO_DO_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_THINGS_TO_DO_SUCCESS:
      return {
        ...state,
        thingsToDo: action.thingsToDo,
        isRequesting: false,
        recommendedThingsToDo: action.recommendedThingsToDo,
      }
    case FETCH_THINGS_TO_DO_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    case FETCH_YELP_TAGS_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_YELP_TAGS_SUCCESS:
      return {
        ...state,
        yelpTags: [
          ...[
            {
              displayName: 'Top Choices',
              filterName: null,
            },
            ...action.yelpTags.sort(sortAlphabeticallyByDisplayName)
          ]
        ],
        isRequesting: false,
      }
    case FETCH_YELP_TAGS_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }

    case FETCH_ACCOMMODATIONS_REQUEST:
      return { ...state, isRequesting: true }
    case FETCH_ACCOMMODATIONS_SUCCESS:
      return {
        ...state,
        accommodations: [
          ...[
            ...action.accommodations,
            {
              couldBe: [
                {
                  name: 'Book on Your Own',
                },
                {
                  name: `Recommended Airbnb's`,
                },
                {
                  name: 'Recommended Resorts/Hotels',
                }
              ],
              imageUrl: 'https://airbnb.design/wp-content/uploads/2016/03/airbnb-trust.jpg',
              name: `I'm not ready to decide right now. Please show me more later or I'll book on my own!`,
              price: 'More Flexible',
              stars: 3,
            }
          ]
        ],
        isRequesting: false,
      }
    case FETCH_ACCOMMODATIONS_FAILURE:
      return { ...state, errorMessage: action.error, isRequesting: false }
    default:
      return state
  }
}