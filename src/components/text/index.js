import React from 'react'
import { Row } from 'react-bootstrap'

import './styles.css'

export const H1 = ({ bold, center, className, color, children, rowClassName, style }) => (
  <Row
    className={rowClassName}
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
      margin: 0,
    }}
  >
    <p
      className={className ? `header-xl ${className}`: 'header-xl'}
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

export const H2 = ({ bold, center, className, color, children, rowClassName, style }) => (
  <Row
    className={rowClassName}
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
      margin: 0,
    }}
  >
    <p
      className={className ? `header-lg ${className}`: 'header-lg'}
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

export const H3 = ({ bold, center, className, color, children, rowClassName, style }) => (
  <Row
    className={rowClassName}
    md={12}
    style={{
      justifyContent: center ? 'center' : null,
    }}
  >
    <p
      className={className ? `header-md ${className}`: 'header-md'}
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

export const Text = ({ bold, center, color, children, className, rowClassName, size, style }) => (
  <Row
    className={rowClassName}
    md={12}
    style={{
      alignItems: center ? 'center' : null,
      height: '100%',
      justifyContent: center ? 'center' : null,
      width: '100%'
    }}
  >
    <p
      className={className ? `general-text ${className}`: 'general-text'}
      style={{
        ...{
          color: color || null,
          fontWeight: bold ? '600' : '100',
          fontSize: size || null
        }, ...style
      }}
    >
      {children}
    </p>
  </Row>
)
