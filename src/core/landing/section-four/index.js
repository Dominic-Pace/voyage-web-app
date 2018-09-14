import React from 'react'

import { Grid } from 'react-bootstrap'
import StepFourContent from './content'

const SectionFour = ({ customPackage, handleSubmitClick }) => (
  <Grid
    className="section-four-container"
    id="build"
  >
    <StepFourContent
      customPackage={customPackage}
      handleSubmitClick={handleSubmitClick}
    />
  </Grid>
)

export default SectionFour
