import React from 'react'

import HeaderLogo from './logo'
import NavigationTabs from './navigation'
import RightNavigation from './profile'
import './styles.css'


const Header = () => (
  <header className="header">
    <HeaderLogo />
    <NavigationTabs />
    <RightNavigation />
  </header>
)

export default Header
