import React from 'react'

import { Grid } from 'react-bootstrap'

import './styles.css'

const Banner = ({ bgImage, children, className, height, id, name, style }) => (
  <Grid
    className={className ? `${className} banner-background` : 'banner-background'}
    id={id}
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
