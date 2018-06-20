import React from 'react'

import { RoundedButton } from '../../button'
import { Row } from 'react-bootstrap'

import '../styles.css'

export const FormButton = ({ center, formState, label, style }) => (
  <Row
    className="form-btn-container"
    style={{
      ...{
        justifyContent: center && 'center',
      }, ...style
    }}
  >
    <RoundedButton
      label={label}
      disabled={!formState.valid}
    />
  </Row>
)