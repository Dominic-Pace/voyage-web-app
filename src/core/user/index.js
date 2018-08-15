import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import { getMinAgeDate } from '../../utils/date'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { Col, Grid, Row } from 'react-bootstrap'
import { Form } from 'react-redux-form'
import { H2 } from '../../components/text/index'
import LocationSearchInput from '../../components/form/location-search'
import { RoundedButton } from '../../components/button/index'
import { TextInputField} from '../../components/form/index'

import { BASE_FORM_REDUCER, USER_PROFILE_FORM } from '../../components/form/constants'
import './styles.css'
import {toast} from "react-toastify";

class UserView extends React.Component {
  state = {
    address: '',
    location: {},
  }

  componentWillMount() {
    if (!this.props.user) {
      this.props.history.push('/auth')
    } else {
      this.props.fetchUserProfile(this.props.user.id).then(() => {
        this.setState({ address: this.props.profileData.location ? this.props.profileData.location.address : '' })
      })
    }
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
      .catch(() => toast.error('Could not select that address. Please try another one.')
      )
  }

  render() {
    const { profileData, userData } = this.props
    if (profileData) {
      return (
        <Grid className="user-container">
          <Form
            className="user-form"
            model={`${BASE_FORM_REDUCER}${USER_PROFILE_FORM}`}
          >
            <Row className="user-title-container">
              <H2>{`User Information`}</H2>
            </Row>
            <Row>
              <TextInputField
                defaultValue={profileData.firstName}
                model="firstName"
                placeholder="First Name"
              />
            </Row>
            <Row>
              <TextInputField
                defaultValue={profileData.lastName}
                model="lastName"
                placeholder="Last Name"
              />
            </Row>
            <Row>
              <TextInputField
                defaultValue={profileData.email}
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
                  defaultValue={profileData.birthday}
                  max={getMinAgeDate()}
                  min={getMinAgeDate() - 100}
                  model="birthday"
                  type="date"
                  width="12vw"
                />
              </Col>
              <Col>
                <TextInputField
                  defaultValue={profileData.homeAirport}
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
                  onClick={() => { this.props.updateUserData(profileData.id, userData, this.state.location)}}
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
    } else {
      return null
    }

  }
}

const mapStateToProps = ({ auth, forms, userProfile }) => {
  const {
    user,
  } = auth
  const { profileData } = userProfile
  const { userData } = forms
  return {
    profileData,
    user,
    userData,
  }
}
export default connect(mapStateToProps, { ...actions })(UserView)
