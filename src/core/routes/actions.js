import { toast } from 'react-toastify'

import {
  UPDATE_LOGIN_ROUTE_SUCCESS,
} from './types'


export const updateLoginRoute = route => (
  dispatch => {
    toast.info('In order to plan a trip, please login or register!')
    dispatch({ type: UPDATE_LOGIN_ROUTE_SUCCESS, route })
  }
)
