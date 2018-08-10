import React from 'react'

import { Form } from 'react-redux-form'
import { H2 } from '../../../components/text/index'
import { Col, Grid, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RoundedButton } from '../../../components/button/index'
import { TextInputField} from '../../../components/form/index'

import { BASE_FORM_REDUCER, LOGIN_FORM } from '../../../components/form/constants'
import '../styles.css'


const LoginView = () => (
  <Grid className="login-container">
      <Form
        className="login-form"
        model={`${BASE_FORM_REDUCER}${LOGIN_FORM}`}
      >
        <Row className="login-title-container">
          <H2>Member Register</H2>
        </Row>
        <Row>
          <TextInputField
            model="Name"
            placeholder="Email"
          />
        </Row>
        <Row>
          <TextInputField
            model="Email"
            placeholder="Password"
          />
        </Row>
        <Row>
          <Col>
            <Link to="/explore" />
          </Col>
          <Col>
            <RoundedButton
              className="top-section-btn"
              label="Register"
              linkTo="/"
              onClick={() => {}}
              style={{
                borderRadius: 3,
                fontWeight: 600,
                width: '30%',
              }}
              type="link"
              uppercase
            />
          </Col>
        </Row>
      </Form>
  </Grid>
)

export default LoginView
