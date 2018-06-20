import React from 'react'

import CustomRequestForm from '../request-form'
import { FormButton } from '../../../../components/form/button'
import Icon from '../../../../components/icons'
import SectionFourHeader from '../header'

const SectionFourContent = () => (
  <div>
    <SectionFourHeader />
    <CustomRequestForm />
    <FormButton
      center
      icon
      label={<span><Icon type="send" size={22}/> Get Your Quote Today!</span>}
      formState={{valid: true}}
    />
  </div>
)

export default SectionFourContent
