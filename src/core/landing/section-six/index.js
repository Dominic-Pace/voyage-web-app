import React from 'react'

import { Grid } from 'react-bootstrap'
import SectionSixContent from './content'

const SectionSix = ({ handleSubmitClick }) => (
  <Grid className="footer-container">
    <SectionSixContent
      handleSubmitClick={handleSubmitClick}
    />
  </Grid>
)

export default SectionSix
