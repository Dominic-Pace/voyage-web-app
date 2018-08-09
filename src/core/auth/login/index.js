import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Col, Grid, Row } from 'react-bootstrap'
import { Form } from 'react-redux-form'
import { H2 } from '../../../components/text/index'
import { Link } from 'react-router-dom'
import { RoundedButton } from '../../../components/button/index'
import { TextInputField} from '../../../components/form/index'

import { BASE_FORM_REDUCER, LOGIN_FORM } from '../../../components/form/constants'
import '../styles.css'

class LoginView extends React.Component {
  render() {
    return (
      <Grid className="login-container">
        <Form
          className="login-form"
          model={`${BASE_FORM_REDUCER}${LOGIN_FORM}`}
        >
          <Row className="login-title-container">
            <H2>Member Login</H2>
          </Row>
          <Row>
            <TextInputField
              model="email"
              placeholder="Email"
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
              <Link to="/auth/register" >Register</Link>
            </Col>
            <Col className="login-btn-container">
              <RoundedButton
                label="Login"
                linkTo="/"
                onClick={() => {this.props.loginUser({ email: 'dominic.voyago@gmail.com', password: 'Welcome1!'})}}
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

const mapStateToProps = ({ auth }) => {
  const {
    user,
    isRequesting,
  } = auth
  return {
    user,
    isRequesting,
  }
}
export default connect(mapStateToProps, { ...actions })(LoginView)