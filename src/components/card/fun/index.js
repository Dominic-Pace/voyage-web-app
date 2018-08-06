import React from 'react'

import Content from './content'
import FunImage from './image'
import { Grid } from 'react-bootstrap'

export const FunCard = ({ addOn, handleClick }) => (
  <Grid className="fun-card-container">
    <FunImage
      handleClick={handleClick}
      imageUrl={addOn.image_url}
      name={addOn.name}
    />
    <Content
      addOn={addOn}
    />
  </Grid>
)
