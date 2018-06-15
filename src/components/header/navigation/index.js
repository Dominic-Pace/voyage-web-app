import React from 'react'

import NavItem from './item'

const NavigationTabs = () => (
  <div className="nav-header float-lg-right">
    <div className="nav-container">
      <NavItem selected>
        Home
      </NavItem>
      <NavItem>Explore</NavItem>
      <NavItem>Top Picks</NavItem>
      <NavItem>My Upcoming Trips</NavItem>
      <NavItem>Login</NavItem>

    </div>
  </div>
)

export default NavigationTabs