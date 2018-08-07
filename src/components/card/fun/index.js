import React from 'react'

import Content from './content'
import FunImage from './image'
import { Grid } from 'react-bootstrap'

export const FunCard = ({ addOn, handleClick, selected }) => (
  <Grid
    className={`fun-card-container${selected ? '-selected' : ''}`}
    onClick={() => { handleClick(addOn.id) }}
  >
    <FunImage imageUrl={addOn.image_url} />
    <Content addOn={addOn} />
  </Grid>
)
