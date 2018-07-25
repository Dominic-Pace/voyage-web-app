import React from 'react'

import NavItem from './item'

const NavigationTabs = () => (
  <div className="nav-header float-lg-right">
    <div className="nav-container">
      <NavItem
        linkTo="/"
        selected
      >
        Home
      </NavItem>
      <NavItem
        linkTo="/test-page"
      >
        Explore
      </NavItem>
    </div>
  </div>
)

export default NavigationTabs