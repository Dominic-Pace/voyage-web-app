import React from 'react'

import { Grid } from 'react-bootstrap'
import StepFourContent from './content'

const SectionFour = ({ handleSubmitClick }) => (
  <Grid
    className="section-four-container"
    id="build"
  >
    <StepFourContent
      handleSubmitClick={handleSubmitClick}
    />
  </Grid>
)

export default SectionFour
