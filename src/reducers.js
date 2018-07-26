import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import Categories from './core/landing/reducer'
import Explore from './core/explore/reducer'

import { formState} from './components/form/forms'

const RootReducer = combineReducers({
  explore: Explore,
  forms: combineForms(formState, 'forms'),
  homepage: Categories
});

export default RootReducer
