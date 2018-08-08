import React from 'react'

import Content from './content'
import WideImage from '../wide-image'
import { Grid } from 'react-bootstrap'

const determineClassName = (accommodation, selected)=> {
  if (selected) {
    return 'wide-card-container-selected'
  } else if (accommodation.isRecommended) {
    return 'wide-card-container-recommended'
  } else {
    return 'wide-card-container'
  }
}
export const AccommodationCard = ({ accommodation, handleClick, selected }) => (
  <Grid
    className={determineClassName(accommodation, selected)}
    onClick={() => { handleClick(accommodation) }}
  >
    <WideImage imageUrl={accommodation.imageUrl} selected={selected} />
    <Content accommodation={accommodation} />
  </Grid>
)