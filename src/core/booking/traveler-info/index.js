import React from 'react'

import { Col, Grid, Row } from 'react-bootstrap'

import '../styles.css'
import { Form} from 'react-redux-form'
import { BASE_FORM_REDUCER, TRAVELER_INFO_FORM } from '../../../components/form/constants'
import { H2 } from '../../../components/text'
import { TextInputField } from '../../../components/form'
import { getMinAgeDate } from '../../../utils/date'

const renderTravelerForm = (forms, travelerNumber, isMobileView) => {
  const modelName = `${TRAVELER_INFO_FORM}${travelerNumber}`
  return (
    <Form
      className="personal-info-form"
      model={`${BASE_FORM_REDUCER}${modelName}`}
    >
      <Row className="personal-info-title-container">
        <H2>{`Traveler ${travelerNumber + 1}'s Information`}</H2>
      </Row>
      <Row>
        <TextInputField
          defaultValue=""
          model="firstName"
          placeholder="First Name"
          width={isMobileView && '90vw'}
        />
      </Row>
      <Row>
        <TextInputField
          model="lastName"
          placeholder="Last Name"
          width={isMobileView && '90vw'}
        />
      </Row>
      <Row>
        <TextInputField
          model="email"
          placeholder="Email"
          width={isMobileView && '90vw'}
        />
      </Row>
      <Row>
        <TextInputField
          model="phone"
          placeholder="Phone"
          width={isMobileView && '90vw'}
        />
      </Row>
      <Row className="personal-info-birthday">
        Birthday
      </Row>
      <Row className="personal-info-birthday">
        <Col>
          <TextInputField
            max={getMinAgeDate() + 15}
            min={getMinAgeDate() - 100}
            model="birthday"
            type="date"
            width={isMobileView ? '40vw' : '12vw'}
          />
        </Col>
      </Row>
    </Form>
  )
}

const PersonalInfoView = ({ forms, isMobileView, numOfPeople }) => {
  let travelers = []
  for (let i = 0; i < numOfPeople; i++) {
    travelers.push({})
  }
  return (
    <Grid className="personal-info-container">
      {
        travelers.map((user, key) => (
          renderTravelerForm(forms.forms, key, isMobileView)
        ))
      }
    </Grid>
  )
}

export default PersonalInfoView
