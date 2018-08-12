import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

import { Col, Grid, Row } from 'react-bootstrap'
import { Form } from 'react-redux-form'
import { H2 } from '../../components/text/index'
import { RoundedButton } from '../../components/button/index'
import { TextInputField} from '../../components/form/index'

import { BASE_FORM_REDUCER, USER_DATA_FORM } from '../../components/form/constants'
import './styles.css'
import {getMinAgeDate} from "../../utils/date";
import LocationSearchInput from "../../components/form/location-search";
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";

class LoginView extends React.Component {
  state = {
    address: '',
    location: {},
  }

  handleSuggestionChange = address => {
    this.setState({ address })
  }

  handleSuggestionSelect =  address => {
    this.setState({ address })
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
        location: {
          address,
          coords: latLng
        }
      }))
      .catch(error => console.error('Error', error))
  }

  render() {
    const { user, userData } = this.props
    return (
      <Grid className="user-container">
        <Form
          className="user-form"
          model={`${BASE_FORM_REDUCER}${USER_DATA_FORM}`}
        >
          <Row className="user-title-container">
            <H2>{`User Information`}</H2>
          </Row>
          <Row>
            <TextInputField
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
            Birthday
          </Row>
          <Row>
            <Col style={{ paddingRight: 34 }}>
              <TextInputField
                max={getMinAgeDate()}
                min={getMinAgeDate() - 100}
                model="birthday"
                type="date"
                width="12vw"
              />
            </Col>
            <Col>
              <TextInputField
                model="homeAirport"
                placeholder="Home Airport"
                width="17vw"
              />
            </Col>
          </Row>
          <Row>
            <LocationSearchInput
              handleChange={this.handleSuggestionChange}
              handleSelect={this.handleSuggestionSelect}
              model="location"
              value={this.state.address}
            />
          </Row>
          <Row>
            <Col className="user-btn-container">
              <RoundedButton
                label="Save Information"
                onClick={() => { console.log('save info').then(() => {
                  console.log('save info then')
                })}}
                style={{
                  borderRadius: 3,
                  fontWeight: 600,
                  width: '80%',
                }}
                uppercase
              />
            </Col>
          </Row>
        </Form>
      </Grid>
    )
  }
}

const mapStateToProps = ({ auth, forms }) => {
  const {
    user,
  } = auth
  const { userData } = forms
  return {
    user,
    userData,
  }
}
export default connect(mapStateToProps, { ...actions })(LoginView)