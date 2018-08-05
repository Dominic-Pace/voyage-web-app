import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './styles.css'

export const RoundedButton = ({
                                className,
                                color,
                                disabled,
                                label,
                                linkTo,
                                onClick,
                                style,
                                transparent,
                                type,
                                uppercase,
                              }) => {
  const renderButtonType = label => {
    switch(type) {
      case 'link':
        return (
          <Link className="label" to={linkTo}>
            { uppercase ? label.toUpperCase() : label }
          </Link>
        )
      case 'hashLink':
        return (
          <HashLink
            className="label"
            smooth
            to={linkTo}
          >
            { uppercase ? label.toUpperCase() : label }
          </HashLink>
        )
      default:
        return null
    }
  }

  return (
    <Button
      className={`${className} ${transparent ? 'rounded-btn-transparent' : 'rounded-btn'}`}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {
        type
          ?
          renderButtonType(label)
          :
          uppercase ? label.toUpperCase() : label
      }
    </Button>
  )
}



