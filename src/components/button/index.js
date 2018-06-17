import React from 'react'
import { Button } from 'react-bootstrap'

import './styles.css'
export const RoundedButton = ({ color, label, transparent }) => (
  <Button
    className={transparent ? 'rounded-btn-transparent' : 'rounded-btn'}
  >
    { label }
  </Button>
)

