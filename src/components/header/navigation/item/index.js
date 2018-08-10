import React from 'react'
import { Link } from 'react-router-dom'

const NavigationItem = ({ children, handleClick, linkTo, selected, style }) => (
  <Link to={linkTo}>
    <span
      className={selected ? 'nav-item-selected' : 'nav-item'}
      onClick={handleClick}
      style={style}
    >
      { children }
    </span>
  </Link>
)

export default NavigationItem
