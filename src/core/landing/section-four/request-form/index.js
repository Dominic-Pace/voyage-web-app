import React from 'react'

import { Col, Row } from 'react-bootstrap'
import { Form } from 'react-redux-form'
import {
  TextAreaField,
  TextInputField
} from '../../../../components/form'

import {
  BASE_FORM_REDUCER,
  CUSTOM_PACKAGE_FORM
} from '../../../../components/form/constants'

const CustomRequestForm = () => {
  return(
    <Row className="section-four">
      <Form
        className="landing-form"
        model={`${BASE_FORM_REDUCER}${CUSTOM_PACKAGE_FORM}`}
      >
        <Col md={6}>
          <TextInputField
            model="name"
            placeholder="Name"
          />
          <TextInputField
            model="email"
            placeholder="Email Address"
          />
          <TextInputField
            model="destination"
            placeholder="Preferred Destination (optional)"
          />
          <TextInputField
            model="dates"
            placeholder="Dates"
          />
          <TextInputField
            model="flexible"
            placeholder="Are Dates Flexible?"
          />
          <TextInputField
            model="homeAirport"
            placeholder="Home Airport"
          />
        </Col>
        <Col md={6}>
          <TextInputField
            model="numberOfPeople"
            number
            placeholder="Number of Travelers"
          />
          <TextInputField
            model="totalBudget"
            number
            placeholder="Total Budget for Trip (Leave blank for flexible)"
          />
          <TextInputField
            model="tags"
            placeholder="What would you love in your next getaway? (optional)"
          />
          <TextAreaField
            height={143}
            model="comments"
            placeholder="Additional Comments (optional)"
          />
        </Col>
      </Form>
    </Row>
  )
}

export default CustomRequestForm