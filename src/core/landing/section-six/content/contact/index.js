import React from 'react'

import {Col, Row} from 'react-bootstrap'
import { Form } from 'react-redux-form'
import { BASE_FORM_REDUCER, CONTACT_FORM } from '../../../../../components/form/constants'
import { FormButton } from '../../../../../components/form/button'
import Icon from '../../../../../components/icons'
import { Text } from '../../../../../components/text'
import { TextAreaField, TextInputField } from '../../../../../components/form/text-input'

const ContactContent = ({ handleSubmitClick, isMobileView }) => (
  <Col
    className="footer-content-container"
    md={5}
  >
    <Text bold>Contact Us</Text>
    <Form
      model={`${BASE_FORM_REDUCER}${CONTACT_FORM}`}
    >
      <TextInputField
        model="name"
        placeholder="Name"
        width={`${isMobileView ? 60 : 28}vw`}
      />
      <TextInputField
        model="email"
        placeholder="Email"
        width={`${isMobileView ? 60 : 28}vw`}
      />
      <TextInputField
        model="subject"
        placeholder="Subject"
        width={`${isMobileView ? 60 : 28}vw`}
      />
      <TextAreaField
        height={148}
        model="comments"
        placeholder="Comments"
        width={`${isMobileView ? 60 : 28}vw`}
      />
      <Row className="footer-contact-btn">
        <FormButton
          center
          label={<span>Send<Icon type="send" size={22} /></span>}
          onClick={handleSubmitClick}
          formState={{ valid: true }}
        />
      </Row>
    </Form>
  </Col>
)

export default ContactContent
