import React from 'react'

import SectionThreeHeader from '../header'
import SectionThreeSlider from '../slider'
import SectionThreeFooter from '../footer'

const SectionThreeContent = ({ isMobileView, locations }) => (
  <div>
    <SectionThreeHeader />
    <SectionThreeSlider
      isMobileView={isMobileView}
      locations={locations}
    />
    <SectionThreeFooter />
  </div>
)

export default SectionThreeContent
