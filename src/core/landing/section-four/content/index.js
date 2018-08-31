import React from 'react'

import CustomRequestForm from '../request-form'
import { FormButton } from '../../../../components/form/button'
import Icon from '../../../../components/icons'
import SectionFourHeader from '../header'

const SectionFourContent = ({ handleSubmitClick }) => (
  <React.Fragment>
    <SectionFourHeader />
    <CustomRequestForm />
    <FormButton
      center
      label={<span><Icon type="send" size={22}/>Get Your Quote Today!</span>}
      onClick={handleSubmitClick}
      formState={{valid: true}}
    />
  </React.Fragment>
)

export default SectionFourContent
