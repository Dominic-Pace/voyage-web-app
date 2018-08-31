import React from 'react'

import SectionTwoFooter from '../footer'
import SectionTwoHeader from '../header'
import StepCards from '../step-card/cards'

const SectionTwoContent = ({ isMobileView }) => (
  <React.Fragment>
    <SectionTwoHeader />
    <StepCards
      isMobileView={isMobileView}
    />
    <SectionTwoFooter />
  </React.Fragment>
)

export default SectionTwoContent
