import React from 'react'

import { Grid } from 'react-bootstrap'
import StepTwoContent from './content'

import '../styles.css'

const SectionTwo = ({ isMobileView }) => (
  <Grid
    className="section-two-container"
  >
    <StepTwoContent
      isMobileView={isMobileView}
    />
  </Grid>
)

export default SectionTwo
