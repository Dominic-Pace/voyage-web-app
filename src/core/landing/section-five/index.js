import React from 'react'

import Banner from '../../../components/banner'
import SectionFiveBanner from '../../../assets/images/landing/five-banner.png'
import StepFiveContent from './content'

const SectionFive = ({ handleSubmitClick, isMobileView, joinMail }) => (
  <Banner
    bgImage={SectionFiveBanner}
    className="section-center-container"
    height={isMobileView ? null : 300}
  >
    <StepFiveContent
      handleSubmitClick={handleSubmitClick}
      joinMail={joinMail}
    />
  </Banner>
)

export default SectionFive
