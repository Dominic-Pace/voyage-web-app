import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'

import { formState} from './components/form/forms'

const RootReducer = combineReducers({
  forms: combineForms(formState, 'forms')
});

export default RootReducer
