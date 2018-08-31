import React from 'react'

import { Grid } from 'react-bootstrap'
import SectionSixContent from './content'
import SectionThree from "../section-three";

const SectionSix = ({ handleSubmitClick, isMobileView }) => (
  <Grid className="footer-container">
    <SectionSixContent
      handleSubmitClick={handleSubmitClick}
      isMobileView={isMobileView}
    />
  </Grid>
)

export default SectionSix
