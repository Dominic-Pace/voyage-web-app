import React from 'react'

import PackageCard  from '../../../../components/card'
import { Row } from 'react-bootstrap'

const SectionThreeSlider = () => (
  <Row>
    <PackageCard
      amountAvailable={8}
      imageUrl="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
      location="Tropical"
      nightlyPrice={89}
      rating={3.7}
    />
    <PackageCard
      amountAvailable={10}
      imageUrl="https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg"
      location="City Lifestyle"
      rating={4.4}
    />
    <PackageCard
      amountAvailable={10}
      imageUrl="https://images.pexels.com/photos/771079/pexels-photo-771079.jpeg"
      location="Nature and Hiking"
      rating={4.8}
    />
  </Row>
)

export default SectionThreeSlider
