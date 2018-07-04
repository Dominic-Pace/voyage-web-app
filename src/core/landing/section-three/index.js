import React from 'react'

import Banner from '../../../components/banner'

import SectionThreeBanner from '../../../assets/images/landing/three-banner.png'
import StepThreeContent from './content'

const SectionThree = ({ categories }) => (
  <Banner
    bgImage={SectionThreeBanner}
    className="section-center-container"
    name="packages"
    height={650}
  >
    <StepThreeContent
      categories={categories}
    />
  </Banner>
)


export default SectionThree
