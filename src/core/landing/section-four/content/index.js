import React from 'react'

import CustomRequestForm from '../request-form'
import { FormButton } from '../../../../components/form/button'
import Icon from '../../../../components/icons'
import SectionFourHeader from '../header'

const isButtonDisabled = customPackage => !customPackage.comments ||
  !customPackage.destination ||
  !customPackage.email ||
  !customPackage.flexible ||
  !customPackage.homeAirport ||
  !customPackage.name ||
  !customPackage.numberOfPeople ||
  !customPackage.tags ||
  !customPackage.totalBudget

const SectionFourContent = ({ customPackage, handleSubmitClick }) => (
  <React.Fragment>
    <SectionFourHeader />
    <CustomRequestForm />
    <FormButton
      center
      disabled={isButtonDisabled(customPackage)}
      label={<span><Icon type="send" size={22} />Get Your Quote Today!</span>}
      onClick={handleSubmitClick}
      formState={{valid: true}}
    />
  </React.Fragment>
)

export default SectionFourContent
