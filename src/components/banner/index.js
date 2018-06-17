import React from 'react'

import { Grid } from 'react-bootstrap'

import './styles.css'
const Banner = ({ bgImage, children, height, style }) => (
  <Grid
    className="banner-background"
    style={{
      backgroundImage: `url(${bgImage})`,
      height: height || null,
      ...style
    }}
  >
    { children}
  </Grid>
)

export default Banner
