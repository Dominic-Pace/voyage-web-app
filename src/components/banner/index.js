import React from 'react'

import { Grid } from 'react-bootstrap'

import './styles.css'

const Banner = ({ bgImage, children, className, height, name, style }) => (
  <Grid
    className={className ? `${className} banner-background` : 'banner-background'}
    name={name}
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
