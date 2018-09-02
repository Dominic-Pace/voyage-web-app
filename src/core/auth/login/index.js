import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { errorMessages, isEmail } from '../../../components/form/validators'

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
    const { isMobileView, login } = this.props
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
              validation={{ validator: isEmail, errorMessage: errorMessages.isEmail }}
              width={isMobileView && '80vw'}
            />
          </Row>
          <Row>
            <TextInputField
              model="password"
              placeholder="Password"
              type="password"
              width={isMobileView && '80vw'}
            />
          </Row>
          <Row>
            <Col className="login-link-container">
              <Link to="/auth/register" >Register</Link>
            </Col>
            <Col className="login-btn-container">
              <RoundedButton
                label="Login"
                onClick={() => { this.props.loginUser(login).then(() => {
                  if (this.props.isAuthed) {
                    return this.props.history.push('/explore')
                  }
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
    errorMessage,
    isAuthed,
    isMobileView,
    isRequesting,
    user,
  } = auth
  const { login } = forms
  return {
    errorMessage,
    isAuthed,
    isMobileView,
    isRequesting,
    login,
    user,
  }
}
export default connect(mapStateToProps, { ...actions })(LoginView)