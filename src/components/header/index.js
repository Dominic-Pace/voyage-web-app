import React from 'react'

import { Grid } from 'react-bootstrap'
import HeaderLogo from './logo'
import HeaderNav from './navigation'


import './styles.css'

const Header = () => (
  <Grid className="header">
    <HeaderLogo />
    <HeaderNav />
  </Grid>
)

export default Header
