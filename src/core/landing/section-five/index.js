import React from 'react'

import Banner from '../../../components/banner'
import SectionFiveBanner from '../../../assets/images/landing/five-banner.png'
import StepFiveContent from './content'

const SectionFive = ({ handleSubmitClick }) => (
  <Banner
    bgImage={SectionFiveBanner}
    className="section-center-container"
    height={300}
  >
    <StepFiveContent
      handleSubmitClick={handleSubmitClick}
    />
  </Banner>
)

export default SectionFive
