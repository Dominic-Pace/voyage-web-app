import React from 'react'
import { Row } from 'react-bootstrap'

import './styles.css'
export const H1 = ({ bold, center, color, children, style }) => (
  <Row
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
    }}
  >
    <p
      className="header-xl"
      style={{
        ...{
          color: color || null,
          fontWeight: bold ? '600' : null,
        }, ...style
      }}
    >
      {children}
    </p>
  </Row>
)

export const H2 = ({ bold, center, color, children, style }) => (
  <Row
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
    }}
  >
    <p
      className="header-lg"
      style={{
        ...{
          color: color || null,
          fontWeight: bold ? '600' : null,
        }, ...style
      }}
    >
      {children}
    </p>
  </Row>
)

export const H3 = ({ bold, center, color, children, style }) => (
  <Row
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
    }}
  >
    <p
      className="header-md"
      style={{
        ...{
          color: color || null,
          fontWeight: bold ? '600' : null,
        }, ...style
      }}
    >
      {children}
    </p>
  </Row>
)

export const Text = ({ bold, center, color, children, style }) => (
  <Row
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
    }}
  >
    <p
      className="general-text"
      style={{
        ...{
          color: color || null,
          fontWeight: bold ? '600' : '100',
        }, ...style
      }}
    >
      {children}
    </p>
  </Row>
)
