import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import Auth from './core/auth/reducer'
import Categories from './core/landing/reducer'
import Dashboard from './core/dashboard/reducer'
import Explore from './core/explore/reducer'
import Package from './core/package/reducer'
import RouteReducer from './core/routes/reducer'
import Trips from './core/trip-overview/reducer'
import UserProfile from './core/user/reducer'

import { formState} from './components/form/forms'

const RootReducer = combineReducers({
  auth: Auth,
  dashboard: Dashboard,
  explore: Explore,
  forms: combineForms(formState, 'forms'),
  homepage: Categories,
  route: RouteReducer,
  travelPackage: Package,
  trips: Trips,
  userProfile: UserProfile,
});

export default RootReducer
