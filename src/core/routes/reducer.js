import {
  UPDATE_LOGIN_ROUTE_SUCCESS,
} from './types'


export default (state={}, action) => {
  switch(action.type) {
    case UPDATE_LOGIN_ROUTE_SUCCESS:
      return { ...state, redirectRoute: action.route }
    default:
      return state
  }
}
