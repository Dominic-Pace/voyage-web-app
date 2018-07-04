import React from 'react'

import SectionThreeHeader from '../header'
import SectionThreeSlider from '../slider'
import SectionThreeFooter from '../footer'

const SectionThreeContent = ({ categories }) => (
  <div>
    <SectionThreeHeader />
    <SectionThreeSlider
      categories={categories}
    />
    <SectionThreeFooter />
  </div>
)

export default SectionThreeContent
