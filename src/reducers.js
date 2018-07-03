import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'
import HomePage from './core/landing/reducer'


import { formState} from './components/form/forms'

const RootReducer = combineReducers({
  forms: combineForms(formState, 'forms'),
  homepage: HomePage
});

export default RootReducer
