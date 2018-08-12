import {
  contactUsForm,
  customPackageForm,
  joinMailListForm,
  userDataForm,
  userForm,
} from './initialState'
import {
  CONTACT_FORM,
  CUSTOM_PACKAGE_FORM,
  JOIN_MAIL_FORM,
  LOGIN_FORM,
  REGISTER_FORM,
  USER_DATA_FORM,
} from './constants'

export const formState = {
  [CONTACT_FORM]: contactUsForm,
  [CUSTOM_PACKAGE_FORM]: customPackageForm,
  [JOIN_MAIL_FORM]: joinMailListForm,
  [LOGIN_FORM]: userForm,
  [REGISTER_FORM]: userForm,
  [USER_DATA_FORM]: userDataForm,
}