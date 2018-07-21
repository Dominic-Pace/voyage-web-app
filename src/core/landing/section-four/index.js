import React from 'react'

import { Grid } from 'react-bootstrap'
import StepFourContent from './content'

const SectionFour = ({ handleSubmitClick }) => (
  <Grid
    className="section-four-container"
  >
    <StepFourContent
      handleSubmitClick={handleSubmitClick}
    />
  </Grid>
)

export default SectionFour
