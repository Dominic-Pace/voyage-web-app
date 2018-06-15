import React from 'react'

import './styles.css'
const Banner = ({ bgImage, children, height, style }) => (
  <div
    className="banner-background"
    style={{
      backgroundImage: `url(${bgImage})`,
      height: height || null,
      ...style
    }}
  >
    { children}
  </div>
)

export default Banner
