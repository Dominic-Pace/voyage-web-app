import React from 'react'

import { Control, Errors } from 'react-redux-form'
import { Row } from 'react-bootstrap'

import '../styles.css'
import { scrubValidatorForErrorMessage, scrubValidatorForValidators } from '../../../utils/scrub'
import ErrorMessage from '../error-message'

export const TextInputField = (
  {
    model,
    placeholder,
    style,
    type,
    validation,
    width
  }
) => (
  <Row className="text-form-container">
    <Control
      className="text-form-field"
      model={`.${model}`}
      placeholder={placeholder}
      style={{
        ...{
          width: width || '30vw',
        }, ...style
      }}
      type={type ? type : 'text'}
      validators={scrubValidatorForValidators(validation)}
    />
    <Row>
      <Errors
        component={ErrorMessage}
        className="errors"
        model={`.${model}`}
        show="touched"
        messages={scrubValidatorForErrorMessage(validation)}
      />
    </Row>
  </Row>
)

export const TextAreaField = ({ height, model, placeholder, style, width }) => (
  <Row className="text-form-container">
    <Control.textarea
      className="text-form-field"
      model={`.${model}`}
      placeholder={placeholder}
      style={{
        ...{
          height: height || 200,
          width: width || '30vw',
        }, ...style
      }}
    />
    <Errors
      className="errors"
      model={`.${model}`}
      show="touched"
      messages={{
        required: 'Required',
        maxLength: 'Must be 15 characters or less',
      }}
    />
  </Row>
)
