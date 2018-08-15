import {
  contactUsForm,
  customPackageForm,
  joinMailListForm,
  travelerInfoForm,
  userProfileForm,
  userForm,
} from './initialState'
import {
  CONTACT_FORM,
  CUSTOM_PACKAGE_FORM,
  JOIN_MAIL_FORM,
  LOGIN_FORM,
  REGISTER_FORM,
  TRAVELER_INFO_FORM,
  USER_PROFILE_FORM,
} from './constants'

export const formState = {
  [CONTACT_FORM]: contactUsForm,
  [CUSTOM_PACKAGE_FORM]: customPackageForm,
  [JOIN_MAIL_FORM]: joinMailListForm,
  [LOGIN_FORM]: userForm,
  [REGISTER_FORM]: userForm,
  [TRAVELER_INFO_FORM]: travelerInfoForm,
  [USER_PROFILE_FORM]: userProfileForm,
}