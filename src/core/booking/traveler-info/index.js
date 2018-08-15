import React from 'react'

import {Col, Grid, Row} from 'react-bootstrap'

import '../styles.css'
import {Form} from "react-redux-form";
import {BASE_FORM_REDUCER, TRAVELER_INFO_FORM} from "../../../components/form/constants";
import {H2} from "../../../components/text";
import {TextInputField} from "../../../components/form";
import {getMinAgeDate} from "../../../utils/date";

const renderTravelerForm = (forms, travelerNumber) => {
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
        />
      </Row>
      <Row>
        <TextInputField
          model="lastName"
          placeholder="Last Name"
        />
      </Row>
      <Row>
        <TextInputField
          model="email"
          placeholder="Email"
        />
      </Row>
      <Row>
        <TextInputField
          model="phone"
          placeholder="Phone"
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
            width="12vw"
          />
        </Col>
      </Row>
    </Form>
  )
}

const PersonalInfoView = ({ forms, numOfPeople }) => {
  let travelers = []
  for (let i = 0; i < numOfPeople; i++) {
    travelers.push({})
  }
  return (
    <Grid className="personal-info-container">
      {
        travelers.map((user, key) => (
          renderTravelerForm(forms.forms, key)
        ))
      }
    </Grid>
  )
}

export default PersonalInfoView
