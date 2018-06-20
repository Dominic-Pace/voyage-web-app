import React from 'react'
import { Button } from 'react-bootstrap'

import './styles.css'
export const RoundedButton = ({ color, disabled, label, transparent }) => (
  <Button
    className={transparent ? 'rounded-btn-transparent' : 'rounded-btn'}
    disabled={disabled}
  >
    { label }
  </Button>
)

