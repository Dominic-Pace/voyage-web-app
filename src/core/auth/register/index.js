import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { errorMessages, isEmail } from '../../../components/form/validators'

import { Col, Grid, Row } from 'react-bootstrap'
import { Form } from 'react-redux-form'
import { H2 } from '../../../components/text/index'
import { RoundedButton } from '../../../components/button/index'
import { TextInputField} from '../../../components/form/index'

import { BASE_FORM_REDUCER, REGISTER_FORM } from '../../../components/form/constants'
import '../styles.css'

class RegisterView extends React.Component {
  render() {
    const { register } = this.props
    return (
      <Grid className="login-container">
        <Form
          className="login-form"
          model={`${BASE_FORM_REDUCER}${REGISTER_FORM}`}
        >
          <Row className="login-title-container">
            <H2>Member Register</H2>
          </Row>
          <Row>
            <TextInputField
              model="email"
              placeholder="Email"
              validation={{ validator: isEmail, errorMessage: errorMessages.isEmail}}
            />
          </Row>
          <Row>
            <TextInputField
              model="password"
              placeholder="Password"
              type="password"
            />
          </Row>
          <Row>
            <Col className="login-link-container">
            </Col>
            <Col className="login-btn-container">
              <RoundedButton
                label="Register"
                linkTo="/"
                onClick={() => {this.props.loginUser(register)}}
                style={{
                  borderRadius: 3,
                  fontWeight: 600,
                  width: '80%',
                }}
                type="link"
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
    isRequesting,
    user,
  } = auth
  const { register } = forms
  return {
    isRequesting,
    register,
    user,
  }
}
export default connect(mapStateToProps, { ...actions })(RegisterView)