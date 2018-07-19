import React from 'react'

import SectionThreeHeader from '../header'
import SectionThreeSlider from '../slider'
import SectionThreeFooter from '../footer'

const SectionThreeContent = ({ packages }) => (
  <div>
    <SectionThreeHeader />
    <SectionThreeSlider
      packages={packages}
    />
    <SectionThreeFooter />
  </div>
)

export default SectionThreeContent
