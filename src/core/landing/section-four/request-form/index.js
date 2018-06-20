import React from 'react'

import { Col, Row } from 'react-bootstrap'
import { Form } from 'react-redux-form'
import {
  TextAreaField,
  TextInputField
} from '../../../../components/form'

import {
  errorMessages,
  isNumber,
  isEmail,
  maxLength,
  required,
} from '../../../../components/form/validators'
import {
  BASE_FORM_REDUCER,
  CUSTOM_PACKAGE_FORM
} from '../../../../components/form/constants'

const MAX_EMAIL_LENGTH = 254
const MAX_NAME_LENGTH = 254

const CustomRequestForm = () => {
  return(
    <Row className="section-four">
      <Form
        className="custom-package-form"
        model={`${BASE_FORM_REDUCER}${CUSTOM_PACKAGE_FORM}`}
      >
        <Col md={6}>
          <TextInputField
            model=".name"
            placeholder="Name"
            validation={{
              maxLength: {
                errorMessage: errorMessages.maxLength(MAX_NAME_LENGTH),
                validator: () => maxLength(MAX_NAME_LENGTH)
              },
              required: {
                errorMessage: errorMessages.required,
                validator: required
              }
            }}
          />
          <TextInputField
            model=".email"
            placeholder="Email Address"
            validation={{
              isEmail: {
                errorMessage: errorMessages.isEmail,
                validator: isEmail,
              },
              maxLength: {
                errorMessage: errorMessages.maxLength(MAX_EMAIL_LENGTH),
                validator: () => maxLength(MAX_EMAIL_LENGTH),
              },
              required: {
                errorMessage: errorMessages.required,
                validator: required,
              }
            }}
          />
          <TextInputField
            model=".destination"
            placeholder="Preferred Destination (optional)"
          />
          <TextInputField
            model=".numberOfPeople"
            number
            placeholder="Number of Travelers"
            validation={{
              isNumber: {
                errorMessage: errorMessages.isNumber,
                validator: isNumber,
              },
              required: {
                errorMessage: errorMessages.required,
                validator: required
              }
            }}
          />
          <TextInputField
            model=".totalBudget"
            number
            placeholder="Total Budget for Trip (Leave blank for flexible)"
          />
        </Col>
        <Col md={6}>
          <TextInputField
            model=".homeAirport"
            placeholder="Home Airport"
          />
          <TextInputField
            model=".tags"
            placeholder="What would you love in your next getaway? (optional)"
          />
          <TextAreaField
            height={143}
            model=".comments"
            placeholder="Additional Comments (optional)"
          />
        </Col>
      </Form>
    </Row>
  )
}

export default CustomRequestForm