import React from 'react'

import Content from './content'
import WideImage from '../wide-image'
import { Grid } from 'react-bootstrap'

export const FunCard = ({ addOn, handleClick, selected }) => (
  <Grid
    className={`wide-card-container${selected ? '-selected' : ''}`}
    onClick={() => { handleClick(addOn) }}
  >
    <WideImage
      imageUrl={addOn.image_url}
      selected={selected}
    />
    <Content addOn={addOn} />
  </Grid>
)
