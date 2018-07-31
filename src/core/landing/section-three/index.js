import React from 'react'

import Banner from '../../../components/banner'

import SectionThreeBanner from '../../../assets/images/landing/three-banner.png'
import StepThreeContent from './content'

const SectionThree = ({ locations }) => (
  <Banner
    bgImage={SectionThreeBanner}
    className="section-center-container"
    id="explore"
    name="packages"
    height={650}
  >
    <StepThreeContent
      locations={locations}
    />
  </Banner>
)


export default SectionThree
