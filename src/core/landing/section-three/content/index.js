import React from 'react'

import SectionThreeHeader from '../header'
import SectionThreeSlider from '../slider'
import SectionThreeFooter from '../footer'

const SectionThreeContent = ({ locations }) => (
  <div>
    <SectionThreeHeader />
    <SectionThreeSlider
      locations={locations}
    />
    <SectionThreeFooter />
  </div>
)

export default SectionThreeContent
