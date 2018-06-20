import React from 'react'

import { Row } from 'react-bootstrap'

export const ErrorMessage = ({ children }) => (
  <Row style={{ justifyContent: 'right' }}>
    <span className="error-msg">{children}</span>
  </Row>
)

export default ErrorMessage