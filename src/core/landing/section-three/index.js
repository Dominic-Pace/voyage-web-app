import React from 'react'

import Banner from '../../../components/banner'

import SectionThreeBanner from '../../../assets/images/landing/three-banner.png'
import StepThreeContent from './content'

const SectionThree = () => (
  <Banner
    bgImage={SectionThreeBanner}
    className="section-center-container"
    height={800}
  >
    <StepThreeContent />
  </Banner>
)


export default SectionThree
