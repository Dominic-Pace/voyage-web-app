import React from 'react'

import { Grid } from 'react-bootstrap'
import HeaderLogo from './logo'
import HeaderNav from './navigation'


import './styles.css'

const Header = ({ handleLogoutClick, user }) => (
  <Grid className="header">
    <HeaderLogo />
    <HeaderNav
      handleLogoutClick={handleLogoutClick}
      user={user}
    />
  </Grid>
)

export default Header
