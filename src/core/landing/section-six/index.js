import React from 'react'

import { Grid } from 'react-bootstrap'
import SectionSixContent from './content'
import SectionThree from "../section-three";

const SectionSix = ({ contactUs, handleSubmitClick, isMobileView }) => (
  <Grid className="footer-container">
    <SectionSixContent
      contactUs={contactUs}
      handleSubmitClick={handleSubmitClick}
      isMobileView={isMobileView}
    />
  </Grid>
)

export default SectionSix
