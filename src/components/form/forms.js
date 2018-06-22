import {
  customPackageForm,
  joinMailListForm
} from './initialState'
import {
  CUSTOM_PACKAGE_FORM,
  JOIN_MAIL_FORM
} from './constants'

export const formState = {
  [CUSTOM_PACKAGE_FORM]: customPackageForm,
  [JOIN_MAIL_FORM]: joinMailListForm
}