import React from 'react'

import Banner from '../../../components/banner'

import SectionOneBanner from '../../../assets/images/landing/one-banner.jpg'

const SectionOne = () => (
  <Banner
    bgImage={SectionOneBanner}
    height={600}
    style={{ marginLeft: -10, marginRight: -10 }}
  >
    <div>Hello World</div>
  </Banner>
)

export default SectionOne
