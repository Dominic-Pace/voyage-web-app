import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'
import Categories from './core/landing/reducer'


import { formState} from './components/form/forms'

const RootReducer = combineReducers({
  forms: combineForms(formState, 'forms'),
  travelCategories: Categories
});

export default RootReducer
