import React from 'react'

import NavItem from './item'

const homePath = '/'
const explorePath = '/explore'

const NavigationTabs = () => (
  <div className="nav-header float-lg-right">
    <div className="nav-container">
      <NavItem
        linkTo={homePath}
        selected={window.location.pathname === homePath}
      >
        Home
      </NavItem>
      <NavItem
        linkTo={explorePath}
        selected={
          window.location.pathname.includes(explorePath) ||
          window.location.pathname.includes('package') ||
          window.location.pathname.includes('booking')
        }
      >
        Explore
      </NavItem>
    </div>
  </div>
)

export default NavigationTabs
