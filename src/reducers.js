import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import Auth from './core/auth/reducer'
import Categories from './core/landing/reducer'
import Explore from './core/explore/reducer'
import Package from './core/package/reducer'
import UserProfile from './core/user/reducer'

import { formState} from './components/form/forms'

const RootReducer = combineReducers({
  auth: Auth,
  explore: Explore,
  forms: combineForms(formState, 'forms'),
  homepage: Categories,
  travelPackage: Package,
  userProfile: UserProfile,
});

export default RootReducer
