import React from 'react'

const NavigationItem = ({ children, onClick, selected, style }) => (
  <span
    className={selected ? 'nav-item-selected' : 'nav-item'}
    onClick={onClick}
    style={style}
  >
    { children }
  </span>
)

export default NavigationItem