import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './styles.css'

export const RoundedButton = ({ color, disabled, label, linkTo, style, transparent, type }) => {
  const renderButtonType = label => {
    switch(type) {
      case 'link':
        return (
          <Link className="label" to={linkTo}>
            { label }
          </Link>
        )
      case 'hashLink':
        return (
          <HashLink
            className="label"
            smooth
            to={linkTo}
          >
            { label }
          </HashLink>
        )
      default:
        return null
    }
  }



  return (
    <Button
      className={transparent ? 'rounded-btn-transparent' : 'rounded-btn'}
      disabled={disabled}
      style={style}
    >
      {
        type
          ?
          renderButtonType(label)
          :
          label
      }
    </Button>
  )
}



