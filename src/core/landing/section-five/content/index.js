import React from 'react'

import { Form } from 'react-redux-form'
import { FormButton } from '../../../../components/form/button'
import Icon from '../../../../components/icons'
import SectionFiveHeader from '../header'
import { TextInputField } from '../../../../components/form/text-input'

import { BASE_FORM_REDUCER, JOIN_MAIL_FORM } from '../../../../components/form/constants'

const SectionFiveContent = ({ handleSubmitClick }) => (
  <div>
    <SectionFiveHeader />
    <Form
      className="landing-form"
      model={`${BASE_FORM_REDUCER}${JOIN_MAIL_FORM}`}
    >
      <TextInputField
        model="email"
        placeholder="Enter Email Address"
        width="50vw"
      />
      <FormButton
        btnStyle={{ borderRadius: 6 }}
        label={<Icon type="send" size={22}/>}
        onClick={handleSubmitClick}
        formState={{valid: true}}
        style={{ marginLeft: -80 }}
      />
    </Form>
  </div>
)

export default SectionFiveContent
