import React from 'react'

import { Form } from 'react-redux-form'
import { FormButton } from '../../../../components/form/button'
import Icon from '../../../../components/icons'
import SectionFiveHeader from '../header'
import { TextInputField } from '../../../../components/form/text-input'

import { BASE_FORM_REDUCER, JOIN_MAIL_FORM } from '../../../../components/form/constants'

const isButtonDisabled = joinMail => {
  return !joinMail.email;

}
const SectionFiveContent = ({ handleSubmitClick, joinMail }) => (
  <div>
    <SectionFiveHeader />
    <Form
      className="landing-form"
      model={`${BASE_FORM_REDUCER}${JOIN_MAIL_FORM}`}
    >
      <TextInputField
        height={50}
        model="email"
        placeholder="Enter Email Address"
        style={{ marginLeft: -13}}
        width="80vw"
      />
      <FormButton
        btnStyle={{ borderRadius: 6 }}
        disabled={isButtonDisabled(joinMail)}
        label={<Icon type="send" size={22}/>}
        onClick={handleSubmitClick}
        formState={{valid: true}}
        style={{ marginLeft: -65 }}
      />
    </Form>
  </div>
)

export default SectionFiveContent
